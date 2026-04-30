import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { QuizClient } from '@/components/QuizClient';
import type { LicenseClass } from '@/data/types';

const validClasses: LicenseClass[] = ['A', 'B', 'AB', 'Mofa'];

export default async function QuizPage({
  params
}: {
  params: Promise<{ locale: string; licenseClass: string }>;
}) {
  const { locale, licenseClass } = await params;
  setRequestLocale(locale);

  if (!validClasses.includes(licenseClass as LicenseClass)) {
    notFound();
  }

  return <QuizClient licenseClass={licenseClass as LicenseClass} />;
}
