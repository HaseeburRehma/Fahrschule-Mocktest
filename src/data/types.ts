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

/**
 * Single source of truth for which licence classes are currently exposed
 * to users in the UI. Other classes still exist in the data layer (so the
 * question bank is unaffected) but they are hidden from the home page,
 * topics page, search page and the practice-by-topic class chooser.
 *
 * Add a class back to this list to re-enable it everywhere.
 */
export const enabledClasses: readonly LicenseClass[] = ['B'] as const;

export function isClassEnabled(id: LicenseClass): boolean {
  return enabledClasses.includes(id);
}

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

export type TopicType = 'grundstoff' | 'zusatzstoff';

export interface Question {
  id: string;
  category: Category;
  /** Which licence classes this question is part of. AB receives A∪B. */
  classes: LicenseClass[];
  /** 1–5 — drives weighting in the score. */
  points: 1 | 2 | 3 | 4 | 5;
  /**
   * Optional topic code from the official taxonomy in `src/data/topics.ts`
   * (e.g. "G.06", "2.1.06"). The exam engine uses this to draw a balanced
   * 30-question paper across Grundstoff / Zusatzstoff topics.
   */
  topicCode?: string;
  /** Grundstoff (basic material) or Zusatzstoff (class-specific). */
  topicType?: TopicType;
  /**
   * Optional image path (must reference a file inside /public/images/quiz).
   * No external URLs or procedural SVGs are rendered in the quiz.
   */
  imagePath?: string;
  /**
   * Optional video path (must reference a file inside
   * /public/images/quiz/trafic-video). Mirrors the official video-question
   * UX: the user can replay the clip a limited number of times before
   * answering. All media must be original or licensed for redistribution.
   */
  videoPath?: string;
  /** Max replays for video questions. Defaults to 5 (matches the catalogue). */
  videoMaxReplays?: number;
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
