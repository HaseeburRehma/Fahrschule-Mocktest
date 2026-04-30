'use client';

import { Canvas } from '@react-three/fiber';
import { ContactShadows, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import { LicenceCard } from './LicenceCard';
import { ParticleField } from './ParticleField';

/**
 * Studio-style 3D stage. No floor pattern, no aggressive ambient glow,
 * no z-fighting effects. Just key light, soft fill, a faint green rim
 * from behind, and a soft contact shadow under the card.
 */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <PerspectiveCamera makeDefault fov={32} position={[0, 0.05, 5]} />

      {/* Studio lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[-3, 4, 5]} intensity={0.85} />
      {/* subtle green rim from behind */}
      <directionalLight position={[2, 1, -3]} intensity={0.18} color="#01FE21" />

      <Suspense fallback={null}>
        <LicenceCard />
        <ParticleField />
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.45}
          blur={3}
          far={3}
          resolution={512}
          color="#000000"
        />
      </Suspense>
    </Canvas>
  );
}

export default HeroScene;
