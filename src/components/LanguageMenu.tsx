'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { CaretDown, CheckCircle, Globe, X } from '@phosphor-icons/react';
import { usePathname, useRouter, locales, type Locale } from '@/i18n/routing';
import { Flag } from './icons/Flags';

const labels: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
  ru: 'Русский',
  pl: 'Polski'
};

/**
 * Language picker styled after the Figma "07/Sprache" sheet: a bottom sheet
 * on phones, an anchored panel on larger screens. Focus is moved into the
 * dialog on open, trapped while open, and returned to the trigger on close.
 */
export function LanguageMenu() {
  const t = useTranslations();
  const current = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const items = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? []);
    // Focus the active language first
    (panel?.querySelector<HTMLElement>('[aria-checked="true"]') ?? items()[0])?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      const list = items();
      if (!list.length) return;
      const idx = list.indexOf(document.activeElement as HTMLElement);
      if (e.key === 'Tab') {
        e.preventDefault();
        const next = e.shiftKey ? (idx <= 0 ? list.length - 1 : idx - 1) : (idx + 1) % list.length;
        list[next].focus();
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const dir = e.key === 'ArrowDown' ? 1 : -1;
        list[(idx + dir + list.length) % list.length].focus();
      }
    };
    const onPointer = (e: MouseEvent) => {
      if (
        panel &&
        !panel.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open, close]);

  const switchTo = (next: Locale) => {
    setOpen(false);
    if (next === current) return;
    try {
      localStorage.setItem('preferred-locale', next);
    } catch {}
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={t('nav.language')}
        className="focus-brand inline-flex h-11 items-center gap-2 rounded-[12px] bg-ink-200 px-3 text-label-m text-white transition hover:bg-ink-300"
      >
        <Flag locale={current} className="h-3.5 w-6 overflow-hidden rounded-[3px]" />
        <span className="hidden sm:inline">{labels[current]}</span>
        <CaretDown size={16} className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 sm:hidden" aria-hidden onClick={() => setOpen(false)} />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={t('nav.language')}
            className={[
              'z-50 border border-ink-300 bg-ink-100 p-5',
              // phone: bottom sheet
              'fixed inset-x-0 bottom-0 rounded-t-sheet pb-8 animate-sheet-up',
              // sm+: anchored panel
              'sm:absolute sm:inset-x-auto sm:bottom-auto sm:end-0 sm:top-full sm:mt-2 sm:w-72 sm:rounded-card sm:pb-5 sm:animate-fade-in-up'
            ].join(' ')}
          >
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-ink-300 sm:hidden" aria-hidden />
            <div className="mb-4 flex items-center gap-3">
              <span className="icon-tile h-10 w-10">
                <Globe size={22} />
              </span>
              <p className="flex-1 text-heading-m text-white">{t('nav.language')}</p>
              <button onClick={close} aria-label={t('common.close')} className="icon-btn focus-brand sm:hidden">
                <X size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {locales.map((loc) => {
                const active = loc === current;
                return (
                  <li key={loc}>
                    <button
                      role="menuitemradio"
                      aria-checked={active}
                      lang={loc}
                      onClick={() => switchTo(loc)}
                      className={`option focus-brand py-3.5 ${active ? 'option-selected' : ''}`}
                    >
                      <Flag locale={loc} className="h-4 w-7 shrink-0 overflow-hidden rounded-[3px]" />
                      <span className="flex-1">{labels[loc]}</span>
                      {active && <CheckCircle size={22} weight="fill" className="text-brand" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
