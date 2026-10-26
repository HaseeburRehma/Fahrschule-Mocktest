import { setRequestLocale } from 'next-intl/server';
import { CinematicHero } from '@/components/CinematicHero';
import { ClassSelector } from '@/components/ClassSelector';
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
  const counts = Object.fromEntries(enabledClasses.map((c) => [c, getQuestionsForClass(c).length]));

  return (
    <main className="flex-1">
      <CinematicHero />
      <ClassSelector counts={counts} />
      <QuestionFilter />
      <InfoCard />
      <SocialProof />
      <TestimonialSlider />
    </main>
  );
}
