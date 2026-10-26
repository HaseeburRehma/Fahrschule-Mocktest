import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales } from './locales';

export { locales, rtlLocales, type Locale } from './locales';

export const routing = defineRouting({
  locales,
  defaultLocale: 'de',
  localePrefix: 'always'
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
