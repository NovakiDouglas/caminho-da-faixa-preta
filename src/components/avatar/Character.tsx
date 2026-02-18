'use client';

import { forwardRef } from 'react';
import { Group } from 'three';

interface CharacterProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  [key: string]: unknown;
}

const Character = forwardRef<Group, CharacterProps>((props, ref) => {
  return (
    <group ref={ref} {...props}>
      {/* Head */}
      <mesh position={[0, 1.4, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#ffdbac" /> {/* Skin */}
      </mesh>
       {/* Hair (Simple cap) */}
      <mesh position={[0, 1.5, -0.05]} castShadow rotation={[-0.2, 0, 0]}>
        <sphereGeometry args={[0.37, 32, 32, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
        <meshStandardMaterial color="#4a3b2a" /> {/* Brown Hair */}
      </mesh>

      {/* Body (Gi Top) */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.35, 0.8, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Belt */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI/2, 0, 0]} castShadow>
        <torusGeometry args={[0.28, 0.05, 16, 100]} />
        <meshStandardMaterial color="#1e90ff" /> {/* Blue Belt */}
      </mesh>
      {/* Knot */}
      <mesh position={[0, 0.5, 0.3]} rotation={[0.2, 0, 0]} castShadow>
         <boxGeometry args={[0.2, 0.1, 0.1]} />
         <meshStandardMaterial color="#1e90ff" />
      </mesh>

      {/* Legs (Gi Pants) */}
      <group position={[0, 0.4, 0]}>
        {/* Left Leg */}
        <mesh position={[-0.15, -0.4, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.15, 0.8, 16]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>
         {/* Right Leg */}
        <mesh position={[0.15, -0.4, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.15, 0.8, 16]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

       {/* Arms */}
       <group position={[0, 1.1, 0]}>
          {/* Left Arm */}
          <mesh position={[-0.35, -0.3, 0]} rotation={[0, 0, 0.3]} castShadow>
             <capsuleGeometry args={[0.09, 0.7, 4, 16]} />
             <meshStandardMaterial color="#ffffff" />
          </mesh>
          {/* Left Hand */}
           <mesh position={[-0.45, -0.7, 0]} castShadow>
             <sphereGeometry args={[0.09, 16, 16]} />
             <meshStandardMaterial color="#ffdbac" />
          </mesh>

           {/* Right Arm */}
          <mesh position={[0.35, -0.3, 0]} rotation={[0, 0, -0.3]} castShadow>
             <capsuleGeometry args={[0.09, 0.7, 4, 16]} />
             <meshStandardMaterial color="#ffffff" />
          </mesh>
           {/* Right Hand */}
           <mesh position={[0.45, -0.7, 0]} castShadow>
             <sphereGeometry args={[0.09, 16, 16]} />
             <meshStandardMaterial color="#ffdbac" />
          </mesh>
       </group>

       {/* Face features (Eyes) */}
       <group position={[0, 1.4, 0.3]}>
           <mesh position={[-0.1, 0.05, 0]}>
               <sphereGeometry args={[0.04, 16, 16]} />
               <meshStandardMaterial color="#000" />
           </mesh>
            <mesh position={[0.1, 0.05, 0]}>
               <sphereGeometry args={[0.04, 16, 16]} />
               <meshStandardMaterial color="#000" />
           </mesh>
       </group>

    </group>
  );
});

Character.displayName = 'Character';
export default Character;
