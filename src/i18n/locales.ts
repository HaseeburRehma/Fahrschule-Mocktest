// Plain data (no Next/next-intl runtime) so server utilities and tests can import it.
export const locales = ['de', 'en', 'ar', 'tr', 'ru', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const rtlLocales: ReadonlyArray<Locale> = ['ar'];
