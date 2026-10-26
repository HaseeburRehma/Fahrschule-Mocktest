'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowCounterClockwise, CheckCircle, Info, Play, XCircle } from '@phosphor-icons/react';
import type { Question } from '@/data/types';
import { pickText } from '@/data/types';

interface Props {
  question: Question;
  selected: string[];
  onToggle: (id: string) => void;
  /**
   * Practice mode: after "Prüfen" the card shows which options were right
   * (green + check) and which picks were wrong (red + x), and locks input.
   */
  revealed?: boolean;
  /**
   * For video questions: "preview" shows only the clip (as in the official
   * exam), "question" adds the question text and options.
   */
  videoPhase?: 'preview' | 'question';
  onAdvanceFromPreview?: () => void;
}

const SIGN_FILE = /\/sign-([a-z0-9-]+)\.(jpe?g|png|webp)$/i;

export function QuestionCard({
  question,
  selected,
  onToggle,
  revealed = false,
  videoPhase = 'question',
  onAdvanceFromPreview
}: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const multi = question.correctIds.length > 1;
  const questionText = pickText(question.question, locale);

  const isVideo = Boolean(question.videoPath);
  const isSceneImage =
    !isVideo && Boolean(question.imagePath) && /\/(screenshots|new-image)\//i.test(question.imagePath ?? '');
  const isSignImage = !isVideo && !isSceneImage && Boolean(question.imagePath);
  const inPreview = isVideo && videoPhase === 'preview';

  // Meaningful alt text: the sign's name when we know it, otherwise a
  // description tied to the question.
  const signKey = question.imagePath?.match(SIGN_FILE)?.[1];
  const signName = signKey && t.has(`quiz.signs.${signKey}`) ? t(`quiz.signs.${signKey}`) : null;
  const imageAlt = isSignImage
    ? signName
      ? t('quiz.signAltNamed', { name: signName })
      : t('quiz.signAlt', { question: questionText })
    : t('quiz.sceneAlt', { question: questionText });

  return (
    <article className="flex flex-col gap-5">
      <p className="flex items-center gap-2 text-caption uppercase text-muted">
        <span className="text-brand">{t(`categories.${question.category}`)}</span>
        <span aria-hidden>·</span>
        <span>{t('quiz.points', { count: question.points })}</span>
      </p>

      {!inPreview && <h1 className="text-heading-l text-white">{questionText}</h1>}

      {inPreview && <p className="text-body-l text-muted">{t('quiz.videoIntro')}</p>}

      {isSignImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative h-[132px] w-[132px] overflow-hidden rounded-card bg-white p-2 shadow-[0_0_40px_rgba(0,255,36,0.12)] sm:h-[160px] sm:w-[160px]">
            <Image
              src={question.imagePath!}
              alt={imageAlt}
              fill
              sizes="160px"
              className="object-contain p-2"
            />
          </div>
        </motion.div>
      )}

      {isSceneImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-option border border-ink-300 bg-ink-200">
          <Image
            src={question.imagePath!}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover"
          />
        </div>
      )}

      {isVideo && (
        <VideoQuestion
          key={question.id}
          src={question.videoPath!}
          label={t('quiz.sceneAlt', { question: questionText })}
          maxReplays={question.videoMaxReplays ?? 5}
          showAdvanceButton={inPreview}
          onAdvance={onAdvanceFromPreview}
        />
      )}

      {!inPreview && (
        <>
          {multi && (
            <p className="-mt-1 inline-flex items-center gap-2 text-body-s text-muted">
              <Info size={18} className="shrink-0 text-brand" />
              {t('quiz.multiHint')}
            </p>
          )}

          <ul className="flex flex-col gap-3" role={multi ? 'group' : 'radiogroup'} aria-label={questionText}>
            {question.options.map((opt) => {
              const isSelected = selected.includes(opt.id);
              const isCorrect = question.correctIds.includes(opt.id);
              let state = isSelected ? 'option-selected' : '';
              let Mark: React.ReactNode = null;
              if (revealed) {
                if (isCorrect) {
                  state = 'option-correct';
                  Mark = <CheckCircle size={24} weight="fill" className="shrink-0" aria-label={t('quiz.feedback.correct')} />;
                } else if (isSelected) {
                  state = 'option-wrong';
                  Mark = <XCircle size={24} className="shrink-0" aria-label={t('quiz.feedback.wrong')} />;
                } else {
                  state = 'opacity-50';
                }
              }
              return (
                <li key={opt.id}>
                  <button
                    type="button"
                    onClick={() => onToggle(opt.id)}
                    disabled={revealed}
                    role={multi ? 'checkbox' : 'radio'}
                    aria-checked={isSelected}
                    className={`option focus-brand disabled:cursor-default ${state}`}
                  >
                    {multi && !revealed && (
                      <span
                        aria-hidden
                        className={[
                          'flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border-[1.5px]',
                          isSelected ? 'border-brand bg-brand' : 'border-ink-400'
                        ].join(' ')}
                      >
                        {isSelected && <span className="h-2 w-2 rounded-[2px] bg-ink-0" />}
                      </span>
                    )}
                    <span className="flex-1">{pickText(opt.text, locale)}</span>
                    {Mark}
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

function VideoQuestion({
  src,
  label,
  maxReplays,
  showAdvanceButton,
  onAdvance
}: {
  src: string;
  label: string;
  maxReplays: number;
  showAdvanceButton: boolean;
  onAdvance?: () => void;
}) {
  const t = useTranslations();
  const locale = useLocale();
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
    if (!v || remaining <= 0) return;
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
    <div className="flex flex-col gap-3">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-option border border-ink-300 bg-black">
        <video
          ref={ref}
          src={src}
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          preload="metadata"
          onEnded={onEnded}
          controls={false}
        >
          {/* The clips have no dialogue; the track tells caption users so. */}
          <track kind="captions" srcLang={locale} label={t('quiz.captionsLabel')} src={`/captions/no-dialogue.${locale}.vtt`} default />
        </video>
        {!playing && (
          <button
            type="button"
            onClick={onPlay}
            disabled={remaining <= 0}
            className="focus-brand group absolute inset-0 flex items-center justify-center bg-black/45 disabled:cursor-not-allowed"
          >
            <span
              className={[
                'inline-flex items-center gap-2 rounded-full px-5 py-3 text-title-m transition',
                remaining > 0 ? 'bg-brand text-ink-0 shadow-glow group-hover:shadow-glow-lg' : 'bg-ink-200 text-muted'
              ].join(' ')}
            >
              {hasWatchedOnce ? <ArrowCounterClockwise size={18} weight="bold" /> : <Play size={18} weight="fill" />}
              {hasWatchedOnce ? t('quiz.replay') : t('quiz.startVideo')}
            </span>
          </button>
        )}
      </div>
      <p className="text-center text-caption text-muted">{t('quiz.videoRemaining', { count: remaining })}</p>
      {showAdvanceButton && (
        <button type="button" onClick={onAdvance} className="btn-outline focus-brand self-center">
          {t('quiz.goToQuestion')}
        </button>
      )}
    </div>
  );
}
