'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { LicenseClass } from '@/data/types';

export interface QuizAnswer {
  questionId: string;
  selectedIds: string[];
}

export interface QuizSnapshot {
  licenseClass: LicenseClass;
  /** Active home-page filter, or null for the standard 30-question paper. */
  filter: string | null;
  startedAt: number;
  finishedAt: number | null;
  /** Map questionId -> answer */
  answers: Record<string, QuizAnswer>;
  /** ordered question ids for this run */
  order: string[];
  /** index of the active question in `order` */
  cursor: number;
  /** Set of question ids the user flagged for review. */
  marked: Record<string, true>;
}

interface QuizState {
  current: QuizSnapshot | null;
  /**
   * Persisted across sessions: question IDs the user has previously answered
   * wrong (or skipped). Populated when a quiz is scored on the results page
   * and read by the "Wrong questions" home filter.
   */
  wrong: Record<string, true>;

  start: (licenseClass: LicenseClass, order: string[], filter?: string | null) => void;
  setAnswer: (questionId: string, selectedIds: string[]) => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  toggleMark: (questionId: string) => void;
  /** Add the supplied question IDs to the persistent "wrong" set. */
  recordWrong: (ids: string[]) => void;
  /** Remove a single question from the wrong set (used after they answer it correctly later). */
  clearWrong: (id: string) => void;

  finish: () => void;
  reset: () => void;
}

export const useQuiz = create<QuizState>()(
  persist(
    (set, get) => ({
      current: null,
      wrong: {},

      start: (licenseClass, order, filter = null) => {
        const prev = get().current;
        set({
          current: {
            licenseClass,
            filter,
            startedAt: Date.now(),
            finishedAt: null,
            answers: {},
            order,
            cursor: 0,
            // Preserve "marked" across re-starts so the user's flagged
            // questions stay flagged when they switch filters / classes.
            marked: prev?.marked ?? {}
          }
        });
      },

      setAnswer: (questionId, selectedIds) => {
        const c = get().current;
        if (!c) return;
        set({
          current: {
            ...c,
            answers: {
              ...c.answers,
              [questionId]: { questionId, selectedIds }
            }
          }
        });
      },

      next: () => {
        const c = get().current;
        if (!c) return;
        set({
          current: { ...c, cursor: Math.min(c.cursor + 1, c.order.length - 1) }
        });
      },

      prev: () => {
        const c = get().current;
        if (!c) return;
        set({ current: { ...c, cursor: Math.max(c.cursor - 1, 0) } });
      },

      goTo: (index) => {
        const c = get().current;
        if (!c) return;
        set({
          current: {
            ...c,
            cursor: Math.max(0, Math.min(index, c.order.length - 1))
          }
        });
      },

      toggleMark: (questionId) => {
        const c = get().current;
        if (!c) return;
        const nextMarked = { ...(c.marked ?? {}) };
        if (nextMarked[questionId]) {
          delete nextMarked[questionId];
        } else {
          nextMarked[questionId] = true;
        }
        set({ current: { ...c, marked: nextMarked } });
      },

      recordWrong: (ids) => {
        if (!ids.length) return;
        const nextWrong = { ...(get().wrong ?? {}) };
        for (const id of ids) nextWrong[id] = true;
        set({ wrong: nextWrong });
      },

      clearWrong: (id) => {
        const nextWrong = { ...(get().wrong ?? {}) };
        if (!(id in nextWrong)) return;
        delete nextWrong[id];
        set({ wrong: nextWrong });
      },

      finish: () => {
        const c = get().current;
        if (!c) return;
        set({ current: { ...c, finishedAt: Date.now() } });
      },

      reset: () => set({ current: null })
    }),
    {
      name: 'fahrschule-quiz',
      storage: createJSONStorage(() =>
        typeof window === 'undefined'
          ? // SSR-safe noop storage
            { getItem: () => null, setItem: () => {}, removeItem: () => {} }
          : localStorage
      ),
      // localStorage is user-controlled: never trust its shape. Anything
      // malformed is dropped instead of crashing the pages that read it.
      merge: (persisted, current) => ({ ...current, ...sanitizePersisted(persisted) })
    }
  )
);

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v);

function idSet(v: unknown): Record<string, true> {
  if (!isObj(v)) return {};
  const out: Record<string, true> = {};
  for (const k of Object.keys(v)) if (k.length <= 64 && v[k] === true) out[k] = true;
  return out;
}

const CLASSES: readonly LicenseClass[] = ['A', 'B', 'AB', 'Mofa'];

function sanitizeSnapshot(v: unknown): QuizSnapshot | null {
  if (!isObj(v)) return null;
  if (!CLASSES.includes(v.licenseClass as LicenseClass)) return null;
  if (!Array.isArray(v.order) || !v.order.every((id) => typeof id === 'string')) return null;
  if (typeof v.startedAt !== 'number' || !isObj(v.answers)) return null;
  const answers: Record<string, QuizAnswer> = {};
  for (const [id, a] of Object.entries(v.answers)) {
    if (isObj(a) && Array.isArray(a.selectedIds) && a.selectedIds.every((x) => typeof x === 'string')) {
      answers[id] = { questionId: id, selectedIds: a.selectedIds as string[] };
    }
  }
  const cursor = typeof v.cursor === 'number' && Number.isInteger(v.cursor) ? v.cursor : 0;
  return {
    licenseClass: v.licenseClass as LicenseClass,
    filter: typeof v.filter === 'string' ? v.filter : null,
    startedAt: v.startedAt,
    finishedAt: typeof v.finishedAt === 'number' ? v.finishedAt : null,
    answers,
    order: v.order as string[],
    cursor: Math.max(0, Math.min(cursor, Math.max(0, (v.order as string[]).length - 1))),
    marked: idSet(v.marked)
  };
}

/** Exported for tests. */
export function sanitizePersisted(
  persisted: unknown
): Pick<QuizState, 'current' | 'wrong'> {
  const p = isObj(persisted) ? persisted : {};
  return {
    current: sanitizeSnapshot(p.current),
    wrong: idSet(p.wrong)
  };
}
