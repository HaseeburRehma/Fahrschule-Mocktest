'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { CaretRight, Check, Lock } from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import { grundstoffTopics, zusatzstoffTopicsB, type Topic } from '@/data/topics';
import { getQuestionsForClass } from '@/data/questions';
import { classOptions, pickText, type LicenseClass } from '@/data/types';
import { useQuiz } from '@/store/quiz';
import { useMounted } from '@/hooks/useMounted';

interface Props {
  licenseClass: LicenseClass;
}

interface TopicStat {
  total: number;
  mastered: number;
}

/** Figma "DE/Theorie": progress header + one row per topic. */
export function TopicsClient({ licenseClass: initialClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const mounted = useMounted();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>(initialClass);
  const masteredMap = useQuiz((s) => s.mastered);

  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);
  const showZusatzB = licenseClass === 'B' || licenseClass === 'AB';
  const topics = useMemo(
    () => (showZusatzB ? [...grundstoffTopics, ...zusatzstoffTopicsB] : grundstoffTopics),
    [showZusatzB]
  );

  // One pass over the pool: questions + mastered per top-level topic code.
  const stats = useMemo(() => {
    const m = new Map<string, TopicStat>();
    const mastered = mounted ? masteredMap ?? {} : {};
    for (const topic of topics) m.set(topic.code, { total: 0, mastered: 0 });
    for (const q of pool) {
      const code = q.topicCode ?? '';
      const topic = topics.find((tp) => code === tp.code || code.startsWith(`${tp.code}.`));
      if (!topic) continue;
      const s = m.get(topic.code)!;
      s.total++;
      if (mastered[q.id]) s.mastered++;
    }
    return m;
  }, [pool, topics, masteredMap, mounted]);

  const withQuestions = topics.filter((tp) => (stats.get(tp.code)?.total ?? 0) > 0);
  const doneTopics = withQuestions.filter((tp) => {
    const s = stats.get(tp.code)!;
    return s.mastered === s.total;
  }).length;
  const totalQs = [...stats.values()].reduce((a, s) => a + s.total, 0);
  const masteredQs = [...stats.values()].reduce((a, s) => a + s.mastered, 0);
  const pct = totalQs ? Math.round((masteredQs / totalQs) * 100) : 0;

  return (
    <main className="relative isolate flex-1 overflow-hidden">
      <div className="fx-hero-glow -z-10 opacity-70" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-6 sm:px-6">
        <h1 className="text-heading-l text-white">{t('topics.title')}</h1>
        <p className="mt-0.5 text-body-s text-muted">{t('topics.subtitle')}</p>

        {classOptions.length > 1 && (
          <div className="mt-4 inline-flex gap-1 rounded-full bg-ink-200 p-1">
            {classOptions.map(({ id, key }) => (
              <button
                key={id}
                onClick={() => setLicenseClass(id)}
                aria-pressed={licenseClass === id}
                className={[
                  'focus-brand rounded-full px-3.5 py-1.5 text-label-m transition',
                  licenseClass === id ? 'bg-brand text-ink-0' : 'text-muted hover:text-white'
                ].join(' ')}
              >
                {t(`classes.${key}.name`)}
              </button>
            ))}
          </div>
        )}

        {/* Progress header card */}
        <div className="card-hero mt-4 flex items-center gap-4 p-[18px]">
          <div className="min-w-0 flex-1">
            <p className="text-title-m text-white">
              {t('topics.doneOf', { done: doneTopics, total: withQuestions.length })}
            </p>
            <p className="text-caption text-muted">{t('topics.masteredOf', { done: masteredQs, total: totalQs })}</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink-200">
              <div className="h-full rounded-full bg-brand shadow-glow transition-[width] duration-700" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <p className="text-emphasis text-[32px] leading-none">{pct}%</p>
        </div>

        <Section title={t('topics.grundstoff')} topics={grundstoffTopics} stats={stats} locale={locale} licenseClass={licenseClass} />
        {showZusatzB && (
          <Section title={t('topics.zusatzstoff')} topics={zusatzstoffTopicsB} stats={stats} locale={locale} licenseClass={licenseClass} />
        )}
      </div>
    </main>
  );
}

function Section({
  title,
  topics,
  stats,
  locale,
  licenseClass
}: {
  title: string;
  topics: Topic[];
  stats: Map<string, TopicStat>;
  locale: string;
  licenseClass: LicenseClass;
}) {
  const t = useTranslations();
  return (
    <section className="mt-6">
      <h2 className="mb-2.5 text-label-m uppercase text-muted">{title}</h2>
      <ul className="flex flex-col gap-2">
        {topics.map((topic) => {
          const s = stats.get(topic.code) ?? { total: 0, mastered: 0 };
          const empty = s.total === 0;
          const done = !empty && s.mastered === s.total;
          const started = s.mastered > 0;
          const name = pickText(topic.name, locale);
          const status = (
            <span
              aria-hidden
              className={[
                'flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-label-m',
                done
                  ? 'bg-brand text-ink-0 shadow-glow'
                  : started
                    ? 'border-2 border-brand text-brand'
                    : 'border border-ink-300 bg-ink-200 text-muted'
              ].join(' ')}
            >
              {done ? <Check size={18} weight="bold" /> : empty ? <Lock size={16} /> : topic.code.replace(/^G\./, '')}
            </span>
          );
          const body = (
            <>
              {status}
              <span className="min-w-0 flex-1">
                <span className="block text-title-m text-white">{name}</span>
                <span className={`block text-caption ${started ? 'text-brand' : 'text-muted'}`}>
                  {empty
                    ? t('topics.noQuestions')
                    : t('topics.rowMeta', { mastered: s.mastered, total: s.total })}
                </span>
              </span>
            </>
          );
          return (
            <li key={topic.code}>
              {empty ? (
                <div className="flex items-center gap-3 rounded-option border border-ink-300 bg-ink-100 p-3.5 opacity-50">
                  {body}
                </div>
              ) : (
                <Link
                  href={`/quiz/${licenseClass}?topic=${encodeURIComponent(topic.code)}`}
                  className={[
                    'focus-brand group flex items-center gap-3 rounded-option border bg-ink-100 p-3.5 transition hover:border-brand/60',
                    started && !done ? 'border-brand/50' : 'border-ink-300'
                  ].join(' ')}
                >
                  {body}
                  <CaretRight size={20} className="text-muted transition group-hover:translate-x-0.5 rtl:rotate-180" />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
