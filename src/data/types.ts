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

export type QuestionLocale = 'de' | 'en';

/**
 * Localized strings. We always require DE + EN; other locales fall back
 * to EN at runtime (the spec asked for UI in 6 languages, content in DE/EN).
 */
export type LocalizedText = {
  de: string;
  en: string;
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
