// Shared types for the question bank.

export type Category =
  | 'signs'
  | 'rightOfWay'
  | 'speed'
  | 'behavior'
  | 'environment'
  | 'tech'
  | 'firstAid'
  | 'alcohol';

export type LicenseClass = 'A' | 'B' | 'AB' | 'Mofa';

export type QuestionLocale = 'de' | 'en' | 'ar' | 'tr' | 'ru' | 'pl';

/**
 * Localized strings. DE + EN are required (EN is the runtime fallback);
 * AR / TR / RU / PL are optional. The QuestionCard / ResultsClient will
 * render the active locale's text and gracefully fall back to EN if
 * a translation hasn't been provided yet.
 */
export type LocalizedText = {
  de: string;
  en: string;
  ar?: string;
  tr?: string;
  ru?: string;
  pl?: string;
};

export interface QuestionOption {
  id: string;
  text: LocalizedText;
}

export type SignId =
  | 'stop'
  | 'yield'
  | 'priorityRoad'
  | 'noEntry'
  | 'speed30'
  | 'speed50'
  | 'roundabout'
  | 'children'
  | 'pedestrianCrossing'
  | 'mandatoryRight';

export interface Question {
  id: string;
  category: Category;
  /** Which licence classes this question is part of. AB receives A∪B. */
  classes: LicenseClass[];
  /** 1–5 — drives weighting in the score. */
  points: 1 | 2 | 3 | 4 | 5;
  /** Optional sign rendered above the question. */
  signId?: SignId;
  question: LocalizedText;
  options: QuestionOption[];
  /** IDs of the correct option(s). Multiple = multi-select. */
  correctIds: string[];
  explanation: LocalizedText;
}

/** Pick the right string for the active locale, falling back to EN. */
export function pickText(text: LocalizedText, locale: string): string {
  const key = locale as keyof LocalizedText;
  return (text[key] as string | undefined) ?? text.en;
}
