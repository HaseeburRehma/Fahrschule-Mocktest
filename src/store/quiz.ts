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
  startedAt: number;
  finishedAt: number | null;
  /** Map questionId -> answer */
  answers: Record<string, QuizAnswer>;
  /** ordered question ids for this run */
  order: string[];
  /** index of the active question in `order` */
  cursor: number;
}

interface QuizState {
  current: QuizSnapshot | null;

  start: (licenseClass: LicenseClass, order: string[]) => void;
  setAnswer: (questionId: string, selectedIds: string[]) => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  finish: () => void;
  reset: () => void;
}

export const useQuiz = create<QuizState>()(
  persist(
    (set, get) => ({
      current: null,

      start: (licenseClass, order) =>
        set({
          current: {
            licenseClass,
            startedAt: Date.now(),
            finishedAt: null,
            answers: {},
            order,
            cursor: 0
          }
        }),

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
      )
    }
  )
);
