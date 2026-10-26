'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useShallow } from 'zustand/react/shallow';
import { ArrowCounterClockwise, CheckCircle, House, ShareNetwork, XCircle } from '@phosphor-icons/react';
import { Link, useRouter } from '@/i18n/routing';
import { useQuiz } from '@/store/quiz';
import { evaluate } from '@/lib/scoring';
import { formatDuration } from '@/lib/progress';
import { getQuestionsForClass } from '@/data/questions';
import type { LicenseClass } from '@/data/types';
import { pickText } from '@/data/types';
import { AnimatedNumber } from './AnimatedNumber';
import { Confetti } from './Confetti';
import { Mascot } from './ui/Mascot';

interface Props {
  licenseClass: LicenseClass;
}

/** Practice rounds count as "mastered" from this accuracy upwards. */
const PRACTICE_PASS_RATIO = 0.8;

export function ResultsClient({ licenseClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const { current, reset, recordAttempt } = useQuiz(
    useShallow((s) => ({ current: s.current, reset: s.reset, recordAttempt: s.recordAttempt }))
  );
  const [shareOk, setShareOk] = useState(false);

  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);
  const result = useMemo(
    () => (current && current.finishedAt && current.licenseClass === licenseClass ? evaluate(current, pool) : null),
    [current, pool, licenseClass]
  );

  // Persist this attempt once (recordAttempt is idempotent per attempt id):
  // wrong/skipped → "wrong" set, exact answers → "mastered", plus history.
  useEffect(() => {
    if (!current || !result) return;
    const wrongIds: string[] = [];
    const masteredIds: string[] = [];
    for (const p of result.perQuestion) {
      // Only questions the user actually saw count as wrong in practice
      // rounds that ended early (out of lives).
      if (p.verdict === 'correct') masteredIds.push(p.question.id);
      else if (current.filter === null || p.selectedIds.length > 0) wrongIds.push(p.question.id);
    }
    recordAttempt(
      {
        id: `${current.licenseClass}:${current.startedAt}`,
        licenseClass: current.licenseClass,
        filter: current.filter,
        finishedAt: current.finishedAt ?? Date.now(),
        durationMs: result.durationMs,
        total: result.perQuestion.length,
        correct: result.correctCount,
        errorPoints: result.errorPoints,
        passed: current.filter === null ? result.passed : result.correctCount / Math.max(1, result.perQuestion.length) >= PRACTICE_PASS_RATIO
      },
      wrongIds,
      masteredIds
    );
  }, [current, result, recordAttempt]);

  if (!current || !result) {
    return (
      <main className="mx-auto flex max-w-md flex-1 flex-col items-center justify-center gap-4 px-6 py-20 text-center">
        <Mascot pose="think" sizes="160px" className="h-auto w-36" />
        <p className="text-body-l text-muted">{t('results.noResult')}</p>
        <Link href="/" className="btn-primary focus-brand">
          {t('results.backHome')}
        </Link>
      </main>
    );
  }

  const isExam = current.filter === null;
  const total = result.perQuestion.length;
  const accuracy = total ? Math.round((result.correctCount / total) * 100) : 0;
  const passed = isExam ? result.passed : accuracy >= PRACTICE_PASS_RATIO * 100;

  const onRetry = () => {
    const filter = current.filter;
    reset();
    if (!filter) router.push(`/quiz/${licenseClass}`);
    else if (filter.startsWith('topic:')) router.push(`/quiz/${licenseClass}?topic=${encodeURIComponent(filter.slice(6))}`);
    else router.push(`/quiz/${licenseClass}?filter=${encodeURIComponent(filter)}`);
  };

  const onShare = async () => {
    const url = typeof window !== 'undefined' ? `${window.location.origin}/${locale}` : '';
    try {
      if (navigator.share) {
        await navigator.share({ title: t('meta.title'), text: t('results.shareText', { accuracy }), url });
      } else {
        await navigator.clipboard.writeText(url);
        setShareOk(true);
        setTimeout(() => setShareOk(false), 2200);
      }
    } catch {
      // user cancelled
    }
  };

  const stats = [
    isExam
      ? { value: result.errorPoints, label: t('results.errorPointsShort'), tone: passed ? 'text-brand-600' : 'text-[#C21E5C]' }
      : { value: result.earned, prefix: '+', label: t('results.points'), tone: 'text-gold-deep' },
    { value: accuracy, suffix: '%', label: t('results.accuracy'), tone: 'text-brand-600' },
    { text: formatDuration(result.durationMs), label: t('results.timeTaken'), tone: 'text-[#1E5AD6]' }
  ];

  const mistakes = result.perQuestion.filter((p) => p.verdict !== 'correct' && (isExam || p.selectedIds.length > 0));

  return (
    <main className="flex-1 pb-10">
      <Confetti active={passed} />

      {/* Celebration / Hoppla hero (Figma "09/Quiz Gemeistert") */}
      <section
        className={[
          'relative isolate overflow-hidden',
          passed ? 'bg-paper-celebrate text-brand-900' : 'bg-ink-0 text-white'
        ].join(' ')}
      >
        {passed ? (
          <Image
            src="/images/mascot/celebrate.jpg"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[50%_60%] md:object-contain md:object-bottom"
          />
        ) : (
          <div className="fx-hero-glow -z-10 opacity-60" aria-hidden />
        )}

        <div className="mx-auto flex min-h-[560px] max-w-md flex-col px-4 pb-6 pt-10 md:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center font-tomorrow"
          >
            <p className={`text-caption uppercase tracking-[1px] ${passed ? 'text-[#2F5A26]' : 'text-muted'}`}>
              {isExam ? t(`classes.${licenseClass}.name`) : t('results.practice')}
            </p>
            <h1 className={`mt-1 font-tomorrow text-[30px] font-bold leading-tight ${passed ? 'text-brand-900' : 'text-danger'}`}>
              {passed ? (isExam ? t('results.passedTitle') : t('results.mastered')) : t('results.failedTitle')}
            </h1>
            <p className={`mt-1 text-[15px] font-medium ${passed ? 'text-[#2F5A26]' : 'text-muted'}`}>
              {t('results.summary', { correct: result.correctCount, total })}
            </p>
            {isExam && result.failureReason === 'twoFivePointersFailed' && (
              <p className="mt-2 text-body-s text-danger">{t('results.twoFivePointersFailed')}</p>
            )}
          </motion.div>

          {!passed && <Mascot pose="think" priority sizes="260px" className="mx-auto mt-6 h-auto w-56" />}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-auto flex flex-col items-center gap-4 rounded-sheet bg-paper px-5 py-[22px] shadow-card"
          >
            <dl className="flex w-full gap-2.5 text-center font-tomorrow">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-1 flex-col-reverse items-center gap-1 rounded-[16px] bg-paper-tile-green px-2 py-4">
                  <dt className="text-[12px] font-medium text-paper-sub-green">{s.label}</dt>
                  <dd className={`text-[22px] font-bold tabular-nums ${s.tone}`}>
                    {'text' in s ? (
                      s.text
                    ) : (
                      <>
                        {s.prefix}
                        <AnimatedNumber value={s.value} />
                        {s.suffix}
                      </>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              href="/progress"
              className="focus-brand flex min-h-[54px] w-full items-center justify-center rounded-full bg-brand font-tomorrow text-[16px] font-bold text-brand-900 transition hover:shadow-glow"
            >
              {t('results.continue')}
            </Link>
            <div className="flex w-full gap-2">
              <button
                onClick={onRetry}
                className="focus-brand flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-paper-tile font-tomorrow text-[14px] font-semibold text-paper-ink transition hover:bg-paper-tile-green"
              >
                <ArrowCounterClockwise size={18} weight="bold" />
                {t('results.tryAgain')}
              </button>
              <button
                onClick={onShare}
                className="focus-brand flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-paper-tile font-tomorrow text-[14px] font-semibold text-paper-ink transition hover:bg-paper-tile-green"
              >
                <ShareNetwork size={18} weight="bold" />
                {shareOk ? t('results.shareCopied') : t('results.share')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breakdown by category */}
      <section className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
        <h2 className="mb-3 text-heading-m text-white">{t('results.byCategory')}</h2>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {Object.entries(result.byCategory).map(([cat, val]) => {
            const pct = Math.round((val.correct / val.total) * 100);
            return (
              <li key={cat} className="card flex items-center gap-4 p-4">
                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-title-m text-white">{t(`categories.${cat}`)}</p>
                  <div className="h-2 overflow-hidden rounded-full bg-ink-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-brand shadow-glow"
                    />
                  </div>
                </div>
                <span className="text-label-m tabular-nums text-muted">
                  {val.correct}/{val.total}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Review of mistakes */}
      <section className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
        <h2 className="mb-3 text-heading-m text-white">{t('results.review')}</h2>
        {mistakes.length === 0 ? (
          <p className="card flex items-center gap-3 p-4 text-body-s text-brand">
            <CheckCircle size={22} weight="fill" />
            {t('results.reviewEmpty')}
          </p>
        ) : (
          <ul className="flex flex-col gap-2.5">
            {mistakes.map(({ question, selectedIds, verdict }) => {
              const correctText = question.options
                .filter((o) => question.correctIds.includes(o.id))
                .map((o) => pickText(o.text, locale))
                .join(' · ');
              const yours = question.options
                .filter((o) => selectedIds.includes(o.id))
                .map((o) => pickText(o.text, locale))
                .join(' · ');
              return (
                <li key={question.id} className="card p-5">
                  <p className="mb-1 text-caption uppercase text-muted">{t(`categories.${question.category}`)}</p>
                  <p className="mb-3 text-title-m text-white">{pickText(question.question, locale)}</p>
                  <p className="mb-1.5 flex gap-2 rounded-[12px] bg-danger-surface px-3 py-2 text-body-s text-danger">
                    <XCircle size={20} className="mt-px shrink-0" />
                    <span>
                      <span className="font-semibold">{t('results.yourAnswer')}:</span>{' '}
                      {yours || (verdict === 'skipped' ? '—' : '')}
                    </span>
                  </p>
                  <p className="mb-3 flex gap-2 rounded-[12px] bg-brand-800 px-3 py-2 text-body-s text-brand">
                    <CheckCircle size={20} weight="fill" className="mt-px shrink-0" />
                    <span>
                      <span className="font-semibold">{t('results.correctAnswer')}:</span> {correctText}
                    </span>
                  </p>
                  <p className="text-body-s text-muted">{pickText(question.explanation, locale)}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <div className="mx-auto mt-8 flex max-w-3xl px-4 sm:px-6">
        <Link href="/" className="btn-ghost focus-brand">
          <House size={18} />
          {t('results.backHome')}
        </Link>
      </div>
    </main>
  );
}
