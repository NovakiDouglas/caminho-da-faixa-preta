'use client';

import { useCharacterStore } from '@/hooks/stores/useCharacterStore';

export default function GroundPlane() {
  const setTargetPosition = useCharacterStore((state) => state.setTargetPosition);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0.05, 0]} // Slightly above base to catch clicks
      onClick={(e) => {
        e.stopPropagation();
        // Set target position for movement
        setTargetPosition([e.point.x, 0, e.point.z]);
      }}
    >
      <planeGeometry args={[20, 20]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}
