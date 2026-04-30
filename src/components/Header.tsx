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

  // Close on outside click / escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

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
            src="https://fahrschule-abgefahrn.de/wp-content/uploads/2024/05/Logo-Mark-Driving-School.svg"
            alt="Fahrschule Abgefahrn"
            width={36}
            height={36}
            priority
            unoptimized
            className="relative h-9 w-9 sm:hidden"
          />
          {/* Desktop wordmark */}
          <Image
            src="https://fahrschule-abgefahrn.de/wp-content/uploads/2022/02/logo.png"
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
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={open}
              aria-label={t('nav.language')}
              className="focus-brand inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm hover:border-brand/60 transition"
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
                role="menu"
                className="absolute right-0 mt-2 w-52 rounded-2xl border border-white/10 bg-ink-100 shadow-xl shadow-black/40 p-1.5 z-50"
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
