import { beforeEach, describe, expect, it } from 'vitest';
import { MAX_HISTORY, useQuiz, type AttemptSummary } from '@/store/quiz';

function attempt(n: number, extra: Partial<AttemptSummary> = {}): AttemptSummary {
  return {
    id: `B:${n}`,
    licenseClass: 'B',
    filter: null,
    finishedAt: n,
    durationMs: 1000,
    total: 30,
    correct: 28,
    errorPoints: 4,
    passed: true,
    ...extra
  };
}

beforeEach(() => {
  useQuiz.setState({ current: null, wrong: {}, mastered: {}, history: [] });
});

describe('recordAttempt', () => {
  it('moves ids between wrong and mastered', () => {
    const s = useQuiz.getState();
    s.recordAttempt(attempt(1), ['a', 'b'], ['c']);
    expect(useQuiz.getState().wrong).toEqual({ a: true, b: true });
    expect(useQuiz.getState().mastered).toEqual({ c: true });

    useQuiz.getState().recordAttempt(attempt(2), ['c'], ['a']);
    expect(useQuiz.getState().wrong).toEqual({ b: true, c: true });
    expect(useQuiz.getState().mastered).toEqual({ a: true });
  });

  it('is idempotent per attempt id (re-renders of the results page)', () => {
    for (let i = 0; i < 5; i++) useQuiz.getState().recordAttempt(attempt(7), ['x'], []);
    expect(useQuiz.getState().history).toHaveLength(1);
  });

  it('keeps the newest attempts first and caps the history', () => {
    for (let i = 0; i < MAX_HISTORY + 10; i++) useQuiz.getState().recordAttempt(attempt(i), [], []);
    const h = useQuiz.getState().history;
    expect(h).toHaveLength(MAX_HISTORY);
    expect(h[0].id).toBe(`B:${MAX_HISTORY + 9}`);
  });
});

describe('quiz navigation', () => {
  it('clamps cursor movement to the paper', () => {
    const s = useQuiz.getState();
    s.start('B', ['q1', 'q2', 'q3']);
    useQuiz.getState().prev();
    expect(useQuiz.getState().current?.cursor).toBe(0);
    useQuiz.getState().goTo(99);
    expect(useQuiz.getState().current?.cursor).toBe(2);
    useQuiz.getState().next();
    expect(useQuiz.getState().current?.cursor).toBe(2);
  });

  it('keeps marked questions across restarts', () => {
    useQuiz.getState().start('B', ['q1']);
    useQuiz.getState().toggleMark('q1');
    useQuiz.getState().start('B', ['q2']);
    expect(useQuiz.getState().current?.marked).toEqual({ q1: true });
  });
});

describe('sanitizePersisted (tampered localStorage)', () => {
  it('drops malformed values instead of crashing', async () => {
    const { sanitizePersisted } = await import('@/store/quiz');
    const out = sanitizePersisted({
      current: { licenseClass: 'X', order: 'nope' },
      wrong: ['a'],
      mastered: { ok: true, bad: 'yes', ['x'.repeat(200)]: true },
      history: ['junk', { id: 1 }, attempt(3), { ...attempt(4), errorPoints: -1 }, { ...attempt(5), total: NaN }]
    });
    expect(out.current).toBeNull();
    expect(out.wrong).toEqual({});
    expect(out.mastered).toEqual({ ok: true });
    expect(out.history.map((h) => h.id)).toEqual(['B:3']);
  });

  it('keeps a valid snapshot and clamps its cursor', async () => {
    const { sanitizePersisted } = await import('@/store/quiz');
    const out = sanitizePersisted({
      current: { licenseClass: 'B', order: ['a', 'b'], startedAt: 1, answers: { a: { selectedIds: ['x'] }, b: 5 }, cursor: 99, marked: { a: true } }
    });
    expect(out.current?.cursor).toBe(1);
    expect(Object.keys(out.current!.answers)).toEqual(['a']);
    expect(out.current?.marked).toEqual({ a: true });
  });

  it('handles null / primitives', async () => {
    const { sanitizePersisted } = await import('@/store/quiz');
    for (const v of [null, undefined, 42, 'str', []]) {
      expect(sanitizePersisted(v)).toEqual({ current: null, wrong: {}, mastered: {}, history: [] });
    }
  });
});
