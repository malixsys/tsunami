'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ModelAnimator } from '@/components/ModelAnimator';

export const MainCanvas = () => {
  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [0, 5, 10], rotation: [-0.25, 0, 0], fov: 45, zoom: 2.5 }}
    >
      <ModelAnimator />
      <OrbitControls />
    </Canvas>
  );
};
