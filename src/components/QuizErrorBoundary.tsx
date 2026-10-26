'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mascot } from './ui/Mascot';
import { useQuiz } from '@/store/quiz';

interface State {
  hasError: boolean;
  message: string;
}

interface Props {
  children: React.ReactNode;
}

/**
 * Catches client-side render errors in the quiz route so users get a
 * helpful recovery UI instead of a blank "application error" screen.
 *
 * The reset button wipes the persisted Zustand store (which can become
 * stale after a deployment if the question pool or store shape changed)
 * and sends the user back to the home page to start over.
 */
export class QuizErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message ?? String(error) };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Surface the underlying error in the browser console so the user
    // can copy the real stack trace when reporting a bug.
    // eslint-disable-next-line no-console
    console.error('[Quiz] Render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <Fallback message={this.state.message} />;
    }
    return this.props.children;
  }
}

function Fallback({ message }: { message: string }) {
  const t = useTranslations();

  const onReset = () => {
    try {
      // 1) Wipe the persisted snapshot from the Zustand store.
      useQuiz.getState().reset();
      // 2) Drop any stray persisted blob in case the store schema changed.
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('fahrschule-quiz');
        window.location.assign('/');
      }
    } catch {
      // ignore — the redirect below is the fallback
    }
  };

  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
      <Mascot pose="think" sizes="160px" className="h-auto w-36" />
      <h1 className="text-heading-l text-white">{t('quiz.errorBoundary.title')}</h1>
      <p className="text-body-l text-muted">{t('quiz.errorBoundary.body')}</p>
      {message && (
        <details className="w-full text-start">
          <summary className="cursor-pointer text-caption uppercase text-muted hover:text-white">
            {t('quiz.errorBoundary.details')}
          </summary>
          <pre className="mt-2 overflow-auto whitespace-pre-wrap rounded-[12px] border border-ink-300 bg-ink-100 p-3 text-[11px] text-muted">
            {message}
          </pre>
        </details>
      )}
      <div className="mt-2 flex w-full flex-col gap-2.5">
        <button onClick={onReset} className="btn-primary focus-brand">
          {t('quiz.errorBoundary.reset')}
        </button>
        <Link href="/" className="btn-ghost focus-brand">
          {t('quiz.errorBoundary.home')}
        </Link>
      </div>
    </main>
  );
}
