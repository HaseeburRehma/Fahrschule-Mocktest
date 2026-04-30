import type { Locale } from '@/i18n/routing';

/* Minimal flag SVGs — clean enough at small sizes, no external assets. */

function FlagDE() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="Deutsch">
      <rect width="60" height="12" y="0" fill="#000" />
      <rect width="60" height="12" y="12" fill="#DD0000" />
      <rect width="60" height="12" y="24" fill="#FFCE00" />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="English">
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0 L60 36 M60 0 L0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L60 36 M60 0 L0 36" stroke="#C8102E" strokeWidth="3" />
      <path d="M30 0 V36 M0 18 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0 V36 M0 18 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FlagAR() {
  // Generic Arabic-region flag: UAE-style stripes — neutral choice for "Arabic" language
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="العربية">
      <rect width="60" height="36" fill="#fff" />
      <rect width="60" height="12" y="0" fill="#00732F" />
      <rect width="60" height="12" y="12" fill="#fff" />
      <rect width="60" height="12" y="24" fill="#000" />
      <rect width="16" height="36" fill="#C8102E" />
    </svg>
  );
}

function FlagTR() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="Türkçe">
      <rect width="60" height="36" fill="#E30A17" />
      <circle cx="22" cy="18" r="9" fill="#fff" />
      <circle cx="25" cy="18" r="7.2" fill="#E30A17" />
      <polygon
        points="32,18 37.5,16.2 34.1,21 34.1,15 37.5,19.8"
        fill="#fff"
      />
    </svg>
  );
}

function FlagRU() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="Русский">
      <rect width="60" height="12" y="0" fill="#fff" />
      <rect width="60" height="12" y="12" fill="#0039A6" />
      <rect width="60" height="12" y="24" fill="#D52B1E" />
    </svg>
  );
}

function FlagPL() {
  return (
    <svg viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" aria-label="Polski">
      <rect width="60" height="18" y="0" fill="#fff" />
      <rect width="60" height="18" y="18" fill="#DC143C" />
    </svg>
  );
}

const map: Record<Locale, () => JSX.Element> = {
  de: FlagDE,
  en: FlagEN,
  ar: FlagAR,
  tr: FlagTR,
  ru: FlagRU,
  pl: FlagPL
};

export function Flag({ locale, className }: { locale: Locale; className?: string }) {
  const F = map[locale];
  return (
    <div className={'overflow-hidden rounded-md ring-1 ring-white/10 ' + (className ?? '')}>
      <F />
    </div>
  );
}
