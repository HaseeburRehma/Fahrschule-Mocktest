import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['de', 'en', 'ar', 'tr', 'ru', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: ReadonlyArray<Locale> = ['ar'];

export const routing = defineRouting({
  locales,
  defaultLocale: 'de',
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
