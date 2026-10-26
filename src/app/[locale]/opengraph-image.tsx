import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n/routing';

// Raster OG card — social networks (Facebook, X, LinkedIn, WhatsApp)
// do not render SVG previews.
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Fahrschule Abgefahrn — Theorie Probeprüfung';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // The built-in OG font only covers Latin glyphs; use German copy for
  // Arabic / Russian so the card never renders tofu boxes.
  const textLocale = locale === 'ar' || locale === 'ru' ? 'de' : locale;
  const t = await getTranslations({ locale: textLocale, namespace: 'home' });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#060706',
          backgroundImage: 'radial-gradient(circle at 78% 30%, rgba(0,255,36,0.28), rgba(6,7,6,0) 60%)',
          color: '#fff',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#00FF24', letterSpacing: 2 }}>
          #FAHRSCHULE ABGEFAHRN
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 28, maxWidth: 900 }}>
          {t('cinemaHeadline')}
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#AEB4AE', marginTop: 28, maxWidth: 880 }}>
          {t('tag')}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 48,
            alignSelf: 'flex-start',
            background: '#00FF24',
            color: '#040404',
            fontSize: 30,
            fontWeight: 700,
            padding: '18px 40px',
            borderRadius: 999
          }}
        >
          {t('ctaPrimary')}
        </div>
      </div>
    ),
    size
  );
}
