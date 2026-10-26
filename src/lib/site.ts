/**
 * Canonical public origin, used for metadata, robots.txt and the sitemap.
 *
 * Order: explicit NEXT_PUBLIC_SITE_URL → Vercel's production domain →
 * localhost (dev only). Never a placeholder domain, so crawlers are never
 * pointed at someone else's site.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel.replace(/\/+$/, '')}`;
  return 'http://localhost:3000';
}

export const SITE_URL = resolveSiteUrl();

/** Pages of the Fahrschule's main website that this app links out to. */
export const SCHOOL_LINKS = {
  website: 'https://fahrschule-abgefahrn.de',
  imprint: 'https://fahrschule-abgefahrn.de/impressum',
  privacy: 'https://fahrschule-abgefahrn.de/datenschutz',
  contact: 'https://fahrschule-abgefahrn.de/kontakt',
  instagram: 'https://www.instagram.com/fahrschule_abgefahrn/',
  facebook: 'https://www.facebook.com/Fahrschuleabgefahrn',
  youtube: 'https://www.youtube.com/channel/UCECNCGm2Ia-QIPwkaSDDJyA',
  tiktok: 'https://www.tiktok.com/@fahrschule_abgefahrn'
} as const;
