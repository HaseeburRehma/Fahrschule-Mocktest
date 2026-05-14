import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, rtlLocales, type Locale } from '@/i18n/routing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CursorFollower } from '@/components/CursorFollower';

export const viewport: Viewport = {
  themeColor: '#01FE21'
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  const otherLocales = locales.filter((l) => l !== locale);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    title: t('title'),
    description: t('description'),
    keywords: [
      'Führerschein Theorieprüfung',
      'driving theory test',
      'German driving licence',
      'Probeprüfung online',
      'TÜV DEKRA mock test',
      'Klasse A B AB Mofa',
      'Fahrschule online üben'
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(otherLocales.map((l) => [l, `/${l}`]))
    },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
      shortcut: '/favicon.svg',
      apple: [{ url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' }]
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale,
      url: `/${locale}`,
      siteName: 'Fahrschule Abgefahrn',
      images: [{ url: '/apple-touch-icon.svg', width: 180, height: 180 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/apple-touch-icon.svg']
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = rtlLocales.includes(locale as Locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen bg-ink-0 text-white antialiased flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>
            <Header />
            <div className="flex-1 flex flex-col">{children}</div>
            <Footer />
          </SmoothScroll>
          <CursorFollower />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
