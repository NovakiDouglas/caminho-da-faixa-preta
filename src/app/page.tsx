'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function DojoPage() {
  return (
    <main className="h-screen w-full bg-gray-950 relative">
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <mesh position={[0, -0.1, 0]} receiveShadow>
          <boxGeometry args={[10, 0.2, 10]} />
          <meshStandardMaterial color="#f0e68c" />
        </mesh>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <OrbitControls />
        <gridHelper args={[20, 20]} />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white pointer-events-none p-4 bg-black/50 rounded">
        <h1 className="text-2xl font-bold">O Caminho da Faixa Preta</h1>
        <p>Use o mouse para rotacionar o Dojo.</p>
      </div>
    </main>
  );
}
