'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap } from 'lucide-react';
import { grundstoffTopics, zusatzstoffTopicsB } from '@/data/topics';
import { getQuestionsForClass } from '@/data/questions';
import { pickText } from '@/data/types';
import type { LicenseClass } from '@/data/types';

interface Props {
  licenseClass: LicenseClass;
}

const CLASSES: { id: LicenseClass; key: string }[] = [
  { id: 'A',    key: 'A' },
  { id: 'B',    key: 'B' },
  { id: 'AB',   key: 'AB' },
  { id: 'Mofa', key: 'Mofa' }
];

export function TopicsClient({ licenseClass: initialClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>(initialClass);

  // Count how many questions in the pool match each top-level topic code.
  // We match by prefix ("G.06" matches anything whose topicCode starts with "G.06").
  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);
  const countFor = (code: string) =>
    pool.filter((q) => (q.topicCode ?? '').startsWith(code)).length;

  // For Mofa / A class we just show the Grundstoff list — class-B-specific
  // Zusatzstoff topics aren't relevant. Class AB shows both.
  const showZusatzB = licenseClass === 'B' || licenseClass === 'AB';

  return (
    <main className="flex-1 px-4 sm:px-6 py-10 sm:py-14">
      <header className="max-w-5xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 mb-5">
          <GraduationCap className="w-4 h-4 text-brand" />
          <span className="text-brand text-xs font-semibold tracking-[0.2em] uppercase">
            {t('topics.title')}
          </span>
        </div>
        <h1 className="display text-[clamp(1.5rem,4.5vw,2.75rem)] uppercase leading-tight max-w-3xl">
          {t('topics.title')}
        </h1>
        <p className="text-white/60 mt-3 max-w-2xl">{t('topics.subtitle')}</p>

        <div className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {CLASSES.map(({ id, key }) => (
            <button
              key={id}
              onClick={() => setLicenseClass(id)}
              aria-pressed={licenseClass === id}
              className={[
                'focus-brand px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition',
                licenseClass === id ? 'bg-brand text-black' : 'text-white/65 hover:text-white'
              ].join(' ')}
            >
              {t(`classes.${key}.name`)}
            </button>
          ))}
        </div>
      </header>

      <Section
        title={t('topics.grundstoff')}
        topics={grundstoffTopics}
        countFor={countFor}
        locale={locale}
        licenseClass={licenseClass}
      />

      {showZusatzB && (
        <Section
          title={t('topics.zusatzstoff')}
          topics={zusatzstoffTopicsB}
          countFor={countFor}
          locale={locale}
          licenseClass={licenseClass}
        />
      )}
    </main>
  );
}

function Section({
  title,
  topics,
  countFor,
  locale,
  licenseClass
}: {
  title: string;
  topics: typeof grundstoffTopics;
  countFor: (code: string) => number;
  locale: string;
  licenseClass: LicenseClass;
}) {
  const t = useTranslations();
  return (
    <section className="max-w-5xl mx-auto mb-12">
      <h2 className="text-xs uppercase tracking-[0.2em] text-white/45 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
        {topics.map((topic, idx) => {
          const count = countFor(topic.code);
          // Topics with zero questions are dimmed but still listed (so the
          // catalogue picture stays accurate).
          return (
            <motion.div
              key={topic.code}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
            >
              <Link
                href={`/quiz/${licenseClass}?topic=${encodeURIComponent(topic.code)}`}
                className={[
                  'focus-brand group flex flex-col h-full rounded-2xl border border-white/10 bg-ink-100 p-4 transition-all',
                  count > 0
                    ? 'hover:border-brand hover:-translate-y-0.5 hover:shadow-glow-soft'
                    : 'opacity-50 pointer-events-none'
                ].join(' ')}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-white/70">
                    {topic.code}
                  </span>
                  <ChevronRight className="w-4 h-4 text-brand opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="font-bold text-sm sm:text-base leading-snug mb-2">
                  {pickText(topic.name, locale)}
                </h3>
                <p className="mt-auto text-[11px] uppercase tracking-widest text-white/45">
                  {t('topics.questionsHere', { count })}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
