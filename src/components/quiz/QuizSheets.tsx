'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { MascotAvatar } from '../ui/Mascot';

/**
 * Figma "Quiz Feedback Richtig / Falsch" bottom sheet. Focus moves to the
 * continue button so keyboard users can carry on with Enter.
 */
export function FeedbackSheet({
  correct,
  correctAnswer,
  explanation,
  onContinue,
  continueLabel
}: {
  correct: boolean;
  correctAnswer: string;
  explanation: string;
  onContinue: () => void;
  continueLabel: string;
}) {
  const t = useTranslations();
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => buttonRef.current?.focus(), []);

  return (
    <div
      role="status"
      aria-live="assertive"
      className={[
        'fixed inset-x-0 bottom-0 z-50 animate-sheet-up rounded-t-sheet border-x border-t px-5 pb-[calc(28px+env(safe-area-inset-bottom))] pt-[18px]',
        correct ? 'border-brand-700 bg-[#0E1A0F]' : 'border-danger-border bg-danger-sheet'
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-3.5">
        <div className="flex items-start gap-3">
          <MascotAvatar pose={correct ? 'thumbs' : 'think'} />
          <div className="min-w-0 flex-1">
            <p className={`text-heading-l ${correct ? 'text-brand' : 'text-danger'}`}>
              {correct ? t('quiz.feedback.correct') : t('quiz.feedback.wrong')}
            </p>
            {!correct && (
              <p className="mt-0.5 text-body-s text-white">{t('quiz.feedback.correctIs', { answer: correctAnswer })}</p>
            )}
            <p className="mt-0.5 line-clamp-4 text-body-s text-muted">{explanation}</p>
          </div>
        </div>
        <button
          ref={buttonRef}
          type="button"
          onClick={onContinue}
          className={`focus-brand ${correct ? 'btn-primary' : 'btn-danger'} w-full`}
        >
          {continueLabel}
        </button>
      </div>
    </div>
  );
}

/** Small confirm bottom sheet (Figma "07/Abmelden" pattern). */
export function ConfirmSheet({
  title,
  body,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel
}: {
  title: string;
  body: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    cancelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
      if (e.key === 'Tab') {
        const items = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button') ?? []);
        if (!items.length) return;
        e.preventDefault();
        const idx = items.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey ? (idx <= 0 ? items.length - 1 : idx - 1) : (idx + 1) % items.length;
        items[next].focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [onCancel]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/65" aria-hidden onClick={onCancel} />
      <div
        ref={panelRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-body"
        className="fixed inset-x-0 bottom-0 z-50 animate-sheet-up rounded-t-sheet border-x border-t border-ink-300 bg-ink-100 px-5 pb-[calc(28px+env(safe-area-inset-bottom))] pt-5 sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[420px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:animate-fade-in-up sm:rounded-sheet sm:border sm:pb-6"
      >
        <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-ink-300 sm:hidden" aria-hidden />
        <MascotAvatar pose="think" size={56} />
        <p id="confirm-title" className="mt-3 text-heading-l text-white">{title}</p>
        <p id="confirm-body" className="mt-1 text-body-s text-muted">{body}</p>
        <div className="mt-5 flex flex-col gap-2.5">
          <button ref={cancelRef} type="button" onClick={onCancel} className="btn-primary focus-brand w-full">
            {cancelLabel}
          </button>
          <button type="button" onClick={onConfirm} className="btn-ghost focus-brand w-full text-danger">
            {confirmLabel}
          </button>
        </div>
      </div>
    </>
  );
}
