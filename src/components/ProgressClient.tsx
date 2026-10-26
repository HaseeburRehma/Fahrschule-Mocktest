'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useShallow } from 'zustand/react/shallow';
import {
  ArrowCounterClockwise,
  BookmarkSimple,
  CaretRight,
  Check,
  Fire,
  Flag,
  GraduationCap,
  Lock,
  SealCheck,
  SteeringWheel,
  Trophy,
  type Icon
} from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import { useQuiz } from '@/store/quiz';
import { useMounted } from '@/hooks/useMounted';
import { computeStreak, examAttempts, formatDuration, masteryPercent } from '@/lib/progress';
import type { LicenseClass } from '@/data/types';

interface Milestone {
  key: string;
  Icon: Icon;
  done: boolean;
  detail: string;
  goal?: boolean;
}

/** Figma "DE/Fortschritt": overall progress card + "Dein Fahrplan" timeline + history. */
export function ProgressClient({ licenseClass, poolSize }: { licenseClass: LicenseClass; poolSize: number }) {
  const t = useTranslations();
  const locale = useLocale();
  const mounted = useMounted();
  const { history, masteredCount, wrongCount, markedCount } = useQuiz(
    useShallow((s) => ({
      history: s.history ?? [],
      masteredCount: Object.keys(s.mastered ?? {}).length,
      wrongCount: Object.keys(s.wrong ?? {}).length,
      markedCount: Object.keys(s.current?.marked ?? {}).length
    }))
  );

  const h = mounted ? history : [];
  const mastered = mounted ? masteredCount : 0;
  const exams = examAttempts(h);
  const passed = exams.filter((e) => e.passed);
  const pct = masteryPercent(mastered, poolSize);
  const streak = computeStreak(h);
  const passStreak = (() => {
    let n = 0;
    for (const e of exams) {
      if (!e.passed) break;
      n++;
    }
    return n;
  })();

  const milestones: Milestone[] = [
    { key: 'first', Icon: Flag, done: h.length > 0, detail: h.length > 0 ? t('progress.m.done') : t('progress.m.open') },
    {
      key: 'basics',
      Icon: GraduationCap,
      done: pct >= 25,
      detail: t('progress.m.basicsDetail', { pct })
    },
    {
      key: 'firstPass',
      Icon: SealCheck,
      done: passed.length > 0,
      detail: t('progress.m.passCount', { count: passed.length })
    },
    {
      key: 'threeInRow',
      Icon: SteeringWheel,
      done: passStreak >= 3,
      detail: t('progress.m.streakDetail', { count: Math.min(passStreak, 3) })
    },
    {
      key: 'catalogue',
      Icon: SealCheck,
      done: pct >= 90,
      detail: t('progress.m.catalogueDetail', { done: mastered, total: poolSize })
    },
    { key: 'ready', Icon: Trophy, done: pct >= 90 && passStreak >= 3, detail: t('progress.m.readyDetail'), goal: true }
  ];
  const doneCount = milestones.filter((m) => m.done).length;
  const currentIdx = milestones.findIndex((m) => !m.done);
  const dateFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

  return (
    <main className="relative isolate flex-1 overflow-hidden">
      <div className="fx-hero-glow -z-10" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-6 sm:px-6">
        <div className="flex items-start gap-3">
          <h1 className="flex-1 text-heading-l leading-[1.15]">
            <span className="block text-white">{t('home.journey1')}</span>
            <span className="text-emphasis block">{t('home.journey2')}</span>
          </h1>
          <span className="rounded-full bg-brand-800 px-3 py-1.5 text-label-m text-brand">
            {t(`classes.${licenseClass}.name`)}
          </span>
        </div>

        {/* Overall progress */}
        <div className="card-hero mt-4 p-[18px]">
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <p className="text-body-s text-muted">{t('progress.overall')}</p>
              <p className="text-emphasis text-[36px] leading-tight">{pct}%</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-200 px-3 py-2 text-label-m text-white">
              <Fire size={18} weight="fill" className="text-gold" />
              {t('progress.streakDays', { count: streak })}
            </span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink-200">
            <div className="h-full rounded-full bg-brand shadow-glow transition-[width] duration-700" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-2.5 text-body-s text-muted">
            {t('progress.stagesDone', { done: doneCount, total: milestones.length })}
          </p>
        </div>

        {/* Stats */}
        <dl className="mt-3 grid grid-cols-3 gap-2.5">
          {[
            { label: t('progress.stats.attempts'), value: exams.length },
            {
              label: t('progress.stats.passRate'),
              value: exams.length ? `${Math.round((passed.length / exams.length) * 100)}%` : '–'
            },
            {
              label: t('progress.stats.avgErrors'),
              value: exams.length
                ? (exams.reduce((s, e) => s + e.errorPoints, 0) / exams.length).toFixed(1)
                : '–'
            }
          ].map((s) => (
            <div key={s.label} className="card flex flex-col-reverse gap-1 p-3.5">
              <dt className="truncate text-caption text-muted">{s.label}</dt>
              <dd className="text-heading-l tabular-nums text-white">{s.value}</dd>
            </div>
          ))}
        </dl>

        {/* Dein Fahrplan */}
        <h2 className="mb-3 mt-7 text-title-m text-white">{t('progress.roadmap')}</h2>
        <ol className="relative">
          {milestones.map((m, i) => {
            const isCurrent = i === currentIdx;
            const locked = !m.done && !isCurrent;
            const nodeClass = m.goal
              ? 'border-2 border-gold bg-gold/15 text-gold'
              : m.done
                ? 'bg-brand text-ink-0 shadow-glow'
                : isCurrent
                  ? 'border-2 border-brand bg-ink-0 text-brand shadow-glow'
                  : 'bg-ink-200 text-subtle';
            return (
              <li key={m.key} className="relative flex gap-3.5 pb-2.5 last:pb-0">
                {i < milestones.length - 1 && (
                  <span
                    aria-hidden
                    className={`absolute start-[19px] top-10 h-[calc(100%-28px)] w-[3px] rounded ${m.done ? 'bg-brand' : 'bg-ink-300'}`}
                  />
                )}
                <span className={`relative z-10 mt-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${nodeClass}`}>
                  {m.done && !m.goal ? <Check size={20} weight="bold" /> : locked && !m.goal ? <Lock size={18} /> : <m.Icon size={20} weight={m.goal ? 'fill' : 'regular'} />}
                </span>
                <div
                  className={[
                    'flex-1 rounded-option border p-4',
                    m.goal ? 'border-gold/40 bg-ink-100' : isCurrent ? 'border-brand/50 bg-ink-100' : 'border-ink-300 bg-ink-100'
                  ].join(' ')}
                >
                  <p className={`text-title-m ${locked && !m.goal ? 'text-muted' : 'text-white'}`}>{t(`progress.m.${m.key}`)}</p>
                  <p className={`text-body-s ${m.goal ? 'text-gold' : m.done || isCurrent ? 'text-brand' : 'text-subtle'}`}>
                    {m.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Practice shortcuts */}
        <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
          <Shortcut
            href={`/quiz/${licenseClass}?filter=wrong`}
            Icon={ArrowCounterClockwise}
            title={t('progress.repeatWrong')}
            meta={t('progress.questionsCount', { count: mounted ? wrongCount : 0 })}
          />
          <Shortcut
            href={`/quiz/${licenseClass}?filter=marked`}
            Icon={BookmarkSimple}
            title={t('progress.repeatMarked')}
            meta={t('progress.questionsCount', { count: mounted ? markedCount : 0 })}
          />
        </div>

        {/* History */}
        <h2 className="mb-3 mt-7 text-title-m text-white">{t('progress.history')}</h2>
        {h.length === 0 ? (
          <div className="card flex flex-col items-start gap-3 p-5">
            <p className="text-body-s text-muted">{t('progress.empty')}</p>
            <Link href={`/quiz/${licenseClass}`} className="btn-primary focus-brand">
              {t('progress.start')}
            </Link>
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {h.map((a) => (
              <li key={a.id} className="flex items-center gap-3 rounded-option border border-ink-300 bg-ink-100 p-3.5">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${a.passed ? 'bg-brand-800 text-brand' : 'bg-danger-surface text-danger'}`}
                >
                  {a.passed ? <Check size={20} weight="bold" /> : <ArrowCounterClockwise size={18} weight="bold" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-title-m text-white">
                    {a.filter === null ? t('progress.exam') : t('progress.practice')}
                  </span>
                  <span className="block text-caption text-muted">
                    {dateFmt.format(a.finishedAt)} · {formatDuration(a.durationMs)}
                  </span>
                </span>
                <span className="text-end">
                  <span className={`block text-title-m tabular-nums ${a.passed ? 'text-brand' : 'text-danger'}`}>
                    {a.correct}/{a.total}
                  </span>
                  {a.filter === null && (
                    <span className="block text-caption text-muted">
                      {t('progress.errorPoints', { count: a.errorPoints })}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function Shortcut({ href, Icon, title, meta }: { href: string; Icon: Icon; title: string; meta: string }) {
  return (
    <Link href={href} className="card focus-brand group flex items-center gap-3.5 p-4 transition hover:border-brand/60">
      <span className="icon-tile h-12 w-12">
        <Icon size={24} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-title-m text-white">{title}</span>
        <span className="block text-caption text-muted">{meta}</span>
      </span>
      <CaretRight size={20} className="text-muted transition group-hover:translate-x-0.5 rtl:rotate-180" />
    </Link>
  );
}
