import type { ReactElement } from 'react';
import type { SignId } from '@/data/types';

/**
 * Hand-drawn SVG renditions of standard German road signs (StVO).
 * They are intentionally simple, accurate-enough for study, and embed-only —
 * no external assets required. Rendered at the size of the wrapping <div>.
 */
function StopSign() {
  // StVO Zeichen 206 — regular octagon, dark crimson red (B-pure 191), white border
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Stop">
      <polygon
        points="29.3,3 70.7,3 97,29.3 97,70.7 70.7,97 29.3,97 3,70.7 3,29.3"
        fill="#C8102E"
        stroke="#fff"
        strokeWidth="3"
      />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#fff"
        letterSpacing="1"
      >
        STOP
      </text>
    </svg>
  );
}

function YieldSign() {
  // StVO Zeichen 205 — equilateral inverted triangle, white interior,
  // wide red border and a thinner outer black hairline (subtle).
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorfahrt gewähren">
      <polygon points="50,93 5,10 95,10" fill="#C8102E" />
      <polygon points="50,82 16,18 84,18" fill="#fff" />
    </svg>
  );
}

function PriorityRoadSign() {
  // StVO Zeichen 306 — square rotated on its point.
  // Outer thin black, white band, yellow square inner.
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorfahrtstraße">
      <polygon points="50,3 97,50 50,97 3,50" fill="#000" />
      <polygon points="50,7 93,50 50,93 7,50" fill="#fff" />
      <polygon points="50,18 82,50 50,82 18,50" fill="#FFCB05" />
    </svg>
  );
}

function NoEntrySign() {
  // StVO Zeichen 267 — solid red disc, fat horizontal white bar.
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Verbot der Einfahrt">
      <circle cx="50" cy="50" r="46" fill="#C8102E" />
      <circle cx="50" cy="50" r="44" fill="none" stroke="#fff" strokeWidth="2" />
      <rect x="20" y="43" width="60" height="14" fill="#fff" />
    </svg>
  );
}

function SpeedLimitSign({ value }: { value: string }) {
  // StVO Zeichen 274 — white disc, thick red ring, black DIN1451-style numerals.
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label={`Tempolimit ${value}`}>
      <circle cx="50" cy="50" r="48" fill="#C8102E" />
      <circle cx="50" cy="50" r="36" fill="#fff" />
      <text
        x="50"
        y="65"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="44"
        fill="#000"
        letterSpacing="-2"
      >
        {value}
      </text>
    </svg>
  );
}

function RoundaboutSign() {
  // StVO Zeichen 215 — solid blue disc, three counter-clockwise white arrows.
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Kreisverkehr">
      <circle cx="50" cy="50" r="48" fill="#005CBF" />
      <g fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="butt">
        <path d="M50 24 A26 26 0 0 1 72.5 37" />
        <path d="M72.5 63 A26 26 0 0 1 50 76" />
        <path d="M27.5 37 A26 26 0 0 1 50 24" transform="rotate(120 50 50)" />
      </g>
      {/* Arrow heads */}
      <polygon points="72.5,28 79,40 65,38" fill="#fff" />
      <polygon points="55,76 41,76 50,86" fill="#fff" />
      <polygon points="22.5,40 35.5,38 28,28" fill="#fff" />
    </svg>
  );
}

function ChildrenSign() {
  // StVO Zeichen 136 — danger triangle, two silhouetted figures (running adult + child).
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Kinder">
      {/* Triangle — red border + white interior with thin black inner stroke */}
      <polygon points="50,5 95,88 5,88" fill="#C8102E" />
      <polygon points="50,16 86,82 14,82" fill="#fff" />

      {/* Running adult — leans forward, arm extended back */}
      <g fill="#000">
        <circle cx="44" cy="35" r="4.5" />
        {/* torso + leading arm */}
        <path d="M40 41 L48 42 L52 50 L48 52 L44 47 L42 56 L46 64 L42 72 L37 72 L40 62 L36 54 Z" />
        {/* trailing leg */}
        <path d="M42 56 L34 66 L31 64 L38 53 Z" />
        {/* trailing arm */}
        <path d="M40 43 L31 47 L29 45 L39 40 Z" />
      </g>

      {/* Following child — smaller, holding hand-position */}
      <g fill="#000">
        <circle cx="61" cy="45" r="3.6" />
        <path d="M58 49 L65 50 L67 56 L64 57 L62 53 L61 60 L64 67 L60 73 L56 73 L59 65 L56 58 Z" />
        <path d="M58 50 L52 52 L51 49 L57 48 Z" />
      </g>
    </svg>
  );
}

function PedestrianCrossingSign() {
  // StVO Zeichen 350 — blue square, white triangle, pedestrian silhouette
  // walking left-to-right over zebra stripes (officially: white inner triangle
  // with black pedestrian + black zebra under their feet).
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Fußgängerüberweg">
      <rect x="3" y="3" width="94" height="94" fill="#005CBF" />
      {/* Inner white triangle (rounded a touch) */}
      <polygon points="50,12 90,88 10,88" fill="#fff" />
      {/* Pedestrian — walking */}
      <g fill="#000">
        <circle cx="48" cy="32" r="5" />
        {/* body + bag-strap diagonal */}
        <path d="M44 38 L52 38 L56 48 L52 50 L48 44 L46 56 L52 67 L48 75 L43 75 L46 65 L42 52 Z" />
        {/* trailing leg behind */}
        <path d="M44 56 L38 68 L34 66 L40 53 Z" />
        {/* arm forward */}
        <path d="M52 39 L60 44 L58 47 L50 43 Z" />
      </g>
      {/* Zebra crossing stripes underfoot */}
      <g fill="#000">
        <rect x="32" y="80" width="6" height="6" />
        <rect x="42" y="80" width="6" height="6" />
        <rect x="52" y="80" width="6" height="6" />
        <rect x="62" y="80" width="6" height="6" />
      </g>
    </svg>
  );
}

function MandatoryRightSign() {
  // StVO Zeichen 209-20 — solid blue disc, thick white right-arrow.
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorgeschriebene Fahrtrichtung">
      <circle cx="50" cy="50" r="48" fill="#005CBF" />
      <path
        d="M22 44 L60 44 L60 30 L82 50 L60 70 L60 56 L22 56 Z"
        fill="#fff"
      />
    </svg>
  );
}

const map: Record<SignId, () => ReactElement> = {
  stop: StopSign,
  yield: YieldSign,
  priorityRoad: PriorityRoadSign,
  noEntry: NoEntrySign,
  speed30: () => <SpeedLimitSign value="30" />,
  speed50: () => <SpeedLimitSign value="50" />,
  roundabout: RoundaboutSign,
  children: ChildrenSign,
  pedestrianCrossing: PedestrianCrossingSign,
  mandatoryRight: MandatoryRightSign
};

export function TrafficSign({ id, className }: { id: SignId; className?: string }) {
  const Sign = map[id];
  return (
    <div
      className={
        'aspect-square w-full max-w-[140px] sm:max-w-[200px] md:max-w-[240px] mx-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] ' +
        (className ?? '')
      }
    >
      <Sign />
    </div>
  );
}
