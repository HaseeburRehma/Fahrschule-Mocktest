import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/routing';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';
const classes = ['A', 'B', 'AB', 'Mofa'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    });
    for (const c of classes) {
      entries.push({
        url: `${BASE_URL}/${locale}/quiz/${c}`,
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }
  }
  return entries;
}
