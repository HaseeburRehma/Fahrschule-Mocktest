'use client';

import { useTranslations } from 'next-intl';
import { useShallow } from 'zustand/react/shallow';
import {
  ArrowCounterClockwise,
  CaretRight,
  Check,
  Fire,
  SealCheck,
  SteeringWheel,
  Trophy,
  X
} from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import { useQuiz } from '@/store/quiz';
import { useMounted } from '@/hooks/useMounted';
import { computeStreak, examAttempts, masteryPercent } from '@/lib/progress';
import { EXAM_RULES } from '@/lib/exam';
import type { LicenseClass } from '@/data/types';
import { ProgressRing } from '../ui/ProgressRing';

interface Props {
  licenseClass: LicenseClass;
  poolSize: number;
}

const STEPS = 6;

export function HomeDashboard({ licenseClass, poolSize }: Props) {
  const t = useTranslations();
  const mounted = useMounted();
  const { history, masteredCount, wrongCount } = useQuiz(
    useShallow((s) => ({
      history: s.history ?? [],
      masteredCount: Object.keys(s.mastered ?? {}).length,
      wrongCount: Object.keys(s.wrong ?? {}).length
    }))
  );

  // Until mounted, render the empty state so SSR and hydration agree.
  const h = mounted ? history : [];
  const exams = examAttempts(h);
  const lastExam = exams[0];
  const pct = mounted ? masteryPercent(masteredCount, poolSize) : 0;
  const streak = computeStreak(h);
  const passedCount = exams.filter((e) => e.passed).length;
  const steps = exams.slice(0, STEPS).reverse();
  const examHref = `/quiz/${licenseClass}`;

  const nextTitle = lastExam ? t('home.nextAgainTitle') : t('home.nextFirstTitle');
  const nextBody = !lastExam
    ? t('home.nextFirstBody')
    : lastExam.passed
      ? t('home.lastPassed', { points: lastExam.errorPoints })
      : t('home.lastFailed', { points: lastExam.errorPoints });

  return (
    <section aria-labelledby="journey-heading" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        {/* "Deine Strecke zum Führerschein" */}
        <Link href={examHref} className="card-hero focus-brand group flex flex-col gap-4 p-[18px] transition hover:border-brand/60">
          <div className="flex items-center gap-2">
            <h2 id="journey-heading" className="flex-1 text-heading-m">
              <span className="block text-white">{t('home.journey1')}</span>
              <span className="text-emphasis block">{t('home.journey2')}</span>
            </h2>
            <span
              className="inline-flex items-center gap-1.5 rounded-full bg-ink-200 py-[7px] pe-3 ps-2.5 text-label-m text-white"
              aria-label={t('home.streak', { count: streak })}
            >
              <Fire size={18} weight="fill" className="text-gold" />
              {streak}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <ProgressRing value={pct} />
            <div className="min-w-0 flex-1">
              <p className="text-caption uppercase text-brand">{t('home.nextStep')}</p>
              <p className="text-heading-m text-white">{nextTitle}</p>
              <p className="text-body-s text-muted">{nextBody}</p>
            </div>
            <CaretRight size={22} className="text-muted transition group-hover:translate-x-0.5 rtl:rotate-180" />
          </div>

          {/* Stepper: last attempts, oldest → newest, then the open slots */}
          <ol className="flex items-center" aria-label={t('progress.history')}>
            {Array.from({ length: STEPS }, (_, i) => {
              const attempt = steps[i];
              const isNext = i === steps.length;
              return (
                <li key={i} className="flex flex-1 items-center last:flex-none">
                  <span
                    className={[
                      'flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full',
                      attempt
                        ? attempt.passed
                          ? 'bg-brand text-ink-0'
                          : 'bg-danger text-danger-ink'
                        : isNext
                          ? 'border-2 border-brand bg-ink-0 shadow-glow'
                          : 'border border-ink-300 bg-ink-200'
                    ].join(' ')}
                  >
                    {attempt ? (
                      attempt.passed ? <Check size={14} weight="bold" /> : <X size={12} weight="bold" />
                    ) : isNext ? (
                      <span className="h-2 w-2 rounded-full bg-brand" />
                    ) : null}
                  </span>
                  {i < STEPS - 1 && (
                    <span
                      className={`h-[3px] flex-1 rounded-[2px] ${i < steps.length ? 'bg-brand' : 'bg-ink-200'}`}
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </Link>

        <div className="flex flex-col gap-3">
          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-2.5">
            <StatTile Icon={Trophy} value={mounted ? `${passedCount}/${exams.length}` : '0/0'} label={t('home.tiles.passed')} />
            <StatTile Icon={SealCheck} value={String(mounted ? masteredCount : 0)} label={t('home.tiles.mastered')} />
            <StatTile
              Icon={ArrowCounterClockwise}
              value={String(mounted ? wrongCount : 0)}
              label={t('home.tiles.wrong')}
            />
          </div>

          {/* Exam simulation card (Figma "Nächster Termin") */}
          <div className="card flex flex-1 flex-col gap-3.5 p-[18px]">
            <div className="flex items-center gap-2">
              <p className="flex-1 text-title-m text-white">{t('home.examTitle')}</p>
              <Link href="/topics" className="focus-brand rounded text-label-m text-brand hover:underline">
                {t('home.examAll')}
              </Link>
            </div>
            <Link href={examHref} className="focus-brand group flex items-center gap-3.5 rounded-option">
              <span className="icon-tile h-12 w-12">
                <SteeringWheel size={24} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-title-m text-white">{t(`classes.${licenseClass}.name`)}</span>
                <span className="block text-body-s text-muted">
                  {t('home.examMeta', {
                    count: EXAM_RULES.totalQuestions,
                    points: EXAM_RULES.maxErrorPoints
                  })}
                </span>
              </span>
              <CaretRight size={22} className="text-muted transition group-hover:translate-x-0.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({
  Icon,
  value,
  label
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="card flex min-w-0 flex-col gap-2.5 p-3.5">
      <span className="icon-tile h-8 w-8">
        <Icon size={17} />
      </span>
      <p className="text-heading-l tabular-nums text-white">{value}</p>
      <p className="truncate text-caption text-muted">{label}</p>
    </div>
  );
}
