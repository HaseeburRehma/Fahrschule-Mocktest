import { getTranslations } from 'next-intl/server';
import { ArrowRight, Star, Translate, BookOpen } from '@phosphor-icons/react/dist/ssr';
import { Link } from '@/i18n/routing';
import { Mascot, SpeechBubble } from '../ui/Mascot';

/** Landing hero: headline with the green "Emphasis" line + waving mascot. */
export async function HomeHero({ examHref }: { examHref: string }) {
  const t = await getTranslations('home');

  const trust = [
    { Icon: Star, label: t('trustReviews') },
    { Icon: BookOpen, label: t('trustTheory') },
    { Icon: Translate, label: t('trustLanguages') }
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div className="fx-hero-glow -z-10" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-4 pt-6 sm:px-6 md:grid-cols-[1fr_minmax(280px,380px)] md:pb-8 md:pt-14">
        <div className="animate-fade-in-up">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-ink-200 px-3 py-1.5 text-label-m text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-glow" aria-hidden />
            {t('tag')}
          </p>
          <h1 className="text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            <span className="block text-white">{t('cinemaLine1')}</span>
            <span className="text-emphasis block">{t('cinemaLine2')}</span>
          </h1>
          <p className="mt-4 max-w-xl text-body-l text-muted">{t('cinemaSubheadline')}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={examHref} className="btn-primary focus-brand">
              {t('ctaPrimary')}
              <ArrowRight size={18} weight="bold" className="rtl:rotate-180" />
            </Link>
            <Link href="/topics" className="btn-outline focus-brand">
              {t('filter.topics')}
            </Link>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {trust.map(({ Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-300 bg-ink-100 px-3 py-1.5 text-caption text-muted"
              >
                <Icon size={15} weight="fill" className="text-brand" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[380px] md:block" aria-hidden>
          <SpeechBubble className="absolute -top-2 start-0 z-10 max-w-[230px]">{t('mascotSpeech')}</SpeechBubble>
          <div className="absolute inset-x-6 bottom-6 top-16 -z-10 rounded-full bg-brand/20 blur-3xl" />
          <Mascot pose="wave" priority sizes="380px" className="mx-auto mt-12 h-auto w-[86%]" />
        </div>
      </div>
    </section>
  );
}
