# Fahrschule Mocktest

A modern, multilingual mock theory exam for German driving licences (Klasse A, B, A+B, Mofa). Inspired by the brand language of *fahrschule-abgefahrn.de* and the question format of TÜV/DEKRA's official theory test.

> Pure black UI, electric-green (`#01FE21`) accents, Framer-Motion animations, six languages out of the box, full responsive design.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom brand theme
- **Framer Motion** for transitions
- **Zustand** (with `persist`) for quiz state
- **next-intl** for i18n (DE, EN, AR, TR, RU, PL)
- **Lucide React** + custom inline-SVG traffic signs / class icons

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000  (auto-redirects to /de)
```

Other commands:

```bash
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # strict TypeScript pass (no emit)
npm run lint         # next lint
```

---

## Folder map

```
fahrschule-app/
├── messages/                  # next-intl JSON catalogs (one file per locale)
│   ├── de.json   en.json   ar.json   tr.json   ru.json   pl.json
└── src/
    ├── app/
    │   ├── layout.tsx                 # root layout (passes through)
    │   ├── globals.css                # tailwind + design tokens
    │   ├── sitemap.ts / robots.ts     # SEO
    │   └── [locale]/
    │       ├── layout.tsx             # html/body, dir=rtl for Arabic
    │       ├── page.tsx               # home (hero + selectors)
    │       ├── quiz/[licenseClass]/page.tsx
    │       └── results/[licenseClass]/page.tsx
    ├── components/
    │   ├── Hero.tsx, LanguageSelector.tsx, ClassSelector.tsx, InfoCard.tsx, Footer.tsx
    │   ├── QuizClient.tsx             # quiz orchestrator (client)
    │   ├── QuestionCard.tsx           # single question with feedback
    │   ├── ProgressBar.tsx
    │   ├── ResultsClient.tsx          # animated score + breakdown
    │   ├── AnimatedNumber.tsx, Confetti.tsx
    │   └── icons/
    │       ├── ClassIcons.tsx         # vehicle silhouettes
    │       ├── Flags.tsx              # 6 country flags
    │       └── TrafficSigns.tsx       # 10 standard German signs
    ├── data/
    │   ├── types.ts                   # Question / LocalizedText / Category etc.
    │   └── questions.ts               # the question bank + helpers
    ├── store/quiz.ts                  # Zustand quiz store (persisted)
    ├── lib/scoring.ts                 # evaluate(snapshot, pool) -> QuizResult
    ├── i18n/
    │   ├── routing.ts                 # locales list, RTL list, navigation helpers
    │   └── request.ts                 # next-intl request config
    └── middleware.ts                  # locale detection + routing
```

---

## How translation works

- **UI strings** live in `messages/<locale>.json` and are loaded by `next-intl`. All six locales are translated.
- **Question content** lives in `src/data/questions.ts`. Each question carries `de` and `en` strings only — that's a deliberate scope choice. Other locales fall back to English content while the surrounding chrome stays localised.
- **RTL** is handled at the `[locale]/layout.tsx` level via `dir="rtl"` for `ar`. Tailwind utilities used here are direction-agnostic, so layouts mirror cleanly.
- The language switcher persists the choice in `localStorage` (key `preferred-locale`) and rewrites the URL via `next-intl/navigation`.

---

## How to add a question

Open `src/data/questions.ts` and append to the `questions` array:

```ts
{
  id: 'unique-id',
  category: 'signs',                       // see Category type
  classes: ['A', 'B', 'AB', 'Mofa'],       // which exams this appears in (AB = A∪B)
  points: 3,                               // 1–5; weights the score
  signId: 'stop',                          // optional — pulls a built-in SVG
  question: {
    de: '…',
    en: '…'
  },
  options: [
    { id: 'a', text: { de: '…', en: '…' } },
    { id: 'b', text: { de: '…', en: '…' } }
  ],
  correctIds: ['a'],                       // 1+ correct = multi-select
  explanation: { de: '…', en: '…' }
}
```

To add a new traffic sign, drop a function into `src/components/icons/TrafficSigns.tsx`, register it in the map, and add its key to the `SignId` union in `src/data/types.ts`.

---

## How scoring works

- Each question has a `points` value (1–5).
- A run shuffles the question pool with Fisher–Yates so two attempts aren't identical.
- `lib/scoring.ts → evaluate()` produces:
  - `correct` (full points) / `partial` (proportional points if user picked only correct options but missed some) / `wrong` (0) / `skipped` (0)
  - per-category aggregates
  - duration, pass/fail
- **Pass threshold** = 80 % of total points (configurable in `data/questions.ts → passThresholdFor`). The official Klasse-B exam allows 10 error points out of 110 — the same idea at a slightly more forgiving threshold for a mock.

---

## Brand theme

Tailwind tokens are in `tailwind.config.ts`:

| Token | Value |
| --- | --- |
| `bg-ink-0` | `#000000` |
| `bg-ink-100` | `#111111` |
| `text-brand` / `bg-brand` | `#01FE21` |
| `text-danger` / `bg-danger` | `#FF4444` |
| `shadow-glow` / `shadow-glow-lg` / `shadow-glow-soft` | brand-coloured drop shadows |

Headings use `font-display` (BlauerNue, falls back to Russo One). Body uses Montserrat. Both load through `globals.css`.

To self-host **BlauerNue**, drop the `.woff2` files into `public/fonts/` and update the `@font-face` rule in `globals.css`.

---

## Deployment

Push to a Git repo and import on **Vercel** — no extra config needed.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel env so `sitemap.ts` and `robots.ts` produce correct URLs.

---

## Architecture notes (short)

- **Server components by default**, client components only where needed (Quiz/Results clients, language switcher). Keeps initial bundle small.
- **next-intl App Router setup** uses the `[locale]` segment + `routing.ts` so all internal navigation goes through type-safe helpers.
- **Quiz state is persisted to localStorage** so a refresh mid-exam restores progress.
- **Inline-SVG signs and flags** mean the project ships with zero external image assets — easy to deploy anywhere.
- **Strict TS** (`strict: true`, `noEmit`) — `npm run typecheck` is part of the workflow.

---

## Roadmap ideas

- Translate the question bank fully into AR/TR/RU/PL (currently UI only).
- Add real driving-school imagery to the home page.
- Optional countdown timer (commented hook in `QuizClient`).
- Dark/light theme toggle (theme is currently dark-only by design).
- Per-user history (Supabase or similar) instead of localStorage.
