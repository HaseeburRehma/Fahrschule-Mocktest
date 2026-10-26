import { setRequestLocale } from 'next-intl/server';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeDashboard } from '@/components/home/HomeDashboard';
import { QuestionFilter } from '@/components/QuestionFilter';
import { InfoCard } from '@/components/InfoCard';
import { SocialProof } from '@/components/SocialProof';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { getQuestionsForClass } from '@/data/questions';
import { enabledClasses } from '@/data/types';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Resolved on the server: only the number crosses to the client, so the
  // home page bundle doesn't include the question bank.
  const licenseClass = enabledClasses[0] ?? 'B';
  const poolSize = getQuestionsForClass(licenseClass).length;

  return (
    <main className="flex-1">
      <HomeHero examHref={`/quiz/${licenseClass}`} />
      <HomeDashboard licenseClass={licenseClass} poolSize={poolSize} />
      <QuestionFilter />
      <InfoCard />
      <SocialProof />
      <TestimonialSlider />
    </main>
  );
}
