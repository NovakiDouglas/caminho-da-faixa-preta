'use client';

interface DummyProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function Dummy(props: DummyProps) {
  return (
    <group {...props}>
      {/* Base */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.4, 32]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
      </mesh>

      {/* Pole */}
      <mesh position={[0, 1.2, 0]} castShadow>
         <cylinderGeometry args={[0.1, 0.1, 2, 16]} />
         <meshStandardMaterial color="#333" />
      </mesh>

      {/* Torso */}
      <group position={[0, 2.2, 0]}>
        <mesh castShadow>
          <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
          <meshStandardMaterial color="#d2a679" /> {/* Skin color */}
        </mesh>

        {/* Simple Face/features */}
        <mesh position={[0, 0.5, 0.45]}>
             <sphereGeometry args={[0.05, 16, 16]} />
             <meshStandardMaterial color="#333" />
        </mesh>
      </group>
    </group>
  );
}
