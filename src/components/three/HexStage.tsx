'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * A faint hex-pattern floor that sits behind/under the licence card —
 * mirrors the honeycomb pattern from the Fahrschule Abgefahrn brand wraps.
 *
 * Built from a CanvasTexture so we don't ship a PNG and so we can tint
 * the strokes brand-green without coupling to an external asset.
 */
function makeHexTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext('2d')!;

  // Clear
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = 'rgba(1, 254, 33, 0.45)';
  ctx.lineWidth = 1.2;

  const r = 36;
  const w = Math.sqrt(3) * r;
  const h = 1.5 * r;

  const hex = (cx: number, cy: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  };

  for (let row = -1; row < 10; row++) {
    for (let col = -1; col < 10; col++) {
      const cx = col * w + (row % 2 ? w / 2 : 0);
      const cy = row * h;
      hex(cx, cy);
    }
  }

  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2.4, 2.4);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function HexStage() {
  const tex = useMemo(() => makeHexTexture(), []);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, -0.5]} receiveShadow>
      <planeGeometry args={[14, 14]} />
      <meshStandardMaterial
        map={tex}
        transparent
        opacity={0.55}
        depthWrite={false}
        side={THREE.DoubleSide}
        emissive="#01FE21"
        emissiveIntensity={0.06}
      />
    </mesh>
  );
}
