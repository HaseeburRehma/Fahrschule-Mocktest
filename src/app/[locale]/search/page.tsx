import { setRequestLocale } from 'next-intl/server';
import { SearchClient } from '@/components/SearchClient';

export default async function SearchPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sp = await searchParams;
  const cls = typeof sp.class === 'string' ? sp.class : 'B';
  return <SearchClient licenseClass={cls === 'A' || cls === 'B' || cls === 'AB' || cls === 'Mofa' ? cls : 'B'} />;
}
