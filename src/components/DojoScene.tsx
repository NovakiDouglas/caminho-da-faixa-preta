'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface DojoSceneProps {
  children?: React.ReactNode;
}

export default function DojoScene({ children }: DojoSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      className="w-full h-full"
    >
      {/* Orthographic Camera for Isometric View */}
      <OrthographicCamera
        makeDefault
        position={[20, 20, 20]}
        zoom={40}
        near={0.1}
        far={1000}
        onUpdate={c => c.lookAt(0, 0, 0)}
      />

      <color attach="background" args={['#f0f2f5']} /> {/* Light/Soft background */}

      {/* Soft Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[10, 20, 5]}
        intensity={1.0}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      <hemisphereLight intensity={0.3} groundColor="#f0f2f5" />

      <Suspense fallback={null}>
        {children}
      </Suspense>

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
