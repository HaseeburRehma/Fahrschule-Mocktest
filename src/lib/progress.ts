import type { AttemptSummary } from '@/store/quiz';

const DAY_MS = 24 * 60 * 60 * 1000;

function dayIndex(ts: number): number {
  const d = new Date(ts);
  return Math.floor(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY_MS
  );
}

/**
 * Consecutive days (ending today or yesterday) with at least one finished
 * attempt — the "🔥 4" streak chip on the Figma home card.
 */
export function computeStreak(history: AttemptSummary[], now = Date.now()): number {
  if (!history.length) return 0;
  const days = new Set(history.map((h) => dayIndex(h.finishedAt)));
  const today = dayIndex(now);
  let cursor = days.has(today) ? today : today - 1;
  let streak = 0;
  while (days.has(cursor)) {
    streak++;
    cursor--;
  }
  return streak;
}

/** Share of the class pool answered correctly at least once, 0–100. */
export function masteryPercent(masteredCount: number, poolSize: number): number {
  if (poolSize <= 0) return 0;
  return Math.min(100, Math.round((masteredCount / poolSize) * 100));
}

/** Official exam simulations only (no practice filters). */
export function examAttempts(history: AttemptSummary[]): AttemptSummary[] {
  return history.filter((h) => h.filter === null);
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
