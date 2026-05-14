'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Flag as FlagIcon, BookmarkCheck, Bookmark, LogOut } from 'lucide-react';
import { useQuiz } from '@/store/quiz';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { getQuestionsForClass } from '@/data/questions';
import { buildExam, buildFilteredExam, type FilterId } from '@/lib/exam';
import type { LicenseClass } from '@/data/types';

interface Props {
  licenseClass: LicenseClass;
}

const VALID_FILTERS: FilterId[] = [
  'signs', 'wrong', 'marked', 'picture', 'video',
  'selection', 'numbers', 'new', 'random', 'search', 'topics'
];

export function QuizClient({ licenseClass }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams?.get('filter');
  const topicParam = searchParams?.get('topic');
  const filter: FilterId | null =
    filterParam && (VALID_FILTERS as string[]).includes(filterParam)
      ? (filterParam as FilterId)
      : null;
  const topicCode = topicParam && /^[\w.]+$/.test(topicParam) ? topicParam : null;

  const { current, start, setAnswer, next, prev, goTo, toggleMark, finish, reset } = useQuiz();

  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);

  useEffect(() => {
    // Always start a fresh paper every time the user enters the quiz route
    // (or changes class / filter / topic). Persisted state is reused only
    // for cross-session features like the "marked" list and the "wrong" set.
    const state = useQuiz.getState();
    const markedIds = Object.keys(state.current?.marked ?? {});
    const wrongIds = Object.keys(state.wrong ?? {});
    const paper =
      topicCode || filter
        ? buildFilteredExam(licenseClass, pool, filter, { markedIds, wrongIds, topicCode })
        : buildExam(licenseClass, pool);
    start(licenseClass, paper.questionIds, filter ?? (topicCode ? `topic:${topicCode}` : null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [licenseClass, filter, topicCode]);

  // For each video question, remember whether the user has advanced past
  // the "preview" phase. Resetting on cursor change ensures every video
  // question opens in preview mode unless the user explicitly advanced.
  const [previewAdvancedFor, setPreviewAdvancedFor] = useState<Record<string, true>>({});

  if (!current || current.licenseClass !== licenseClass) {
    return <Skeleton />;
  }

  // Empty filter (e.g. user clicked "Marked" or "Wrong" with nothing tracked yet).
  if (current.order.length === 0) {
    return <EmptyState filter={filter} licenseClass={licenseClass} />;
  }

  const total = current.order.length;
  const idx = current.cursor;
  const questionId = current.order[idx];
  const question = pool.find((q) => q.id === questionId);
  if (!question) return <Skeleton />;

  const selected = current.answers[questionId]?.selectedIds ?? [];
  const isLast = idx === total - 1;
  const markedMap = current.marked ?? {};
  const isMarked = Boolean(markedMap[questionId]);

  const isVideo = Boolean(question.videoPath);
  const inPreview = isVideo && !previewAdvancedFor[questionId];

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

  const advancePastPreview = () => {
    setPreviewAdvancedFor((prev) => ({ ...prev, [questionId]: true }));
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
      {/* Progress / counter bar */}
      <div className="sticky top-16 z-30 bg-ink-0/85 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="text-xs uppercase tracking-widest text-white/50">
              {t('quiz.label', { current: idx + 1, total })}
            </span>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/50">
              <span className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-0.5 text-white/80">
                {licenseClass}
              </span>
            </span>
          </div>
          <ProgressBar current={idx + 1} total={total} />
        </div>
      </div>

      {/* Question card */}
      <div className="flex-1 px-4 sm:px-6 py-6 sm:py-10 md:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${questionId}:${inPreview ? 'p' : 'q'}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <QuestionCard
              question={question}
              selected={selected}
              onToggle={toggle}
              videoPhase={inPreview ? 'preview' : 'question'}
              onAdvanceFromPreview={advancePastPreview}
            />
          </motion.div>
        </AnimatePresence>

        {/* Four-button action row (Prev / Mark / Submit / Next) */}
        <div className="max-w-3xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          <button
            onClick={onPrev}
            disabled={idx === 0}
            className="focus-brand inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/80 min-h-[48px] hover:border-white/40 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('quiz.previous')}
          </button>

          <button
            onClick={() => toggleMark(questionId)}
            aria-pressed={isMarked}
            className={[
              'focus-brand inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold min-h-[48px] transition',
              isMarked
                ? 'bg-amber-400 text-black hover:bg-amber-300'
                : 'border border-amber-400/40 bg-amber-400/10 text-amber-200 hover:bg-amber-400/20'
            ].join(' ')}
          >
            {isMarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            {isMarked ? t('quiz.marked') : t('quiz.mark')}
          </button>

          <button
            onClick={onExit}
            className="focus-brand inline-flex items-center justify-center gap-2 rounded-xl bg-danger/80 px-4 py-3 text-sm font-semibold text-white min-h-[48px] hover:bg-danger transition"
          >
            <LogOut className="w-4 h-4" />
            {t('quiz.submit')}
          </button>

          {isLast ? (
            <button
              onClick={onFinish}
              className="focus-brand inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-black min-h-[48px] hover:shadow-glow-lg transition"
            >
              <FlagIcon className="w-4 h-4" />
              {t('quiz.finish')}
            </button>
          ) : (
            <button
              onClick={onNext}
              className="focus-brand inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-black min-h-[48px] hover:shadow-glow-lg transition"
            >
              {t('quiz.next')}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Question-number navigator */}
        <QuestionNavigator
          total={total}
          cursor={idx}
          answeredIds={Object.keys(current.answers)}
          markedIds={Object.keys(markedMap)}
          order={current.order}
          onGoTo={goTo}
        />
      </div>
    </main>
  );
}

function QuestionNavigator({
  total,
  cursor,
  answeredIds,
  markedIds,
  order,
  onGoTo
}: {
  total: number;
  cursor: number;
  answeredIds: string[];
  markedIds: string[];
  order: string[];
  onGoTo: (i: number) => void;
}) {
  const t = useTranslations();
  const answeredSet = new Set(answeredIds);
  const markedSet = new Set(markedIds);
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{t('quiz.navigator')}</p>
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: total }, (_, i) => i).map((i) => {
          const id = order[i];
          const isCurrent = i === cursor;
          const isAnswered = answeredSet.has(id);
          const isMarked = markedSet.has(id);
          return (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              aria-current={isCurrent ? 'true' : undefined}
              className={[
                'relative min-w-[34px] h-9 px-2 rounded-md text-xs font-semibold transition',
                isCurrent
                  ? 'bg-brand text-black ring-2 ring-brand/60'
                  : isAnswered
                  ? 'bg-brand/15 text-brand border border-brand/40 hover:bg-brand/25'
                  : 'bg-white/[0.04] text-white/70 border border-white/10 hover:border-white/30'
              ].join(' ')}
            >
              {i + 1}
              {isMarked && (
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-amber-400 ring-2 ring-ink-0"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
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

function EmptyState({
  filter,
  licenseClass
}: {
  filter: FilterId | null;
  licenseClass: LicenseClass;
}) {
  const t = useTranslations();
  const filterLabel = filter ? t(`home.filter.${filter}`) : '';
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center gap-5">
      <div className="text-5xl mb-2" aria-hidden>📭</div>
      <h2 className="display text-2xl sm:text-3xl uppercase">
        {filterLabel ? t('quiz.empty.title', { filter: filterLabel }) : t('quiz.empty.titleGeneric')}
      </h2>
      <p className="text-white/60 max-w-md">{t('quiz.empty.body')}</p>
      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <a
          href={`/${typeof window !== 'undefined' ? window.location.pathname.split('/')[1] || 'en' : 'en'}/quiz/${licenseClass}?filter=random`}
          className="focus-brand inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-black hover:shadow-glow-lg transition"
        >
          {t('quiz.empty.startRandom')}
        </a>
        <a
          href={`/${typeof window !== 'undefined' ? window.location.pathname.split('/')[1] || 'en' : 'en'}`}
          className="focus-brand inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white transition"
        >
          {t('quiz.empty.backHome')}
        </a>
      </div>
    </main>
  );
}
