'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { CaretRight, MagnifyingGlass } from '@phosphor-icons/react';
import { Link } from '@/i18n/routing';
import { getQuestionsForClass } from '@/data/questions';
import { classOptions, pickText, type LicenseClass } from '@/data/types';
import { Mascot } from './ui/Mascot';

interface Props {
  licenseClass: LicenseClass;
}

const MAX_RESULTS = 30;

export function SearchClient({ licenseClass: initialClass }: Props) {
  const t = useTranslations();
  const locale = useLocale();
  const [licenseClass, setLicenseClass] = useState<LicenseClass>(initialClass);
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  // Build the lowercase search text once per class, not on every keystroke.
  const index = useMemo(
    () =>
      getQuestionsForClass(licenseClass).map((q) => ({
        q,
        haystack: [
          q.question.de,
          q.question.en,
          q.explanation.de,
          q.explanation.en,
          ...q.options.flatMap((o) => [o.text.de, o.text.en])
        ]
          .join(' ')
          .toLowerCase()
      })),
    [licenseClass]
  );

  const needle = deferredQuery.trim().toLowerCase();
  const matches = useMemo(() => {
    if (!needle) return [];
    const out = [];
    for (const entry of index) {
      if (entry.haystack.includes(needle)) {
        out.push(entry.q);
        if (out.length >= MAX_RESULTS) break;
      }
    }
    return out;
  }, [index, needle]);

  return (
    <main className="relative isolate flex-1 overflow-hidden">
      <div className="fx-hero-glow -z-10 opacity-70" aria-hidden />
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-6 sm:px-6">
        <h1 className="text-heading-l text-white">{t('search.title')}</h1>
        <p className="mt-0.5 text-body-s text-muted">{t('search.subtitle')}</p>

        {classOptions.length > 1 && (
          <div className="mt-4 inline-flex gap-1 rounded-full bg-ink-200 p-1">
            {classOptions.map(({ id, key }) => (
              <button
                key={id}
                onClick={() => setLicenseClass(id)}
                aria-pressed={licenseClass === id}
                className={[
                  'focus-brand rounded-full px-3.5 py-1.5 text-label-m transition',
                  licenseClass === id ? 'bg-brand text-ink-0' : 'text-muted hover:text-white'
                ].join(' ')}
              >
                {t(`classes.${key}.name`)}
              </button>
            ))}
          </div>
        )}

        <label className="relative mt-4 block">
          <span className="sr-only">{t('search.title')}</span>
          <MagnifyingGlass
            size={22}
            className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            maxLength={120}
            enterKeyHint="search"
            className="w-full rounded-option border-[1.5px] border-ink-300 bg-ink-100 py-4 pe-4 ps-12 text-body-l text-white placeholder:text-subtle focus:border-brand focus:outline-none focus:ring-0"
          />
        </label>

        {needle && (
          <p className="mt-3 text-caption uppercase text-muted" aria-live="polite">
            {t('search.resultsCount', { count: matches.length })}
          </p>
        )}

        {needle && matches.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-12 text-center">
            <Mascot pose="think" sizes="120px" className="h-auto w-28" />
            <p className="text-body-l text-muted">{t('search.noResults')}</p>
          </div>
        )}

        <ul className="mt-3 flex flex-col gap-2">
          {matches.map((q) => (
            <li key={q.id}>
              <Link
                href={`/quiz/${licenseClass}?topic=${encodeURIComponent(q.topicCode ?? '')}`}
                className="focus-brand group flex items-start gap-3 rounded-option border border-ink-300 bg-ink-100 p-4 transition hover:border-brand/60"
              >
                <span className="shrink-0 rounded-[8px] bg-brand-800 px-2 py-1 text-caption font-semibold text-brand">
                  {q.topicCode ?? '—'}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="line-clamp-2 block text-title-m text-white">{pickText(q.question, locale)}</span>
                  <span className="mt-1 block text-caption text-muted">
                    {t(`categories.${q.category}`)} · {t('quiz.points', { count: q.points })}
                  </span>
                </span>
                <CaretRight size={20} className="mt-0.5 text-muted transition group-hover:translate-x-0.5 rtl:rotate-180" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
