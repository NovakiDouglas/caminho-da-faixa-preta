'use client';

import { Html } from '@react-three/drei';

interface ScrollProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  label: string;
  icon: string;
}

function Scroll({ position, rotation, label, icon }: ScrollProps) {
    return (
        <group position={position} rotation={rotation}>
             <mesh rotation={[0, 0, Math.PI/2]} position={[0, 0.1, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
                <meshStandardMaterial color="#f0e68c" />
            </mesh>
            {/* Scroll ends/handles */}
            <mesh rotation={[0, 0, Math.PI/2]} position={[0.45, 0.1, 0]} castShadow>
                 <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
                 <meshStandardMaterial color="#8b4513" />
            </mesh>
             <mesh rotation={[0, 0, Math.PI/2]} position={[-0.45, 0.1, 0]} castShadow>
                 <cylinderGeometry args={[0.18, 0.18, 0.1, 16]} />
                 <meshStandardMaterial color="#8b4513" />
            </mesh>

             <Html position={[0, 0.5, 0]} center transform sprite distanceFactor={10}>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-2 rounded-xl text-[10px] w-12 h-12 flex flex-col items-center justify-center shadow-lg border border-white/20 backdrop-blur-sm">
                   <div className="text-sm font-bold">{icon}</div>
                </div>
                <div className="mt-1 bg-white/80 px-2 py-0.5 rounded text-[8px] font-bold text-gray-700 shadow-sm text-center w-max mx-auto">
                    {label}
                </div>
            </Html>
        </group>
    )
}

export default function Scrolls() {
  const items = [
    { position: [2, 0, 2], label: 'App Store', icon: 'A', rotation: [0, 1.2, 0] },
    { position: [0, 0, 4], label: 'Flutter', icon: 'F', rotation: [0, 2.5, 0] },
    { position: [-2, 0, 3], label: 'React', icon: 'R', rotation: [0, 0.5, 0] },
  ];
  return (
    <group>
        {items.map((item, i) => (
             <Scroll
                key={i}
                position={item.position as [number, number, number]}
                label={item.label}
                icon={item.icon}
                rotation={item.rotation as [number, number, number]}
             />
        ))}
    </group>
  )
}
