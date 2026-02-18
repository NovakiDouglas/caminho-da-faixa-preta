'use client';

import { Html } from '@react-three/drei';

interface BeltRackProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export default function BeltRack(props: BeltRackProps) {
  const belts = [
    { color: '#ffffff', label: 'React Native', sub: 'Faixa Branca' },
    { color: '#1e90ff', label: 'Node.js', sub: 'Faixa Azul' },
    { color: '#800080', label: 'Flutter', sub: 'Faixa Roxa' },
    { color: '#8b4513', label: 'Python', sub: 'Faixa Marrom' },
    { color: '#000000', label: 'Architecture', sub: 'Faixa Preta' },
  ];

  return (
    <group {...props}>
      {/* Wooden Board */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 5, 3]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* Belts */}
      {belts.map((belt, i) => (
        <group key={i} position={[0.15, 1.8 - i * 0.8, 0]}>
          {/* Belt knot/folded visual representation */}
          <group rotation={[0, 0, Math.PI / 2]}>
             {/* Main part */}
             <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.8, 0.15, 2.2]} />
                <meshStandardMaterial color={belt.color} />
             </mesh>
             {/* Knot */}
             <mesh position={[0, 0.1, 0]}>
                <boxGeometry args={[0.3, 0.15, 0.6]} />
                <meshStandardMaterial color={belt.color} />
             </mesh>
          </group>

          {/* Label (Tooltip style) */}
          <Html position={[0.5, 0, 0]} distanceFactor={15} transform occlude>
            <div className="bg-white/90 p-3 rounded-xl shadow-lg text-xs w-32 backdrop-blur-sm pointer-events-none select-none border border-white/50 text-left">
              <strong className="block text-gray-800 font-bold">{belt.label}</strong>
              <span className="text-gray-500 text-[10px] uppercase tracking-wide">{belt.sub}</span>
            </div>
          </Html>
        </group>
      ))}
    </group>
  );
}
