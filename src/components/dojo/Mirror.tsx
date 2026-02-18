'use client';

import { MeshReflectorMaterial } from '@react-three/drei';

interface MirrorProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function Mirror(props: MirrorProps) {
  return (
    <group {...props}>
      {/* Frame */}
      <mesh position={[0, 0, -0.05]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 5.2, 0.1]} />
        <meshStandardMaterial color="#8b5a2b" roughness={0.7} />
      </mesh>

      {/* Mirror Surface */}
      <mesh receiveShadow>
        <planeGeometry args={[3, 5]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#d0d0d0"
          metalness={0.9}
          mirror={0.7}
        />
      </mesh>
    </group>
  );
}
