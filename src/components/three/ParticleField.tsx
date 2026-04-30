'use client';

import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Studio-style ambient particles — five soft green motes drifting upward
 * very slowly. No blinking, no opacity flicker; just gentle motion to
 * suggest the air around the product without adding visual noise.
 */
export function ParticleField({ count = 5 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Spread loosely behind/around the card, kept off-axis
      pos[i * 3 + 0] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      pos[i * 3 + 2] = -0.4 - Math.random() * 1.4;
      vel[i] = 0.0008 + Math.random() * 0.0012; // very slow
    }
    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame(() => {
    const pts = pointsRef.current;
    if (!pts) return;
    const arr = pts.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += velocities[i];
      if (arr[i * 3 + 1] > 1.8) {
        arr[i * 3 + 1] = -1.8;
        arr[i * 3] = (Math.random() - 0.5) * 5;
      }
    }
    pts.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#01FE21"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
