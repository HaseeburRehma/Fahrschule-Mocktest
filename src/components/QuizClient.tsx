'use client';

import { useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Flag as FlagIcon } from 'lucide-react';
import { useQuiz } from '@/store/quiz';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { getQuestionsForClass } from '@/data/questions';
import type { LicenseClass } from '@/data/types';

interface Props {
  licenseClass: LicenseClass;
}

export function QuizClient({ licenseClass }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const { current, start, setAnswer, next, prev, finish, reset } = useQuiz();

  // Pool of questions for this class.
  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);

  // Initialise (or reuse) a run for this class.
  useEffect(() => {
    if (!current || current.licenseClass !== licenseClass) {
      const order = pool.map((q) => q.id);
      // Fisher–Yates shuffle for variety on each run.
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      start(licenseClass, order);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [licenseClass]);

  if (!current || current.licenseClass !== licenseClass) {
    return <Skeleton />;
  }

  const total = current.order.length;
  const idx = current.cursor;
  const questionId = current.order[idx];
  const question = pool.find((q) => q.id === questionId);
  if (!question) return <Skeleton />;

  const selected = current.answers[questionId]?.selectedIds ?? [];
  const isLast = idx === total - 1;

  const toggle = (optId: string) => {
    const isMulti = question.correctIds.length > 1;
    let nextSel: string[];
    if (isMulti) {
      nextSel = selected.includes(optId)
        ? selected.filter((id) => id !== optId)
        : [...selected, optId];
    } else {
      nextSel = selected.includes(optId) ? [] : [optId];
    }
    setAnswer(questionId, nextSel);
  };

  const onNext = () => next();
  const onPrev = () => prev();
  const onFinish = () => {
    finish();
    router.push(`/results/${licenseClass}`);
  };

  const onExit = () => {
    if (typeof window !== 'undefined' && window.confirm(t('quiz.exitConfirm'))) {
      reset();
      router.push('/');
    }
  };

  return (
    <main className="flex-1 flex flex-col">
      {/* Progress / exit bar — sits below the global header */}
      <div className="sticky top-16 z-30 bg-ink-0/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs uppercase tracking-widest text-white/50">
              {t('quiz.label', { current: idx + 1, total })}
            </span>
            <button
              onClick={onExit}
              aria-label={t('quiz.exit')}
              className="text-white/50 hover:text-danger transition-colors inline-flex items-center gap-1 text-xs uppercase tracking-widest"
            >
              {t('quiz.exit')}
              <X className="w-4 h-4" />
            </button>
          </div>
          <ProgressBar current={idx + 1} total={total} />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 px-4 sm:px-6 py-6 sm:py-10 md:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={questionId}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={question}
              selected={selected}
              onToggle={toggle}
            />
          </motion.div>
        </AnimatePresence>

        {/* Action buttons — exam style: just Previous / Next (Finish on last) */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
          <button
            onClick={onPrev}
            disabled={idx === 0}
            className="focus-brand inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 min-h-[44px] hover:border-white/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('quiz.previous')}
          </button>

          {isLast ? (
            <button
              onClick={onFinish}
              className="focus-brand inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-black min-h-[44px] hover:shadow-glow-lg transition"
            >
              <FlagIcon className="w-4 h-4" />
              {t('quiz.finish')}
            </button>
          ) : (
            <button
              onClick={onNext}
              className="focus-brand inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-black min-h-[44px] hover:shadow-glow-lg transition"
            >
              {t('quiz.next')}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

function Skeleton() {
  const t = useTranslations();
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 px-6 py-20">
      <div className="skeleton h-8 w-48" />
      <div className="skeleton h-[420px] w-full max-w-3xl" />
      <p className="text-white/50 text-sm">{t('quiz.loading')}</p>
    </main>
  );
}
