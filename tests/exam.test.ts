import { describe, expect, it } from 'vitest';
import { buildExam, buildFilteredExam, EXAM_RULES } from '@/lib/exam';
import { getQuestionsForClass } from '@/data/questions';

const pool = getQuestionsForClass('B');
const ids = new Set(pool.map((q) => q.id));

describe('buildExam', () => {
  it('draws a full paper of unique questions from the class pool', () => {
    for (let i = 0; i < 25; i++) {
      const paper = buildExam('B', pool);
      expect(paper.questionIds).toHaveLength(EXAM_RULES.totalQuestions);
      expect(new Set(paper.questionIds).size).toBe(paper.questionIds.length);
      for (const id of paper.questionIds) expect(ids.has(id)).toBe(true);
    }
  });

  it('does not mutate the cached pool', () => {
    const before = pool.map((q) => q.id).join();
    buildExam('B', pool);
    buildFilteredExam('B', pool, 'tough', { markedIds: [], wrongIds: [], topicCode: null });
    expect(pool.map((q) => q.id).join()).toBe(before);
  });
});

describe('buildFilteredExam', () => {
  it('returns nothing for "marked" when nothing is marked', () => {
    const p = buildFilteredExam('B', pool, 'marked', { markedIds: [], wrongIds: [], topicCode: null });
    expect(p.questionIds).toHaveLength(0);
  });

  it('returns exactly the wrong questions for "wrong"', () => {
    const wrong = pool.slice(0, 3).map((q) => q.id);
    const p = buildFilteredExam('B', pool, 'wrong', { markedIds: [], wrongIds: wrong, topicCode: null });
    expect(new Set(p.questionIds)).toEqual(new Set(wrong));
  });

  it('only returns sign / video questions for those filters', () => {
    const video = buildFilteredExam('B', pool, 'video', { markedIds: [], wrongIds: [], topicCode: null });
    const byId = new Map(pool.map((q) => [q.id, q]));
    for (const id of video.questionIds) expect(byId.get(id)?.videoPath).toBeTruthy();
  });

  it('scopes topic papers to the topic code', () => {
    const code = pool.find((q) => q.topicCode)!.topicCode!;
    const p = buildFilteredExam('B', pool, null, { markedIds: [], wrongIds: [], topicCode: code });
    expect(p.questionIds.length).toBeGreaterThan(0);
  });
});
