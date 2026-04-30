'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Floating EU-style driver's licence card with a hover/tap flip that
 * reveals a 3D Mercedes-style steering wheel on the back.
 *
 *  - Front + back are two coplanar planes inside one group.
 *  - The whole group's rotation.y is damped toward a target (0 or π)
 *    using THREE.MathUtils.damp — no stuck states, no flicker, no z-fight.
 *  - The steering wheel sits behind the back face in local Z, so it's
 *    occluded by the front while the card is unflipped, then comes into
 *    view in front of the back face after the flip.
 *  - Hover triggers the flip on devices that support hover; touch
 *    devices toggle on tap.
 *  - Respects prefers-reduced-motion (no float, no idle sway, no flip).
 *  - Cleans up canvas textures on unmount to prevent leaks.
 */

// ─────────────────────────────────────────────────────────────────────────
// Card front — sharper EU licence
// ─────────────────────────────────────────────────────────────────────────
function makeFrontTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 800;
  const ctx = canvas.getContext('2d')!;

  // Body — soft cream paper
  const bg = ctx.createLinearGradient(0, 0, 0, 800);
  bg.addColorStop(0, '#f7f5ee');
  bg.addColorStop(1, '#dedbd0');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1280, 800);

  // Subtle hologram bands
  ctx.save();
  ctx.globalAlpha = 0.05;
  for (let i = 0; i < 3; i++) {
    const grad = ctx.createLinearGradient(0, 0, 1280, 800);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.5, '#01FE21');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(i * 50 - 200, 0, 1280, 800);
  }
  ctx.restore();

  // EU header band
  ctx.fillStyle = '#003399';
  ctx.fillRect(0, 0, 1280, 110);
  // EU stars
  ctx.fillStyle = '#FFCC00';
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    const x = 70 + Math.cos(a) * 32;
    const y = 55 + Math.sin(a) * 26;
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#fff';
  ctx.font = '600 26px "Times New Roman", serif';
  ctx.fillText('BUNDESREPUBLIK DEUTSCHLAND', 144, 50);
  ctx.font = '500 16px Arial, sans-serif';
  ctx.fillText('FÜHRERSCHEIN  ·  PERMIS DE CONDUIRE  ·  DRIVING LICENCE', 144, 82);

  // Photo placeholder
  const px = 56;
  const py = 168;
  const pw = 248;
  const ph = 320;
  // soft drop
  ctx.fillStyle = 'rgba(0,0,0,0.06)';
  ctx.fillRect(px + 4, py + 6, pw, ph);
  ctx.fillStyle = '#c2c0b3';
  ctx.fillRect(px, py, pw, ph);
  // silhouette
  ctx.fillStyle = '#8a877c';
  ctx.beginPath();
  ctx.arc(px + pw / 2, py + 130, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(px + pw / 2, py + 280, 92, Math.PI, 0);
  ctx.fill();
  // hologram sheen
  const ph2 = ctx.createLinearGradient(px, py, px + pw, py + ph);
  ph2.addColorStop(0, 'rgba(255,255,255,0)');
  ph2.addColorStop(0.45, 'rgba(255,255,255,0.32)');
  ph2.addColorStop(0.55, 'rgba(255,255,255,0.05)');
  ph2.addColorStop(1, 'rgba(1,254,33,0.18)');
  ctx.fillStyle = ph2;
  ctx.fillRect(px, py, pw, ph);

  // Right column
  ctx.fillStyle = '#1a1a1a';
  ctx.font = '600 18px Arial, sans-serif';
  const labelX = 360;
  let y = 200;
  const row = (label: string, value: string) => {
    ctx.fillStyle = '#888';
    ctx.font = '500 11px Arial, sans-serif';
    ctx.fillText(label, labelX, y);
    ctx.fillStyle = '#1a1a1a';
    ctx.font = '600 18px Arial, sans-serif';
    ctx.fillText(value, labelX, y + 22);
    y += 56;
  };
  row('1.', 'MUSTERMANN');
  row('2.', 'Max');
  row('3.', '01.01.2000  ·  Düsseldorf');
  row('4a/b.', '01.01.2026  ·  31.12.2040');

  // Categories — green badges
  const cats = ['A', 'B', 'AM', 'L'];
  const bx = labelX;
  const by = 480;
  cats.forEach((c, i) => {
    ctx.fillStyle = '#01FE21';
    ctx.fillRect(bx + i * 88, by, 76, 64);
    ctx.fillStyle = '#000';
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(c, bx + i * 88 + 38, by + 44);
    ctx.textAlign = 'left';
  });

  // MRZ-style bottom (machine-readable mock)
  ctx.fillStyle = '#aaa';
  ctx.font = '500 14px "Courier New", monospace';
  ctx.fillText(
    'D<<MUSTERMANN<<MAX<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',
    56,
    640
  );
  ctx.fillText('< 0123456789D<<00010109F40123101<<<<<<<<<<<<<<<<', 56, 666);

  // Brand strip — keep slim
  ctx.fillStyle = '#01FE21';
  ctx.fillRect(0, 760, 1280, 4);
  ctx.fillStyle = 'rgba(20,20,20,0.85)';
  ctx.font = '600 14px Arial, sans-serif';
  ctx.fillText('FAHRSCHULE ABGEFAHRN  ·  DÜSSELDORF', 56, 790);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ─────────────────────────────────────────────────────────────────────────
// Card back — minimal so the steering wheel reads cleanly on top
// ─────────────────────────────────────────────────────────────────────────
function makeBackTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1280;
  canvas.height = 800;
  const ctx = canvas.getContext('2d')!;

  // Subtle gradient
  const bg = ctx.createRadialGradient(640, 400, 80, 640, 400, 800);
  bg.addColorStop(0, '#101410');
  bg.addColorStop(1, '#000000');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1280, 800);

  // Faint dashboard horizontal lines
  ctx.strokeStyle = 'rgba(255,255,255,0.04)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    const y = 200 + i * 60;
    ctx.beginPath();
    ctx.moveTo(80, y);
    ctx.lineTo(1200, y);
    ctx.stroke();
  }

  // Brand mark bottom-left
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = 'bold 14px Arial, sans-serif';
  ctx.fillText('FAHRSCHULE ABGEFAHRN', 56, 770);
  ctx.fillStyle = 'rgba(1,254,33,0.7)';
  ctx.font = '500 11px Arial, sans-serif';
  ctx.fillText('MIT POWER ZUM LAPPEN', 56, 790);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ─────────────────────────────────────────────────────────────────────────
// Mercedes 3-pointed star — built from a torus + 3 radial cylinders
// ─────────────────────────────────────────────────────────────────────────
function MercedesStar() {
  const angles = useMemo(
    () => [Math.PI / 2, Math.PI / 2 + (2 * Math.PI) / 3, Math.PI / 2 + (4 * Math.PI) / 3],
    []
  );
  return (
    <group>
      {/* Outer thin ring */}
      <mesh>
        <torusGeometry args={[0.22, 0.014, 12, 48]} />
        <meshStandardMaterial color="#dadada" metalness={0.95} roughness={0.18} />
      </mesh>
      {/* Three radial bars from centre to ring */}
      {angles.map((a, i) => (
        <mesh
          key={i}
          rotation={[0, 0, a - Math.PI / 2]}
          position={[Math.cos(a) * 0.108, Math.sin(a) * 0.108, 0.005]}
        >
          <cylinderGeometry args={[0.013, 0.013, 0.21, 14]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.95} roughness={0.15} />
        </mesh>
      ))}
      {/* Centre nub */}
      <mesh position={[0, 0, 0.012]}>
        <cylinderGeometry args={[0.034, 0.034, 0.014, 24]} />
        <meshStandardMaterial color="#bdbdbd" metalness={0.9} roughness={0.25} />
      </mesh>
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Steering wheel — outer rim + 3 spokes + Mercedes star, rotates slowly
// ─────────────────────────────────────────────────────────────────────────
function SteeringWheel({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Group>(null);
  // 3 spokes — Mercedes layout: top, lower-right, lower-left
  const spokeAngles = useMemo(
    () => [Math.PI / 2, -Math.PI / 6, -Math.PI * (5 / 6)],
    []
  );

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    // Full rotation every ~7 seconds
    ref.current.rotation.z += delta * ((Math.PI * 2) / 7);
  });

  return (
    <group ref={ref}>
      {/* Outer rim */}
      <mesh>
        <torusGeometry args={[1.0, 0.085, 18, 80]} />
        <meshStandardMaterial color="#1d1d1d" metalness={0.85} roughness={0.32} />
      </mesh>
      {/* Inner rim highlight */}
      <mesh>
        <torusGeometry args={[0.95, 0.018, 8, 64]} />
        <meshStandardMaterial color="#444" metalness={0.95} roughness={0.18} />
      </mesh>
      {/* Hub disc */}
      <mesh>
        <cylinderGeometry args={[0.36, 0.36, 0.06, 32]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.45} />
      </mesh>
      {/* Hub bezel */}
      <mesh position={[0, 0, 0.005]}>
        <torusGeometry args={[0.36, 0.012, 10, 48]} />
        <meshStandardMaterial color="#3a3a3a" metalness={0.92} roughness={0.22} />
      </mesh>
      {/* Spokes — boxes radiating from hub to rim */}
      {spokeAngles.map((angle, i) => (
        <mesh
          key={i}
          rotation={[0, 0, angle]}
          position={[Math.cos(angle) * 0.66, Math.sin(angle) * 0.66, 0]}
        >
          <boxGeometry args={[0.62, 0.07, 0.045]} />
          <meshStandardMaterial color="#1d1d1d" metalness={0.8} roughness={0.35} />
        </mesh>
      ))}
      {/* Centred Mercedes star — slightly raised to catch the key light */}
      <group position={[0, 0, 0.045]}>
        <MercedesStar />
      </group>
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// The card itself
// ─────────────────────────────────────────────────────────────────────────
export function LicenceCard() {
  const groupRef = useRef<THREE.Group>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reduced, setReduced] = useState(false);

  const frontTex = useMemo(() => makeFrontTexture(), []);
  const backTex = useMemo(() => makeBackTexture(), []);
  const { mouse } = useThree();

  // Detect prefers-reduced-motion + touch capability up front
  const canHover = useRef(true);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    canHover.current = window.matchMedia('(hover: hover)').matches;
  }, []);

  // Dispose textures on unmount
  useEffect(
    () => () => {
      frontTex.dispose();
      backTex.dispose();
    },
    [frontTex, backTex]
  );

  useFrame((state, delta) => {
    const g = groupRef.current;
    if (!g) return;

    if (reduced) {
      // Static pose with mouse parallax only
      g.rotation.y = isFlipped ? Math.PI : 0;
      return;
    }

    // Gentle Y-axis bob (1–2 px range relative to the card height)
    g.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;

    // Idle sway — only when not flipped, very subtle
    const sway = isFlipped ? 0 : Math.sin(state.clock.elapsedTime * 0.4) * 0.06;
    const targetY = (isFlipped ? Math.PI : 0) + sway;

    // Damped flip — naturally smooth, ignores rapid hover toggles
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 5, delta);

    // Mouse parallax — X tilt, very subtle
    const targetX = -mouse.y * 0.1;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 4, delta);
  });

  return (
    <Float
      speed={reduced ? 0 : 1}
      rotationIntensity={0}
      floatIntensity={reduced ? 0 : 0.18}
    >
      <group
        ref={groupRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          if (canHover.current) {
            setIsFlipped(true);
            if (typeof document !== 'undefined') document.body.style.cursor = 'pointer';
          }
        }}
        onPointerOut={() => {
          if (canHover.current) {
            setIsFlipped(false);
            if (typeof document !== 'undefined') document.body.style.cursor = '';
          }
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!canHover.current) setIsFlipped((v) => !v);
        }}
      >
        {/* Card body — thin rounded box gives subtle edge geometry */}
        <RoundedBox args={[3.2, 2, 0.04]} radius={0.07} smoothness={4}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.3} roughness={0.55} />
        </RoundedBox>

        {/* Front face plane */}
        <mesh position={[0, 0, 0.022]}>
          <planeGeometry args={[3.18, 1.98]} />
          <meshStandardMaterial map={frontTex} metalness={0.4} roughness={0.42} />
        </mesh>

        {/* Back face plane — flipped 180° on Y so its front faces -Z */}
        <mesh position={[0, 0, -0.022]} rotation={[0, Math.PI, 0]}>
          <planeGeometry args={[3.18, 1.98]} />
          <meshStandardMaterial map={backTex} metalness={0.5} roughness={0.45} />
        </mesh>

        {/* Steering wheel — sits behind the back face in local Z, so the
            front face occludes it while unflipped. After the group flips
            180° Y, the wheel rotates into world +Z, in front of the back. */}
        <group position={[0, 0, -0.07]} rotation={[0, Math.PI, 0]} scale={0.62}>
          <SteeringWheel reduced={reduced} />
        </group>
      </group>
    </Float>
  );
}
