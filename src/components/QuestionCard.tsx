'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Check, AlertCircle, Play, RotateCcw } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import type { Question } from '@/data/types';
import { pickText } from '@/data/types';

interface Props {
  question: Question;
  selected: string[];
  onToggle: (id: string) => void;
  /**
   * For video questions, controls whether the card is in the
   * "preview only" phase (show video + intro buttons, no question text yet)
   * or the "question" phase (video + question + answer options).
   * For non-video questions the value is ignored.
   */
  videoPhase?: 'preview' | 'question';
  /** Called when the user clicks the "Go to question" button in preview phase. */
  onAdvanceFromPreview?: () => void;
}

export function QuestionCard({
  question,
  selected,
  onToggle,
  videoPhase = 'question',
  onAdvanceFromPreview
}: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const multi = question.correctIds.length > 1;

  const isVideo = Boolean(question.videoPath);
  const isSceneImage =
    !isVideo &&
    Boolean(question.imagePath) &&
    /\/(screenshots|new-image)\//i.test(question.imagePath ?? '');
  const isSignImage = !isVideo && !isSceneImage && Boolean(question.imagePath);
  const inPreview = isVideo && videoPhase === 'preview';

  return (
    <article className="rounded-2xl sm:rounded-3xl border border-white/10 bg-ink-100 p-4 sm:p-6 md:p-10 max-w-3xl mx-auto w-full">
      {/* Meta row */}
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/50 mb-4">
        <span className="text-brand">{t(`categories.${question.category}`)}</span>
        <span>{t('quiz.points', { count: question.points })}</span>
      </div>

      {/* Pre-question intro for video questions */}
      {inPreview && (
        <p className="text-sm sm:text-base text-white/80 mb-4 font-medium">
          {t('quiz.videoIntro')}
        </p>
      )}

      {/* Sign image — small square, white background */}
      {isSignImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="my-2 mb-6"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-4 rounded-[28px] bg-gradient-to-br from-slate-800/35 via-slate-900/15 to-slate-700/35 blur-xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-3 -bottom-3 h-6 rounded-full bg-brand/25 blur-2xl"
            />
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl">
              <Image
                src={question.imagePath!}
                alt="Sign"
                fill
                sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, 220px"
                className="object-contain p-2"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Scene image */}
      {isSceneImage && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <SceneFrame>
            <Image
              src={question.imagePath!}
              alt="Driving scene"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </SceneFrame>
        </motion.div>
      )}

      {/* Video — replay counter, no scrubbing */}
      {isVideo && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <VideoQuestion
            key={question.id}
            src={question.videoPath!}
            maxReplays={question.videoMaxReplays ?? 5}
            showAdvanceButton={inPreview}
            onAdvance={onAdvanceFromPreview}
          />
        </motion.div>
      )}

      {/* Question text + options — hidden while in preview phase */}
      {!inPreview && (
        <>
          <h2 className="display text-lg sm:text-2xl md:text-3xl leading-snug mb-3 break-words">
            {pickText(question.question, locale)}
          </h2>

          {multi && (
            <p className="text-sm text-white/60 mb-6 inline-flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-brand" />
              {t('quiz.multiHint')}
            </p>
          )}

          <ul className="space-y-3 mt-6">
            {question.options.map((opt) => {
              const isSelected = selected.includes(opt.id);
              return (
                <li key={opt.id}>
                  <button
                    onClick={() => onToggle(opt.id)}
                    aria-pressed={isSelected}
                    className={[
                      'focus-brand w-full text-left rounded-xl sm:rounded-2xl border px-4 sm:px-5 py-3.5 sm:py-4 min-h-[52px] transition-all',
                      'flex items-start gap-3 sm:gap-4 hover:bg-white/[0.03]',
                      isSelected
                        ? 'border-brand bg-brand/10 shadow-glow-soft'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center transition-colors',
                        multi ? 'rounded-md' : 'rounded-full',
                        isSelected
                          ? 'border border-brand bg-brand text-black'
                          : 'border border-white/30 bg-transparent'
                      ].join(' ')}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </span>
                    <span className="flex-1 text-sm sm:text-base leading-relaxed">{pickText(opt.text, locale)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </article>
  );
}

function SceneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[700px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[28px] bg-brand/15 blur-2xl"
      />
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-ink-200 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

function VideoQuestion({
  src,
  maxReplays,
  showAdvanceButton,
  onAdvance
}: {
  src: string;
  maxReplays: number;
  showAdvanceButton: boolean;
  onAdvance?: () => void;
}) {
  const t = useTranslations();
  const ref = useRef<HTMLVideoElement>(null);
  const [remaining, setRemaining] = useState(maxReplays);
  const [playing, setPlaying] = useState(false);
  const [hasWatchedOnce, setHasWatchedOnce] = useState(false);

  useEffect(() => {
    setRemaining(maxReplays);
    setHasWatchedOnce(false);
    setPlaying(false);
  }, [src, maxReplays]);

  const onPlay = () => {
    const v = ref.current;
    if (!v) return;
    if (remaining <= 0) return;
    v.currentTime = 0;
    v.play().catch(() => undefined);
    setPlaying(true);
  };

  const onEnded = () => {
    setPlaying(false);
    setRemaining((r) => Math.max(0, r - 1));
    setHasWatchedOnce(true);
  };

  return (
    <div className="relative mx-auto w-full max-w-[700px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[28px] bg-brand/15 blur-2xl"
      />
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
        <video
          ref={ref}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          preload="metadata"
          onEnded={onEnded}
          controls={false}
        />
        {!playing && (
          <button
            type="button"
            onClick={onPlay}
            disabled={remaining <= 0}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] disabled:cursor-not-allowed group"
          >
            <span
              className={[
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition',
                remaining > 0
                  ? 'bg-brand text-black shadow-glow-soft group-hover:shadow-glow'
                  : 'bg-white/10 text-white/60'
              ].join(' ')}
            >
              {hasWatchedOnce ? (
                <>
                  <RotateCcw className="w-4 h-4" />
                  {t('quiz.replay')}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  {t('quiz.startVideo')}
                </>
              )}
            </span>
          </button>
        )}
      </div>
      <p className="mt-2 text-center text-xs text-white/55">
        {t('quiz.videoRemaining', { count: remaining })}
      </p>
      {showAdvanceButton && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onAdvance}
            className="focus-brand inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-black hover:shadow-glow-lg transition"
          >
            {t('quiz.goToQuestion')}
          </button>
        </div>
      )}
    </div>
  );
}
