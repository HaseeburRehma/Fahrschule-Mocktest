import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/locales';
import { enabledClasses } from '@/data/types';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    entries.push({
      url: `${SITE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    });
    for (const path of ['topics', 'search']) {
      entries.push({
        url: `${SITE_URL}/${locale}/${path}`,
        changeFrequency: 'weekly',
        priority: 0.6
      });
    }
    // Only classes that are actually exposed in the UI — hidden classes
    // would just be thin pages for search engines.
    for (const c of enabledClasses) {
      entries.push({
        url: `${SITE_URL}/${locale}/quiz/${c}`,
        changeFrequency: 'weekly',
        priority: 0.8
      });
    }
  }
  return entries;
}
