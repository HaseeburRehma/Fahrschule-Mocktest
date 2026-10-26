import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { enabledClasses } from '@/data/types';

const SRC = path.resolve(__dirname, '../src');

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = path.join(dir, f);
    return statSync(p).isDirectory() ? files(p) : /\.(tsx?|css)$/.test(f) ? [p] : [];
  });
}

describe('no third-party runtime assets (SEC-1, SEC-2)', () => {
  const sources = files(SRC).map((f) => [f, readFileSync(f, 'utf8')] as const);

  it('never loads images, scripts or styles from another origin', () => {
    const offenders: string[] = [];
    for (const [file, text] of sources) {
      // src= / url( / @import pointing at an absolute URL
      if (/(src=\{?["'`]https?:|url\(\s*["']?https?:|@import\s+url\(\s*["']?https?:)/.test(text)) {
        offenders.push(path.relative(SRC, file));
      }
    }
    expect(offenders).toEqual([]);
  });

  it('only references the driving-school domain as outbound links', () => {
    for (const [file, text] of sources) {
      if (!text.includes('fahrschule-abgefahrn.de')) continue;
      expect(path.relative(SRC, file)).toBe(path.join('lib', 'site.ts'));
    }
  });
});

describe('security headers (SEC-3)', () => {
  it('sends a strict CSP and hardening headers on every route', async () => {
    // @ts-expect-error -- next.config.mjs is plain JS (no type declarations)
    const config = (await import('../next.config.mjs')).default;
    const rules = await config.headers();
    const all = rules.find((r: { source: string }) => r.source === '/:path*');
    const h = Object.fromEntries(all.headers.map((x: { key: string; value: string }) => [x.key, x.value]));
    const csp: string = h['Content-Security-Policy'];
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("img-src 'self' data: blob:");
    expect(csp).not.toMatch(/https?:\/\//);
    expect(h['X-Content-Type-Options']).toBe('nosniff');
    expect(h['X-Frame-Options']).toBe('DENY');
    expect(h['Referrer-Policy']).toBeTruthy();
    expect(h['Strict-Transport-Security']).toMatch(/max-age=\d+/);
    expect(config.poweredByHeader).toBe(false);
    expect(config.images?.remotePatterns ?? []).toHaveLength(0);
  });
});

describe('SEO routes (BUG-5, BUG-6)', () => {
  it('sitemap lists only enabled licence classes and never a placeholder domain', () => {
    const urls = sitemap().map((e) => e.url);
    const quizClasses = new Set(urls.filter((u) => u.includes('/quiz/')).map((u) => u.split('/quiz/')[1]));
    expect([...quizClasses].sort()).toEqual([...enabledClasses].sort());
    expect(urls.some((u) => u.includes('example.com'))).toBe(false);
  });

  it('robots points at our own sitemap', () => {
    const r = robots();
    expect(String(r.sitemap)).toMatch(/\/sitemap\.xml$/);
    expect(String(r.sitemap)).not.toContain('example.com');
  });
});
