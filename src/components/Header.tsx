'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter, locales, type Locale } from '@/i18n/routing';
import { Flag } from './icons/Flags';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const labels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
  ru: 'Русский',
  pl: 'Polski'
};

/**
 * Persistent site header — logo on the left, compact flag switcher
 * on the right. Lives in the locale layout so every page gets it.
 */
export function Header() {
  const t = useTranslations();
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Close on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  // Keyboard: focus the active item on open, trap Tab / arrows inside the
  // menu, Escape closes and returns focus to the trigger.
  useEffect(() => {
    if (!open) return;
    const items = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('button') ?? []);
    (menuRef.current?.querySelector<HTMLElement>('[aria-checked="true"]') ?? items()[0])?.focus();
    const onKey = (e: KeyboardEvent) => {
      const list = items();
      const idx = list.indexOf(document.activeElement as HTMLElement);
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
      } else if (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        if (!list.length) return;
        e.preventDefault();
        const back = e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey);
        list[(idx + (back ? -1 : 1) + list.length) % list.length].focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const switchTo = (next: Locale) => {
    setOpen(false);
    if (next === current) return;
    try {
      localStorage.setItem('preferred-locale', next);
    } catch {}
    router.replace(pathname, { locale: next });
  };

  return (
    <header className="sticky top-0 z-40 bg-ink-0/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo — real Fahrschule Abgefahrn marks (mobile mark + desktop wordmark) */}
        <Link
          href="/"
          aria-label={t('nav.home')}
          className="focus-brand group relative inline-flex items-center gap-2"
        >
          {/* glow halo behind logo on hover */}
          <span className="pointer-events-none absolute inset-0 -m-2 rounded-2xl bg-brand/0 blur-xl transition-colors duration-300 group-hover:bg-brand/30" />
          {/* Mobile mark */}
          <Image
            src="/images/logo-mark.svg"
            alt="Fahrschule Abgefahrn"
            width={36}
            height={36}
            priority
            unoptimized
            className="relative h-9 w-9 sm:hidden"
          />
          {/* Desktop wordmark */}
          <Image
            src="/images/logo-wordmark.png"
            alt="Fahrschule Abgefahrn"
            width={180}
            height={40}
            priority
            unoptimized
            className="relative hidden sm:block h-9 w-auto transition-[filter] duration-300 group-hover:[filter:drop-shadow(0_0_14px_rgba(1,254,33,0.45))]"
          />
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Compact flag switcher */}
          <div className="relative" ref={ref}>
            <button
              ref={triggerRef}
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label={t('nav.language')}
              className="focus-brand inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 sm:px-3 py-1.5 text-sm hover:border-brand/60 transition min-h-[40px]"
            >
              <Globe className="w-4 h-4 text-white/60 hidden sm:block" />
              <Flag locale={current} className="w-7 h-4" />
              <span className="hidden sm:inline text-white/80">{labels[current]}</span>
              <ChevronDown
                className={`w-4 h-4 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </button>

            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                ref={menuRef}
                role="menu"
                className="absolute right-0 mt-2 w-[min(13rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-ink-100 shadow-xl shadow-black/40 p-1.5 z-50"
              >
                {locales.map((loc) => {
                  const active = loc === current;
                  return (
                    <li key={loc}>
                      <button
                        role="menuitemradio"
                        aria-checked={active}
                        onClick={() => switchTo(loc)}
                        className={`w-full text-left flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                          active
                            ? 'bg-brand/10 text-brand'
                            : 'text-white/80 hover:bg-white/5'
                        }`}
                      >
                        <Flag locale={loc} className="w-7 h-4" />
                        <span className="flex-1">{labels[loc]}</span>
                        {active && <span className="h-2 w-2 rounded-full bg-brand" />}
                      </button>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
