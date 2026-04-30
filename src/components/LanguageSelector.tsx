'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter, locales, type Locale } from '@/i18n/routing';
import { Flag } from './icons/Flags';

const labels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
  ru: 'Русский',
  pl: 'Polski'
};

export function LanguageSelector() {
  const t = useTranslations('home');
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (next: Locale) => {
    if (next === current) return;
    try {
      localStorage.setItem('preferred-locale', next);
    } catch {}
    router.replace(pathname, { locale: next });
  };

  return (
    <section
      aria-labelledby="language-heading"
      className="w-full max-w-5xl mx-auto px-6 py-10"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            id="language-heading"
            className="display text-2xl md:text-3xl uppercase tracking-wide"
          >
            {t('languageHeading')}
          </h2>
          <div className="h-[2px] w-12 bg-brand mt-2" />
        </div>
        <span className="text-xs text-white/50 uppercase tracking-widest hidden sm:block">
          {labels[current]}
        </span>
      </div>

      <ul className="flex flex-wrap gap-3 md:gap-4">
        {locales.map((loc) => {
          const isActive = loc === current;
          return (
            <li key={loc}>
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => switchTo(loc)}
                aria-label={labels[loc]}
                aria-pressed={isActive}
                className={`focus-brand group relative flex items-center gap-3 rounded-2xl border px-3 py-2 transition-colors ${
                  isActive
                    ? 'border-brand bg-brand/10 shadow-glow'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                }`}
              >
                <Flag locale={loc} className="w-12 h-7" />
                <span
                  className={`text-sm font-semibold ${
                    isActive ? 'text-brand' : 'text-white/80 group-hover:text-white'
                  }`}
                >
                  {labels[loc]}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="locale-dot"
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand shadow-glow"
                  />
                )}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
