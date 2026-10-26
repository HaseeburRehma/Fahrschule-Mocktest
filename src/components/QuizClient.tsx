'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useShallow } from 'zustand/react/shallow';
import { BookmarkSimple, CaretLeft, Heart, SquaresFour, X } from '@phosphor-icons/react';
import { Link, useRouter } from '@/i18n/routing';
import { useQuiz } from '@/store/quiz';
import { QuestionCard } from './QuestionCard';
import { QuizIntro } from './quiz/QuizIntro';
import { ConfirmSheet, FeedbackSheet } from './quiz/QuizSheets';
import { Mascot } from './ui/Mascot';
import { getQuestionMap, getQuestionsForClass } from '@/data/questions';
import { grundstoffTopics, zusatzstoffTopicsB } from '@/data/topics';
import { buildExam, buildFilteredExam, EXAM_RULES, type FilterId } from '@/lib/exam';
import { pickText, type LicenseClass, type Question } from '@/data/types';

interface Props {
  licenseClass: LicenseClass;
}

const VALID_FILTERS: FilterId[] = [
  'signs', 'tough', 'wrong', 'marked', 'picture', 'video',
  'selection', 'numbers', 'new', 'random', 'search', 'topics'
];

/** Lives in practice mode (Figma hearts). Running out ends the round. */
export const PRACTICE_LIVES = 5;

function isExactlyCorrect(q: Question, selected: string[]): boolean {
  if (selected.length !== q.correctIds.length) return false;
  const picked = new Set(selected);
  return q.correctIds.every((id) => picked.has(id));
}

export function QuizClient({ licenseClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams?.get('filter');
  const topicParam = searchParams?.get('topic');
  const filter: FilterId | null =
    filterParam && (VALID_FILTERS as string[]).includes(filterParam) ? (filterParam as FilterId) : null;
  const topicCode = topicParam && /^[\w.]+$/.test(topicParam) ? topicParam : null;
  const isExam = !filter && !topicCode;

  // Narrow selector: only re-render when the snapshot or actions change.
  const { current, start, setAnswer, next, prev, goTo, toggleMark, finish, reset } = useQuiz(
    useShallow((s) => ({
      current: s.current,
      start: s.start,
      setAnswer: s.setAnswer,
      next: s.next,
      prev: s.prev,
      goTo: s.goTo,
      toggleMark: s.toggleMark,
      finish: s.finish,
      reset: s.reset
    }))
  );

  const pool = useMemo(() => getQuestionsForClass(licenseClass), [licenseClass]);
  const byId = useMemo(() => getQuestionMap(licenseClass), [licenseClass]);

  const [showIntro, setShowIntro] = useState(true);
  const [confirmExit, setConfirmExit] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  // Practice mode: questions the user has already "Prüfen"-ed.
  const [checked, setChecked] = useState<Record<string, true>>({});
  // Video questions open in preview mode until the user advances.
  const [previewAdvancedFor, setPreviewAdvancedFor] = useState<Record<string, true>>({});

  useEffect(() => {
    // Always start a fresh paper when entering the quiz route (or changing
    // class / filter / topic). "marked" and "wrong" persist across runs.
    const state = useQuiz.getState();
    const markedIds = Object.keys(state.current?.marked ?? {});
    const wrongIds = Object.keys(state.wrong ?? {});
    const paper =
      topicCode || filter
        ? buildFilteredExam(licenseClass, pool, filter, { markedIds, wrongIds, topicCode })
        : buildExam(licenseClass, pool);
    start(licenseClass, paper.questionIds, filter ?? (topicCode ? `topic:${topicCode}` : null));
    setShowIntro(true);
    setChecked({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [licenseClass, filter, topicCode]);

  if (!current || current.licenseClass !== licenseClass) return <Skeleton />;
  if (current.order.length === 0) return <EmptyState filter={filter} licenseClass={licenseClass} />;

  const total = current.order.length;
  const idx = current.cursor;
  const questionId = current.order[idx];
  const question = byId.get(questionId);
  if (!question) return <Skeleton />;

  const selected = current.answers[questionId]?.selectedIds ?? [];
  const isLast = idx === total - 1;
  const markedMap = current.marked ?? {};
  const isMarked = Boolean(markedMap[questionId]);
  const isVideo = Boolean(question.videoPath);
  const inPreview = isVideo && !previewAdvancedFor[questionId];
  const revealed = !isExam && Boolean(checked[questionId]);

  const livesLost = Object.keys(checked).filter((id) => {
    const q = byId.get(id);
    return q ? !isExactlyCorrect(q, current.answers[id]?.selectedIds ?? []) : false;
  }).length;
  const lives = Math.max(0, PRACTICE_LIVES - livesLost);
  const answeredCount = Object.values(current.answers).filter((a) => a.selectedIds.length > 0).length;
  const progressPct = Math.round(((isExam ? answeredCount : Object.keys(checked).length) / total) * 100);

  const exitQuiz = () => {
    reset();
    router.push('/');
  };

  const finishQuiz = () => {
    finish();
    router.push(`/results/${licenseClass}`);
  };

  if (showIntro) {
    const paperPoints = current.order.reduce((sum, id) => sum + (byId.get(id)?.points ?? 0), 0);
    const topic = topicCode
      ? [...grundstoffTopics, ...zusatzstoffTopicsB].find((tp) => tp.code === topicCode)
      : undefined;
    const heading = isExam
      ? t('quiz.intro.examHeading')
      : topic
        ? pickText(topic.name, locale)
        : t(`home.filter.${filter}`);
    const kicker = isExam
      ? t(`classes.${licenseClass}.name`)
      : topic
        ? t('quiz.intro.topicKicker', { code: topic.code })
        : t('quiz.intro.practiceKicker');
    return (
      <QuizIntro
        title={isExam ? t('quiz.intro.examTitle') : t('quiz.intro.practiceTitle')}
        speech={t(isExam ? 'quiz.intro.speechExam' : 'quiz.intro.speechPractice', { count: total })}
        kicker={kicker}
        heading={heading}
        stats={
          isExam
            ? [
                { value: String(total), label: t('quiz.intro.stats.questions'), tone: 'green' },
                { value: String(EXAM_RULES.maxErrorPoints), label: t('quiz.intro.stats.maxErrors'), tone: 'pink' },
                { value: String(paperPoints), label: t('quiz.intro.stats.points'), tone: 'gold' }
              ]
            : [
                { value: String(total), label: t('quiz.intro.stats.questions'), tone: 'green' },
                { value: String(PRACTICE_LIVES), label: t('quiz.intro.stats.lives'), tone: 'pink' },
                { value: `+${paperPoints}`, label: t('quiz.intro.stats.points'), tone: 'gold' }
              ]
        }
        startLabel={isExam ? t('quiz.intro.startExam') : t('quiz.intro.start')}
        onStart={() => setShowIntro(false)}
        onClose={exitQuiz}
      />
    );
  }

  const toggle = (optId: string) => {
    if (revealed) return;
    const isMulti = question.correctIds.length > 1;
    const nextSel = isMulti
      ? selected.includes(optId)
        ? selected.filter((id) => id !== optId)
        : [...selected, optId]
      : selected.includes(optId)
        ? []
        : [optId];
    setAnswer(questionId, nextSel);
  };

  const advance = () => {
    if (isLast) finishQuiz();
    else next();
  };

  const onPrimary = () => {
    if (inPreview) {
      setPreviewAdvancedFor((p) => ({ ...p, [questionId]: true }));
      return;
    }
    if (isExam) {
      advance();
      return;
    }
    if (!revealed) setChecked((c) => ({ ...c, [questionId]: true }));
  };

  const onFeedbackContinue = () => {
    if (lives <= 0) finishQuiz();
    else advance();
  };

  const primaryLabel = inPreview
    ? t('quiz.goToQuestion')
    : isExam
      ? isLast
        ? t('quiz.finish')
        : t('common.continue')
      : t('quiz.check');
  const primaryDisabled = !inPreview && !isExam && selected.length === 0;
  const correctAnswer = question.options
    .filter((o) => question.correctIds.includes(o.id))
    .map((o) => pickText(o.text, locale))
    .join(' · ');

  return (
    <main className="relative flex min-h-[100dvh] flex-col bg-ink-0">
      {/* Top bar — Figma: close · progress · hearts */}
      <div className="sticky top-0 z-30 bg-ink-0/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <div className="mx-auto flex h-[60px] max-w-2xl items-center gap-3.5 px-5">
          <button onClick={() => setConfirmExit(true)} aria-label={t('quiz.exit')} className="icon-btn focus-brand">
            <X size={22} />
          </button>
          <div
            className="h-3.5 flex-1 overflow-hidden rounded-[7px] bg-ink-200"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progressPct}
            aria-label={t('quiz.label', { current: idx + 1, total })}
          >
            <motion.div
              className="h-full rounded-[7px] bg-brand shadow-glow"
              initial={false}
              animate={{ width: `${Math.max(4, progressPct)}%` }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
          </div>
          {isExam ? (
            <span className="text-heading-m tabular-nums text-white" aria-hidden>
              {idx + 1}/{total}
            </span>
          ) : (
            <span className="inline-flex items-center gap-[5px]" aria-label={t('quiz.livesLeft', { count: lives })}>
              <Heart size={24} weight="fill" className="text-danger" />
              <span className="text-heading-m tabular-nums text-white">{lives}</span>
            </span>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="mx-auto w-full max-w-2xl flex-1 px-5 pb-40 pt-4">
        <motion.div
          key={`${questionId}:${inPreview ? 'p' : 'q'}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <QuestionCard
            question={question}
            selected={selected}
            onToggle={toggle}
            revealed={revealed}
            videoPhase={inPreview ? 'preview' : 'question'}
            onAdvanceFromPreview={() => setPreviewAdvancedFor((p) => ({ ...p, [questionId]: true }))}
          />
        </motion.div>
      </div>

      {/* Bottom action bar */}
      {!revealed && (
        <div className="fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-ink-0 via-ink-0/95 to-transparent pb-[calc(16px+env(safe-area-inset-bottom))] pt-6">
          <div className="mx-auto flex max-w-2xl items-center gap-2.5 px-5">
            {isExam && (
              <>
                <button
                  onClick={prev}
                  disabled={idx === 0}
                  aria-label={t('quiz.previous')}
                  className="icon-btn focus-brand h-[52px] w-[52px] rounded-full disabled:opacity-30"
                >
                  <CaretLeft size={22} className="rtl:rotate-180" />
                </button>
                <button
                  onClick={() => toggleMark(questionId)}
                  aria-pressed={isMarked}
                  aria-label={isMarked ? t('quiz.marked') : t('quiz.mark')}
                  className={`icon-btn focus-brand h-[52px] w-[52px] rounded-full ${isMarked ? 'bg-gold text-ink-0 hover:bg-gold' : ''}`}
                >
                  <BookmarkSimple size={22} weight={isMarked ? 'fill' : 'regular'} />
                </button>
                <button
                  onClick={() => setShowOverview(true)}
                  aria-label={t('quiz.navigator')}
                  className="icon-btn focus-brand h-[52px] w-[52px] rounded-full"
                >
                  <SquaresFour size={22} />
                </button>
              </>
            )}
            <button onClick={onPrimary} disabled={primaryDisabled} className="btn-primary focus-brand flex-1">
              {primaryLabel}
            </button>
          </div>
        </div>
      )}

      {revealed && (
        <FeedbackSheet
          correct={isExactlyCorrect(question, selected)}
          correctAnswer={correctAnswer}
          explanation={pickText(question.explanation, locale)}
          continueLabel={lives <= 0 || isLast ? t('quiz.feedback.toResults') : t('common.continue')}
          onContinue={onFeedbackContinue}
        />
      )}

      {showOverview && (
        <QuestionOverview
          order={current.order}
          cursor={idx}
          answered={current.answers}
          marked={markedMap}
          onGoTo={(i) => {
            goTo(i);
            setShowOverview(false);
          }}
          onClose={() => setShowOverview(false)}
          onFinish={finishQuiz}
        />
      )}

      {confirmExit && (
        <ConfirmSheet
          title={t('quiz.exitTitle')}
          body={t('quiz.exitConfirm')}
          confirmLabel={t('quiz.exit')}
          cancelLabel={t('quiz.keepGoing')}
          onConfirm={exitQuiz}
          onCancel={() => setConfirmExit(false)}
        />
      )}
    </main>
  );
}

function QuestionOverview({
  order,
  cursor,
  answered,
  marked,
  onGoTo,
  onClose,
  onFinish
}: {
  order: string[];
  cursor: number;
  answered: Record<string, { selectedIds: string[] }>;
  marked: Record<string, true>;
  onGoTo: (i: number) => void;
  onClose: () => void;
  onFinish: () => void;
}) {
  const t = useTranslations();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/65" aria-hidden onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('quiz.navigator')}
        className="fixed inset-x-0 bottom-0 z-50 max-h-[80dvh] animate-sheet-up overflow-y-auto rounded-t-sheet border-x border-t border-ink-300 bg-ink-100 px-5 pb-[calc(24px+env(safe-area-inset-bottom))] pt-5"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <p className="flex-1 text-heading-m text-white">{t('quiz.navigator')}</p>
            <button onClick={onClose} aria-label={t('common.close')} className="icon-btn focus-brand" autoFocus>
              <X size={20} />
            </button>
          </div>
          <ol className="grid grid-cols-6 gap-2 sm:grid-cols-10">
            {order.map((id, i) => {
              const isCurrent = i === cursor;
              const isAnswered = (answered[id]?.selectedIds.length ?? 0) > 0;
              return (
                <li key={id}>
                  <button
                    onClick={() => onGoTo(i)}
                    aria-current={isCurrent ? 'step' : undefined}
                    className={[
                      'focus-brand relative h-11 w-full rounded-[12px] text-label-m transition',
                      isCurrent
                        ? 'bg-brand text-ink-0 shadow-glow'
                        : isAnswered
                          ? 'border border-brand/50 bg-brand-800 text-brand'
                          : 'border border-ink-300 bg-ink-200 text-muted hover:text-white'
                    ].join(' ')}
                  >
                    {i + 1}
                    {marked[id] && (
                      <span aria-hidden className="absolute -end-1 -top-1 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-ink-100" />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
          <button onClick={onFinish} className="btn-outline focus-brand mt-5 w-full">
            {t('quiz.finish')}
          </button>
        </div>
      </div>
    </>
  );
}

function Skeleton() {
  const t = useTranslations();
  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-2xl flex-col gap-4 px-5 py-6" aria-busy="true">
      <div className="skeleton h-10 w-full" />
      <div className="skeleton h-8 w-3/4" />
      <div className="skeleton h-40 w-full" />
      <div className="skeleton h-16 w-full" />
      <div className="skeleton h-16 w-full" />
      <p className="text-center text-body-s text-muted">{t('quiz.loading')}</p>
    </main>
  );
}

function EmptyState({ filter, licenseClass }: { filter: FilterId | null; licenseClass: LicenseClass }) {
  const t = useTranslations();
  const filterLabel = filter ? t(`home.filter.${filter}`) : '';
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <Mascot pose="think" sizes="160px" className="h-auto w-36" />
      <h1 className="text-heading-l text-white">
        {filterLabel ? t('quiz.empty.title', { filter: filterLabel }) : t('quiz.empty.titleGeneric')}
      </h1>
      <p className="text-body-l text-muted">{t('quiz.empty.body')}</p>
      <div className="mt-2 flex w-full flex-col gap-2.5">
        {/* Locale-aware links via the i18n router (no window.location parsing) */}
        <Link href={`/quiz/${licenseClass}?filter=random`} className="btn-primary focus-brand">
          {t('quiz.empty.startRandom')}
        </Link>
        <Link href="/" className="btn-ghost focus-brand">
          {t('quiz.empty.backHome')}
        </Link>
      </div>
    </main>
  );
}
