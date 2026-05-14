import type { Question, LicenseClass } from '@/data/types';
import { getQuestionsForClass, maxScoreFor, passThresholdFor } from '@/data/questions';
import { EXAM_RULES } from '@/lib/exam';
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

  /** Sum of point-values gained on correct answers. */
  earned: number;
  /** Sum of point-values of every paper question (=== max score). */
  total: number;
  /** Legacy 80% threshold (kept for any old callers / Mofa fallback). */
  passThreshold: number;

  // ── German error-point scoring (the official rule) ─────────────────────
  /** Sum of point-values of every wrong / skipped answer. */
  errorPoints: number;
  /** Max tolerated error points to still pass (10 for class B). */
  maxErrorPoints: number;
  /** Number of 5-point questions answered wrong. */
  failedFivePointers: number;
  /** True if the candidate passes by the official rules. */
  passed: boolean;
  /** Reason for failure when applicable. */
  failureReason?: 'tooManyErrorPoints' | 'twoFivePointersFailed';

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
  let errorPoints = 0;
  let failedFivePointers = 0;
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
    let questionWrong = false;

    if (selectedIds.length === 0) {
      verdict = 'skipped';
      skippedCount++;
      questionWrong = true;
    } else {
      const correctSet = new Set(q.correctIds);
      const selectedSet = new Set(selectedIds);
      const exact =
        correctSet.size === selectedSet.size &&
        [...correctSet].every((id) => selectedSet.has(id));
      if (exact) {
        verdict = 'correct';
        questionEarned = q.points;
        correctCount++;
      } else {
        // Strict German exam: anything other than exact selection is wrong.
        verdict = 'wrong';
        wrongCount++;
        questionWrong = true;
      }
    }

    if (questionWrong) {
      errorPoints += q.points;
      if (q.points === 5) failedFivePointers++;
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

  // Apply German pass rules.
  let passed = errorPoints <= EXAM_RULES.maxErrorPoints;
  let failureReason: QuizResult['failureReason'];
  if (!passed) failureReason = 'tooManyErrorPoints';
  if (
    passed &&
    EXAM_RULES.autoFailOnTwoFivePointers &&
    failedFivePointers >= 2
  ) {
    passed = false;
    failureReason = 'twoFivePointersFailed';
  }

  return {
    perQuestion,
    earned,
    total,
    passThreshold: Math.ceil(total * 0.8),
    errorPoints,
    maxErrorPoints: EXAM_RULES.maxErrorPoints,
    failedFivePointers,
    passed,
    failureReason,
    correctCount,
    wrongCount,
    skippedCount,
    durationMs: (snapshot.finishedAt ?? Date.now()) - snapshot.startedAt,
    byCategory
  };
}

export { getQuestionsForClass, maxScoreFor, passThresholdFor };
export type { Question, LicenseClass };
