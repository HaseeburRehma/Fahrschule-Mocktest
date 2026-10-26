import { setRequestLocale } from 'next-intl/server';
import { ProgressClient } from '@/components/ProgressClient';
import { getQuestionsForClass } from '@/data/questions';
import { enabledClasses } from '@/data/types';

export default async function ProgressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const licenseClass = enabledClasses[0] ?? 'B';
  return <ProgressClient licenseClass={licenseClass} poolSize={getQuestionsForClass(licenseClass).length} />;
}
