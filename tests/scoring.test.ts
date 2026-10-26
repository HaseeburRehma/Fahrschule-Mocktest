import { describe, expect, it } from 'vitest';
import { evaluate } from '@/lib/scoring';
import { getQuestionMap, getQuestionsForClass } from '@/data/questions';
import type { QuizSnapshot } from '@/store/quiz';

const pool = getQuestionsForClass('B');

function snapshot(order: string[], answers: Record<string, string[]>): QuizSnapshot {
  return {
    licenseClass: 'B',
    filter: null,
    startedAt: 1_000,
    finishedAt: 61_000,
    order,
    cursor: 0,
    marked: {},
    answers: Object.fromEntries(Object.entries(answers).map(([id, sel]) => [id, { questionId: id, selectedIds: sel }]))
  };
}

describe('evaluate', () => {
  const sample = pool.slice(0, 6);
  const order = sample.map((q) => q.id);

  it('scores an all-correct paper as passed with zero error points', () => {
    const r = evaluate(snapshot(order, Object.fromEntries(sample.map((q) => [q.id, q.correctIds]))), pool);
    expect(r.correctCount).toBe(6);
    expect(r.errorPoints).toBe(0);
    expect(r.passed).toBe(true);
    expect(r.total).toBe(sample.reduce((s, q) => s + q.points, 0));
    expect(r.durationMs).toBe(60_000);
  });

  it('treats skipped and partial answers as wrong (strict German rules)', () => {
    const multi = pool.find((q) => q.correctIds.length > 1)!;
    const r = evaluate(snapshot([multi.id, sample[0].id], { [multi.id]: [multi.correctIds[0]] }), pool);
    expect(r.wrongCount).toBe(1);
    expect(r.skippedCount).toBe(1);
    expect(r.errorPoints).toBe(multi.points + sample[0].points);
  });

  it('fails on two wrong 5-pointers even under the error-point limit', () => {
    const fives = pool.filter((q) => q.points === 5).slice(0, 2);
    expect(fives).toHaveLength(2);
    const r = evaluate(snapshot(fives.map((q) => q.id), {}), pool);
    expect(r.errorPoints).toBe(10);
    expect(r.passed).toBe(false);
    expect(r.failureReason).toBe('twoFivePointersFailed');
  });

  it('ignores ids that are not in the pool instead of crashing', () => {
    const r = evaluate(snapshot(['does-not-exist', order[0]], {}), pool);
    expect(r.perQuestion).toHaveLength(1);
  });
});

describe('question pool caches', () => {
  it('returns a stable pool and an O(1) id map that agree', () => {
    expect(getQuestionsForClass('B')).toBe(getQuestionsForClass('B'));
    const map = getQuestionMap('B');
    expect(map.size).toBe(pool.length);
    for (const q of pool.slice(0, 20)) expect(map.get(q.id)).toBe(q);
  });
});
