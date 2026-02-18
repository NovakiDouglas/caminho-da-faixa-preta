'use client';

import { useState } from 'react';
import { useCharacterStore } from '@/hooks/stores/useCharacterStore';
import { useRouter } from 'next/navigation';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

export default function Zones() {
  const router = useRouter();
  const position = useCharacterStore((state) => state.position);
  const setTargetPosition = useCharacterStore((state) => state.setTargetPosition);

  const [isNavigating, setIsNavigating] = useState(false);

  const zones = [
    { label: 'Projetos', position: [-3, 0, 3], route: '/projects', color: '#ffd700' },
    { label: 'Sobre Mim', position: [3, 0, 0], route: '/about', color: '#00ced1' },
    { label: 'Contato', position: [0, 0, 5], route: '/contact', color: '#ff69b4' },
  ];

  useFrame(() => {
    if (isNavigating) return;

    const currentPos = new Vector3(position[0], position[1], position[2]);

    for (const zone of zones) {
        const zonePos = new Vector3(zone.position[0], zone.position[1], zone.position[2]);
        if (currentPos.distanceTo(zonePos) < 1.2) {
            // Navigate
            setIsNavigating(true);
            router.push(zone.route);
            break;
        }
    }
  });

  return (
    <group>
      {zones.map((zone, i) => (
        <group
            key={i}
            position={zone.position as [number, number, number]}
            onClick={(e) => {
                e.stopPropagation();
                setTargetPosition(zone.position as [number, number, number]);
            }}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
           {/* Glowing Base */}
           <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.02, 0]}>
             <planeGeometry args={[1.8, 1.8]} />
             <meshBasicMaterial color={zone.color} transparent opacity={0.2} depthWrite={false} />
           </mesh>
           <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0.03, 0]}>
             <ringGeometry args={[0.8, 0.9, 32]} />
             <meshBasicMaterial color={zone.color} toneMapped={false} />
           </mesh>

           {/* Label */}
           <Text
             position={[0, 1.5, 0]}
             fontSize={0.4}
             color="white"
             anchorX="center"
             anchorY="middle"
             outlineWidth={0.05}
             outlineColor={zone.color}
           >
             {zone.label}
           </Text>
        </group>
      ))}
    </group>
  );
}
