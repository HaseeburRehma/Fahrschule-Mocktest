import { describe, expect, it } from 'vitest';
import { computeStreak, formatDuration, masteryPercent } from '@/lib/progress';
import type { AttemptSummary } from '@/store/quiz';

const DAY = 24 * 60 * 60 * 1000;
const at = (ts: number): AttemptSummary => ({
  id: String(ts), licenseClass: 'B', filter: null, finishedAt: ts, durationMs: 0,
  total: 30, correct: 30, errorPoints: 0, passed: true
});

describe('computeStreak', () => {
  const now = new Date(2026, 9, 26, 15).getTime();
  it('is 0 without attempts', () => expect(computeStreak([], now)).toBe(0));
  it('counts consecutive days ending today', () => {
    expect(computeStreak([at(now), at(now - DAY), at(now - 2 * DAY), at(now - 4 * DAY)], now)).toBe(3);
  });
  it('still counts a streak that ended yesterday', () => {
    expect(computeStreak([at(now - DAY), at(now - 2 * DAY)], now)).toBe(2);
  });
  it('breaks after a missed day', () => expect(computeStreak([at(now - 2 * DAY)], now)).toBe(0));
  it('counts several attempts on one day once', () => expect(computeStreak([at(now), at(now - 1000)], now)).toBe(1));
});

describe('helpers', () => {
  it('masteryPercent is bounded and safe for empty pools', () => {
    expect(masteryPercent(0, 0)).toBe(0);
    expect(masteryPercent(121, 242)).toBe(50);
    expect(masteryPercent(500, 242)).toBe(100);
  });
  it('formatDuration renders m:ss', () => {
    expect(formatDuration(72_000)).toBe('1:12');
    expect(formatDuration(-5)).toBe('0:00');
  });
});
