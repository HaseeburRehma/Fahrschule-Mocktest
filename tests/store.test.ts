import { beforeEach, describe, expect, it } from 'vitest';
import { sanitizePersisted, useQuiz } from '@/store/quiz';

beforeEach(() => {
  useQuiz.setState({ current: null, wrong: {} });
});

describe('wrong-answer tracking', () => {
  it('records and clears wrong ids', () => {
    useQuiz.getState().recordWrong(['a', 'b']);
    useQuiz.getState().clearWrong('a');
    expect(useQuiz.getState().wrong).toEqual({ b: true });
  });
});

describe('quiz navigation', () => {
  it('clamps cursor movement to the paper', () => {
    useQuiz.getState().start('B', ['q1', 'q2', 'q3']);
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
  it('drops malformed values instead of crashing', () => {
    const out = sanitizePersisted({
      current: { licenseClass: 'X', order: 'nope' },
      wrong: { ok: true, bad: 'yes', ['x'.repeat(200)]: true }
    });
    expect(out.current).toBeNull();
    expect(out.wrong).toEqual({ ok: true });
  });

  it('keeps a valid snapshot and clamps its cursor', () => {
    const out = sanitizePersisted({
      current: {
        licenseClass: 'B',
        order: ['a', 'b'],
        startedAt: 1,
        answers: { a: { selectedIds: ['x'] }, b: 5 },
        cursor: 99,
        marked: { a: true }
      }
    });
    expect(out.current?.cursor).toBe(1);
    expect(Object.keys(out.current!.answers)).toEqual(['a']);
    expect(out.current?.marked).toEqual({ a: true });
  });

  it('handles null / primitives', () => {
    for (const v of [null, undefined, 42, 'str', []]) {
      expect(sanitizePersisted(v)).toEqual({ current: null, wrong: {} });
    }
  });
});
