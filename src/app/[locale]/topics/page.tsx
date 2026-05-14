import { setRequestLocale } from 'next-intl/server';
import { TopicsClient } from '@/components/TopicsClient';

export default async function TopicsPage({
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
  return <TopicsClient licenseClass={cls === 'A' || cls === 'B' || cls === 'AB' || cls === 'Mofa' ? cls : 'B'} />;
}
