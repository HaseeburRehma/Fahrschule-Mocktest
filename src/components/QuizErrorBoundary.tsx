'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
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
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center gap-5">
      <div className="text-5xl mb-2" aria-hidden>⚠️</div>
      <h2 className="display text-2xl sm:text-3xl uppercase">
        {t('quiz.errorBoundary.title')}
      </h2>
      <p className="text-white/60 max-w-md">{t('quiz.errorBoundary.body')}</p>
      {message && (
        <details className="max-w-md w-full text-left">
          <summary className="text-xs uppercase tracking-widest text-white/45 cursor-pointer hover:text-white/70">
            {t('quiz.errorBoundary.details')}
          </summary>
          <pre className="mt-2 rounded-lg bg-white/[0.04] border border-white/10 p-3 text-[11px] text-white/75 overflow-auto whitespace-pre-wrap">
            {message}
          </pre>
        </details>
      )}
      <div className="flex flex-wrap gap-3 justify-center pt-2">
        <button
          onClick={onReset}
          className="focus-brand inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-black hover:shadow-glow-lg transition"
        >
          {t('quiz.errorBoundary.reset')}
        </button>
        <Link
          href="/"
          className="focus-brand inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white transition"
        >
          {t('quiz.errorBoundary.home')}
        </Link>
      </div>
    </main>
  );
}
