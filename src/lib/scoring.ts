import type { Question, LicenseClass } from '@/data/types';
import { getQuestionsForClass, maxScoreFor, passThresholdFor } from '@/data/questions';
import type { QuizSnapshot } from '@/store/quiz';

export type Verdict = 'correct' | 'partial' | 'wrong' | 'skipped';

export interface PerQuestionResult {
  question: Question;
  selectedIds: string[];
  verdict: Verdict;
  earned: number;
}

export interface QuizResult {
  perQuestion: PerQuestionResult[];
  earned: number;
  total: number;
  passThreshold: number;
  passed: boolean;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  durationMs: number;
  byCategory: Record<string, { correct: number; total: number }>;
}

export function evaluate(
  snapshot: QuizSnapshot,
  pool: Question[]
): QuizResult {
  const perQuestion: PerQuestionResult[] = [];
  const byCategory: Record<string, { correct: number; total: number }> = {};
  let earned = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  for (const id of snapshot.order) {
    const q = pool.find((p) => p.id === id);
    if (!q) continue;
    const ans = snapshot.answers[id];
    const selectedIds = ans?.selectedIds ?? [];

    let verdict: Verdict = 'skipped';
    let questionEarned = 0;

    if (selectedIds.length === 0) {
      verdict = 'skipped';
      skippedCount++;
    } else {
      const correctSet = new Set(q.correctIds);
      const selectedSet = new Set(selectedIds);
      const exact =
        correctSet.size === selectedSet.size &&
        [...correctSet].every((id) => selectedSet.has(id));
      const subset =
        [...selectedSet].every((id) => correctSet.has(id)) && selectedSet.size > 0;
      if (exact) {
        verdict = 'correct';
        questionEarned = q.points;
        correctCount++;
      } else if (subset && selectedSet.size < correctSet.size) {
        // partial credit when user picked only correct answers but missed some
        verdict = 'partial';
        questionEarned = Math.floor((q.points * selectedSet.size) / correctSet.size);
        wrongCount++;
      } else {
        verdict = 'wrong';
        wrongCount++;
      }
    }

    earned += questionEarned;
    perQuestion.push({ question: q, selectedIds, verdict, earned: questionEarned });

    const cat = q.category;
    byCategory[cat] = byCategory[cat] ?? { correct: 0, total: 0 };
    byCategory[cat].total += 1;
    if (verdict === 'correct') byCategory[cat].correct += 1;
  }

  const total = pool
    .filter((q) => snapshot.order.includes(q.id))
    .reduce((s, q) => s + q.points, 0);

  return {
    perQuestion,
    earned,
    total,
    passThreshold: Math.ceil(total * 0.8),
    passed: earned >= Math.ceil(total * 0.8),
    correctCount,
    wrongCount,
    skippedCount,
    durationMs: (snapshot.finishedAt ?? Date.now()) - snapshot.startedAt,
    byCategory
  };
}

export { getQuestionsForClass, maxScoreFor, passThresholdFor };
export type { Question, LicenseClass };
