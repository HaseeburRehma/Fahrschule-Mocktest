import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n/locales';

type Tree = { [k: string]: string | Tree };
const flat = (d: Tree, p = ''): string[] =>
  Object.entries(d).flatMap(([k, v]) => (typeof v === 'string' ? [`${p}${k}`] : flat(v, `${p}${k}.`)));
const load = (l: string) =>
  JSON.parse(readFileSync(path.resolve(__dirname, `../messages/${l}.json`), 'utf8')) as Tree;

describe('translations', () => {
  const base = new Set(flat(load('de')));
  it.each(locales)('%s has exactly the German key set', (l) => {
    expect(new Set(flat(load(l)))).toEqual(base);
  });
  it.each(locales)('%s has no empty strings', (l) => {
    const t = load(l);
    for (const key of flat(t)) {
      const v = key.split('.').reduce<Tree | string>((n, k) => (n as Tree)[k], t);
      expect(String(v).trim(), key).not.toBe('');
    }
  });
});
