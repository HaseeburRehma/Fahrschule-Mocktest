/**
 * Exam engine — mirrors the structure of the official German theory exam.
 *
 * Class B paper:
 *   - 30 questions total
 *   - 20 drawn from Grundstoff (basic material)
 *   - 10 drawn from Zusatzstoff (class-B-specific material)
 *   - Each question worth 2 – 5 error points
 *   - Pass: at most 10 error points
 *   - Auto-fail: two 5-point questions both wrong (because that already
 *     reaches 10 error points and the SVG (Pkw-Führerschein) rule
 *     treats it as a hard fail).
 *
 * The engine is **pure logic**: it never copies catalogue text. It only
 * decides which question IDs make up a paper and how to score them.
 */

import type { Question, LicenseClass, TopicType } from '@/data/types';
import {
  grundstoffTopics,
  zusatzstoffTopicsB,
  catalogueTotal,
  type Topic
} from '@/data/topics';

// ─── Public rules ────────────────────────────────────────────────────────

export const EXAM_RULES = {
  /** Total questions per paper. */
  totalQuestions: 30,
  /** Grundstoff questions per Class B paper. */
  grundstoffCount: 20,
  /** Zusatzstoff (class B) questions per paper. */
  zusatzstoffCount: 10,
  /** Maximum tolerated error points (inclusive) to still pass. */
  maxErrorPoints: 10,
  /** Two failed 5-point questions = auto-fail. */
  autoFailOnTwoFivePointers: true
} as const;

// ─── Types ───────────────────────────────────────────────────────────────

export interface ExamPaper {
  /** Stable, ordered list of question IDs (already shuffled). */
  questionIds: string[];
  /** Generated client-side, used to identify a single attempt. */
  attemptId: string;
  licenseClass: LicenseClass;
}

export interface ScoreBreakdown {
  /** Sum of points of all wrongly answered questions. */
  errorPoints: number;
  /** Count of questions answered fully correctly. */
  correctCount: number;
  /** Count of wrong (or partially wrong) answers. */
  wrongCount: number;
  /** Count of unanswered. */
  skippedCount: number;
  /** Number of 5-point questions answered wrongly. */
  failedFivePointers: number;
  /** Did the candidate pass? */
  passed: boolean;
  /** Reason for failure if applicable. */
  failureReason?: 'tooManyErrorPoints' | 'twoFivePointersFailed';
  /** Per-topic breakdown for the result page. */
  byTopic: Array<{
    topicCode: string;
    answered: number;
    correct: number;
    errorPoints: number;
  }>;
}

// ─── Helpers ─────────────────────────────────────────────────────────────

/** Cryptographically light-weight RNG seed from string (deterministic). */
function hashSeed(s: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Mulberry32 PRNG — deterministic when seeded, fast, good enough. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher–Yates in place, using the supplied RNG. */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Take the first `n` items after shuffling. */
function pick<T>(arr: T[], n: number, rng: () => number): T[] {
  return shuffle(arr, rng).slice(0, n);
}

/** Group questions by topicCode (or '_unassigned' if missing). */
function byTopicCode(qs: Question[]): Map<string, Question[]> {
  const map = new Map<string, Question[]>();
  for (const q of qs) {
    const code = q.topicCode ?? '_unassigned';
    const bucket = map.get(code) ?? [];
    bucket.push(q);
    map.set(code, bucket);
  }
  return map;
}

/**
 * Distribute `need` questions across the supplied topics proportional
 * to their catalogue size, drawing only from `available` per topic.
 * Spills over to other topics if a bucket is too small.
 */
function drawByTopic(
  topics: Topic[],
  pool: Map<string, Question[]>,
  need: number,
  rng: () => number
): Question[] {
  // Weight by catalogue count so heavier topics (e.g. "Behaviour in road
  // traffic" with 243 catalogue questions) get more draws.
  const weights = topics.map((t) => ({ code: t.code, weight: t.catalogueCount }));
  const totalWeight = weights.reduce((s, w) => s + w.weight, 0) || 1;

  // Initial quota per topic (rounded down).
  const quotas = new Map<string, number>();
  let assigned = 0;
  for (const w of weights) {
    const q = Math.floor((w.weight / totalWeight) * need);
    quotas.set(w.code, q);
    assigned += q;
  }
  // Distribute remainder largest-fractional-part style (deterministic-enough).
  let remaining = need - assigned;
  const fractions = weights
    .map((w) => ({
      code: w.code,
      frac: (w.weight / totalWeight) * need - Math.floor((w.weight / totalWeight) * need)
    }))
    .sort((a, b) => b.frac - a.frac);
  for (const f of fractions) {
    if (remaining <= 0) break;
    quotas.set(f.code, (quotas.get(f.code) ?? 0) + 1);
    remaining--;
  }

  // Pull from each topic's bucket; spill-over goes to a global leftover pool.
  const drawn: Question[] = [];
  const leftovers: Question[] = [];

  for (const t of topics) {
    const want = quotas.get(t.code) ?? 0;
    // Sub-topic codes share the prefix (e.g. "2.1.06" starts with "2.1.").
    const prefix = t.code + '.';
    const bucket = [
      ...(pool.get(t.code) ?? []),
      ...[...pool.entries()]
        .filter(([k]) => k.startsWith(prefix))
        .flatMap(([, v]) => v)
    ];
    const dedup = Array.from(new Set(bucket));
    if (dedup.length <= want) {
      drawn.push(...dedup);
      // not enough — record how many we still need from elsewhere
    } else {
      drawn.push(...pick(dedup, want, rng));
      // remaining go to the leftover pool
      const remainingForSpill = dedup.filter((q) => !drawn.includes(q));
      leftovers.push(...remainingForSpill);
    }
  }

  // If we under-drew (sparse topics), top up from the leftover pool.
  if (drawn.length < need) {
    const allPool = [...pool.values()].flat();
    const filler = allPool.filter((q) => !drawn.includes(q));
    drawn.push(...pick([...new Set([...leftovers, ...filler])], need - drawn.length, rng));
  }

  // If we over-drew (shouldn't happen, defensive), trim.
  return drawn.slice(0, need);
}

// ─── Public API ──────────────────────────────────────────────────────────

/**
 * Build a fresh 30-question paper for the given licence class.
 *
 * Always returns exactly `EXAM_RULES.totalQuestions` ids if the pool is
 * large enough; falls back to "as many as available" otherwise so the
 * UI keeps working while the real catalogue is small.
 */
export function buildExam(
  licenseClass: LicenseClass,
  pool: Question[],
  opts: { seed?: string } = {}
): ExamPaper {
  const attemptId =
    opts.seed ??
    `${licenseClass}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  const rng = mulberry32(hashSeed(attemptId));

  // Filter by licence class — AB picks A ∪ B.
  const eligible = pool.filter((q) => {
    if (licenseClass === 'AB') {
      return (
        q.classes.includes('AB') ||
        q.classes.includes('A') ||
        q.classes.includes('B')
      );
    }
    return q.classes.includes(licenseClass);
  });

  // Split by topicType. Anything missing a topicType is treated as Grundstoff
  // so older questions still work while the bank is being tagged up.
  const grundstoffQs = eligible.filter(
    (q) => (q.topicType ?? 'grundstoff') === 'grundstoff'
  );
  const zusatzQs = eligible.filter((q) => q.topicType === 'zusatzstoff');

  // Group by topic for proportional draw.
  const gMap = byTopicCode(grundstoffQs);
  const zMap = byTopicCode(zusatzQs);

  // Only Class B uses the 20/10 split. Mofa / A: draw 30 from whatever
  // is eligible (no Zusatzstoff split required for this MVP).
  let chosen: Question[] = [];
  if (licenseClass === 'B' || licenseClass === 'AB') {
    const gNeed = Math.min(EXAM_RULES.grundstoffCount, grundstoffQs.length);
    const zNeed = Math.min(EXAM_RULES.zusatzstoffCount, zusatzQs.length);
    chosen = [
      ...drawByTopic(grundstoffTopics, gMap, gNeed, rng),
      ...drawByTopic(zusatzstoffTopicsB, zMap, zNeed, rng)
    ];
    // Top up if either side was too small.
    if (chosen.length < EXAM_RULES.totalQuestions) {
      const filler = eligible.filter((q) => !chosen.includes(q));
      chosen.push(...pick(filler, EXAM_RULES.totalQuestions - chosen.length, rng));
    }
  } else {
    chosen = pick(eligible, Math.min(EXAM_RULES.totalQuestions, eligible.length), rng);
  }

  // Final shuffle so Grundstoff/Zusatzstoff aren't bunched.
  const shuffled = shuffle(chosen, rng);

  return {
    questionIds: shuffled.map((q) => q.id),
    attemptId,
    licenseClass
  };
}

/**
 * Score a finished exam against the supplied question pool and the
 * candidate's answers (questionId → selected option ids).
 */
export function scoreExam(
  paper: ExamPaper,
  pool: Question[],
  answers: Record<string, string[] | undefined>
): ScoreBreakdown {
  const byId = new Map(pool.map((q) => [q.id, q]));

  let errorPoints = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;
  let failedFivePointers = 0;

  const topicAgg = new Map<
    string,
    { answered: number; correct: number; errorPoints: number }
  >();

  for (const qid of paper.questionIds) {
    const q = byId.get(qid);
    if (!q) continue;
    const sel = answers[qid] ?? [];
    const code = q.topicCode ?? '_unassigned';
    const t = topicAgg.get(code) ?? { answered: 0, correct: 0, errorPoints: 0 };

    if (sel.length === 0) {
      skippedCount++;
      wrongCount++; // skipped is treated as wrong in the German exam
      errorPoints += q.points;
      t.answered += 1;
      t.errorPoints += q.points;
      if (q.points === 5) failedFivePointers++;
    } else {
      const correctSet = new Set(q.correctIds);
      const pickedSet = new Set(sel);
      const same =
        correctSet.size === pickedSet.size &&
        [...correctSet].every((id) => pickedSet.has(id));
      if (same) {
        correctCount++;
        t.answered += 1;
        t.correct += 1;
      } else {
        wrongCount++;
        errorPoints += q.points;
        t.answered += 1;
        t.errorPoints += q.points;
        if (q.points === 5) failedFivePointers++;
      }
    }
    topicAgg.set(code, t);
  }

  // Pass logic.
  let passed = errorPoints <= EXAM_RULES.maxErrorPoints;
  let failureReason: ScoreBreakdown['failureReason'] | undefined;
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
    errorPoints,
    correctCount,
    wrongCount,
    skippedCount,
    failedFivePointers,
    passed,
    failureReason,
    byTopic: Array.from(topicAgg.entries()).map(([topicCode, v]) => ({
      topicCode,
      ...v
    }))
  };
}

/** Max attainable error points (sum of every paper question's points). */
export function maxErrorPointsFor(paper: ExamPaper, pool: Question[]): number {
  const byId = new Map(pool.map((q) => [q.id, q]));
  return paper.questionIds.reduce(
    (sum, id) => sum + (byId.get(id)?.points ?? 0),
    0
  );
}

/**
 * Filter the eligible pool by a high-level category from the home page
 * QuestionFilter UI. Returns a freshly-shuffled, capped list of question
 * IDs (up to `EXAM_RULES.totalQuestions`). The filter `random` and any
 * unknown filter fall through to the standard `buildExam` draw.
 */
export type FilterId =
  | 'signs'
  | 'wrong'
  | 'marked'
  | 'picture'
  | 'video'
  | 'selection'
  | 'numbers'
  | 'new'
  | 'random'
  | 'search'
  | 'topics';

export function buildFilteredExam(
  licenseClass: LicenseClass,
  pool: Question[],
  filter: FilterId | null | undefined,
  context: { markedIds?: string[]; wrongIds?: string[]; topicCode?: string | null } = {}
): ExamPaper {
  // A topic drill takes precedence over standard filters when supplied.
  if (context.topicCode) {
    return buildTopicExam(licenseClass, pool, context.topicCode);
  }
  if (!filter || filter === 'random' || filter === 'topics' || filter === 'search') {
    return buildExam(licenseClass, pool);
  }

  const attemptId = `${licenseClass}-${filter}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
  const rng = mulberry32(hashSeed(attemptId));

  // Filters that intentionally ignore the licence class because the
  // underlying media (or user state) is cross-class. For example, the
  // video question pool is small and shared between all classes — we
  // want the user to see every available video, no matter which class
  // they picked on the home page.
  const classAgnostic: Set<FilterId> = new Set(['video', 'marked', 'wrong']);
  const ignoreClass = classAgnostic.has(filter);

  // First filter by licence class (mirrors buildExam) unless the filter is
  // explicitly class-agnostic.
  const eligible = ignoreClass
    ? pool.slice()
    : pool.filter((q) => {
        if (licenseClass === 'AB') {
          return (
            q.classes.includes('AB') ||
            q.classes.includes('A') ||
            q.classes.includes('B')
          );
        }
        return q.classes.includes(licenseClass);
      });

  const markedSet = new Set(context.markedIds ?? []);
  const wrongSet = new Set(context.wrongIds ?? []);

  let subset: Question[];
  switch (filter) {
    case 'signs':
      subset = eligible.filter((q) => q.category === 'signs');
      break;
    case 'picture':
      subset = eligible.filter((q) => Boolean(q.imagePath));
      break;
    case 'video':
      subset = eligible.filter((q) => Boolean(q.videoPath));
      break;
    case 'selection':
      subset = eligible.filter((q) => q.correctIds.length > 1);
      break;
    case 'marked':
      subset = eligible.filter((q) => markedSet.has(q.id));
      break;
    case 'wrong':
      subset = eligible.filter((q) => wrongSet.has(q.id));
      break;
    case 'numbers':
      subset = eligible.filter((q) => {
        const txt = `${q.question.de} ${q.question.en}`;
        return /\b\d+\s?(km\/h|m\b|kg|%|°)/i.test(txt) || /\b\d{2,}\b/.test(txt);
      });
      break;
    case 'new':
      subset = eligible.filter((q) => q.id.startsWith('n6-'));
      break;
    default:
      subset = eligible;
  }

  // For class-agnostic filters (video etc.) don't top up — show every
  // matching item even if there are fewer than 10. For class-scoped
  // filters, top up with eligible questions so the session is long enough.
  if (!ignoreClass && subset.length < 10) {
    const filler = eligible.filter((q) => !subset.includes(q));
    subset = [...subset, ...pick(filler, Math.max(0, 10 - subset.length), rng)];
  }

  const chosen = pick(subset, Math.min(EXAM_RULES.totalQuestions, subset.length), rng);

  return {
    questionIds: chosen.map((q) => q.id),
    attemptId,
    licenseClass
  };
}

/**
 * Build a paper limited to a specific topic-code prefix (e.g. "G.06" or
 * "2.1.04"). Returns up to 30 questions; if fewer match, returns all of
 * them rather than padding.
 */
function buildTopicExam(
  licenseClass: LicenseClass,
  pool: Question[],
  topicCode: string
): ExamPaper {
  const attemptId = `${licenseClass}-topic-${topicCode}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
  const rng = mulberry32(hashSeed(attemptId));

  const eligible = pool.filter((q) => {
    if (licenseClass === 'AB') {
      return q.classes.includes('AB') || q.classes.includes('A') || q.classes.includes('B');
    }
    return q.classes.includes(licenseClass);
  });
  const subset = eligible.filter((q) => (q.topicCode ?? '').startsWith(topicCode));
  const chosen = pick(subset, Math.min(EXAM_RULES.totalQuestions, subset.length), rng);
  return {
    questionIds: chosen.map((q) => q.id),
    attemptId,
    licenseClass
  };
}

/** Convenience: count of catalogue questions a class is supposed to have. */
export function officialCatalogueSize(licenseClass: LicenseClass): number {
  if (licenseClass === 'B' || licenseClass === 'AB') {
    return (
      catalogueTotal('grundstoff', licenseClass) +
      catalogueTotal('zusatzstoff', licenseClass)
    );
  }
  return catalogueTotal('grundstoff', licenseClass);
}
