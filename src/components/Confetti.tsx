'use client';

import { useEffect, useState } from 'react';

interface Piece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  delay: number;
  duration: number;
}

const COLORS = ['#01FE21', '#ffffff', '#01FE21', '#7FFF92'];

/**
 * Lightweight CSS-only confetti — fires once on mount.
 * No dependency on canvas-confetti to keep the bundle slim.
 */
export function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!active) return;
    const items: Piece[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 30,
      rotation: Math.random() * 360,
      scale: 0.6 + Math.random() * 0.9,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.6,
      duration: 1.6 + Math.random() * 1.4
    }));
    setPieces(items);
    const t = setTimeout(() => setPieces([]), 4000);
    return () => clearTimeout(t);
  }, [active]);

  if (!active || pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`
          }}
          className="absolute w-2 h-3 rounded-sm opacity-90 confetti-piece"
        />
      ))}
      <style jsx>{`
        .confetti-piece {
          animation-name: fall;
          animation-timing-function: cubic-bezier(0.2, 0.4, 0.4, 1);
          animation-fill-mode: forwards;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
