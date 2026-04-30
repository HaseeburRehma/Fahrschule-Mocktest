import { setRequestLocale } from 'next-intl/server';
import { CinematicHero } from '@/components/CinematicHero';
import { ClassSelector } from '@/components/ClassSelector';
import { InfoCard } from '@/components/InfoCard';
import { SocialProof } from '@/components/SocialProof';
import { TestimonialSlider } from '@/components/TestimonialSlider';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <CinematicHero />
      <ClassSelector />
      <InfoCard />
      <SocialProof />
      <TestimonialSlider />
    </main>
  );
}
