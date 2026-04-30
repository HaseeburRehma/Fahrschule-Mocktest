import type { ReactElement } from 'react';
import type { SignId } from '@/data/types';

/**
 * Hand-drawn SVG renditions of standard German road signs (StVO).
 * They are intentionally simple, accurate-enough for study, and embed-only —
 * no external assets required. Rendered at the size of the wrapping <div>.
 */
function StopSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Stop">
      <polygon
        points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30"
        fill="#D52B1E"
        stroke="#fff"
        strokeWidth="4"
      />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#fff"
        letterSpacing="2"
      >
        STOP
      </text>
    </svg>
  );
}

function YieldSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorfahrt gewähren">
      <polygon points="50,90 6,12 94,12" fill="#fff" stroke="#D52B1E" strokeWidth="10" />
    </svg>
  );
}

function PriorityRoadSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorfahrtstraße">
      <polygon points="50,5 95,50 50,95 5,50" fill="#fff" stroke="#000" strokeWidth="3" />
      <polygon points="50,18 82,50 50,82 18,50" fill="#FFCB05" />
    </svg>
  );
}

function NoEntrySign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Verbot der Einfahrt">
      <circle cx="50" cy="50" r="44" fill="#D52B1E" stroke="#fff" strokeWidth="4" />
      <rect x="22" y="44" width="56" height="12" fill="#fff" />
    </svg>
  );
}

function SpeedLimitSign({ value }: { value: string }) {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label={`Tempolimit ${value}`}>
      <circle cx="50" cy="50" r="44" fill="#fff" stroke="#D52B1E" strokeWidth="10" />
      <text
        x="50"
        y="64"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="900"
        fontSize="42"
        fill="#000"
      >
        {value}
      </text>
    </svg>
  );
}

function RoundaboutSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Kreisverkehr">
      <circle cx="50" cy="50" r="44" fill="#005CBF" />
      <g fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round">
        <path d="M50 22 A28 28 0 0 1 78 50" />
        <path d="M78 50 A28 28 0 0 1 50 78" />
        <path d="M50 78 A28 28 0 0 1 22 50" />
      </g>
      <polygon points="22,50 14,42 14,58" fill="#fff" />
      <polygon points="50,22 42,30 58,30" fill="#fff" />
      <polygon points="78,50 86,42 86,58" fill="#fff" />
    </svg>
  );
}

function ChildrenSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Kinder">
      <polygon points="50,8 92,86 8,86" fill="#fff" stroke="#D52B1E" strokeWidth="6" />
      {/* Simple two-figure silhouette */}
      <circle cx="40" cy="46" r="5" fill="#000" />
      <path d="M35 52 L35 70 L40 70 L40 60 L42 60 L42 70 L47 70 L47 52 Z" fill="#000" />
      <circle cx="60" cy="50" r="4" fill="#000" />
      <path d="M56 56 L56 72 L60 72 L60 64 L62 64 L62 72 L66 72 L66 56 Z" fill="#000" />
    </svg>
  );
}

function PedestrianCrossingSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Fußgängerüberweg">
      <rect x="6" y="6" width="88" height="88" fill="#005CBF" />
      <polygon points="50,18 84,52 78,52 78,82 60,82 60,64 40,64 40,82 22,82 22,52 16,52" fill="#fff" />
      <g stroke="#000" strokeWidth="2">
        <line x1="35" y1="74" x2="35" y2="82" />
      </g>
    </svg>
  );
}

function MandatoryRightSign() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Vorgeschriebene Fahrtrichtung">
      <circle cx="50" cy="50" r="44" fill="#005CBF" />
      <path d="M28 50 L62 50 L62 36 L78 56 L62 76 L62 62 L28 62 Z" fill="#fff" />
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
        'aspect-square w-full max-w-[260px] mx-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] ' +
        (className ?? '')
      }
    >
      <Sign />
    </div>
  );
}
