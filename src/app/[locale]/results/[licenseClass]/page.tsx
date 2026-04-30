import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ResultsClient } from '@/components/ResultsClient';
import type { LicenseClass } from '@/data/types';

const validClasses: LicenseClass[] = ['A', 'B', 'AB', 'Mofa'];

export default async function ResultsPage({
  params
}: {
  params: Promise<{ locale: string; licenseClass: string }>;
}) {
  const { locale, licenseClass } = await params;
  setRequestLocale(locale);

  if (!validClasses.includes(licenseClass as LicenseClass)) {
    notFound();
  }

  return <ResultsClient licenseClass={licenseClass as LicenseClass} />;
}
