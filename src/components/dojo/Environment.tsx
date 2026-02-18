'use client';

import BeltRack from './BeltRack';
import Mirror from './Mirror';
import Dummy from './Dummy';
import Scrolls from './Scrolls';

export default function Environment() {
  // Tatami grid configuration
  const gridSize = 4; // 4x4 grid
  const matSize = 3; // Each mat size
  const matHeight = 0.2;
  const gap = 0.04;

  const totalSize = gridSize * matSize + (gridSize - 1) * gap;
  const offset = totalSize / 2;

  // Colors
  const matColor = "#d6d6c2"; // Beige/Grey
  const matInnerColor = "#c8ccb0"; // Greenish tint
  const wallColor = "#f8f9fa";
  const woodColor = "#8b5e3c";

  return (
    <group position={[0, -1, 0]}>
        {/* Floor Group centered */}
      <group position={[-offset, 0, -offset]}>
        {Array.from({ length: gridSize }).map((_, x) =>
          Array.from({ length: gridSize }).map((_, z) => (
            <group key={`${x}-${z}`} position={[x * (matSize + gap) + matSize/2, 0, z * (matSize + gap) + matSize/2]}>
               {/* Main Mat Surface (Border) */}
              <mesh receiveShadow castShadow position={[0, 0, 0]}>
                <boxGeometry args={[matSize, matHeight, matSize]} />
                <meshStandardMaterial color={matColor} roughness={0.9} />
              </mesh>
               {/* Inner Greenish part */}
              <mesh position={[0, 0.01, 0]} receiveShadow>
                 <boxGeometry args={[matSize * 0.92, matHeight + 0.01, matSize * 0.92]} />
                 <meshStandardMaterial color={matInnerColor} roughness={0.8} />
              </mesh>
            </group>
          ))
        )}
      </group>

      {/* Walls */}
      {/* Left Wall (along Z axis) */}
      <mesh
        position={[-offset - 0.5, 6, 0]}
        receiveShadow
      >
        <boxGeometry args={[1, 12, totalSize + 2]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

      {/* Right Wall (along X axis) */}
      <mesh
        position={[0, 6, -offset - 0.5]}
        receiveShadow
      >
        <boxGeometry args={[totalSize + 2, 12, 1]} />
        <meshStandardMaterial color={wallColor} />
      </mesh>

       {/* Floor Base (wood under mats) */}
       <mesh position={[0, -0.3, 0]} receiveShadow>
         <boxGeometry args={[totalSize + 0.5, 0.4, totalSize + 0.5]} />
         <meshStandardMaterial color={woodColor} />
       </mesh>

       {/* Wall Trims (Baseboards) */}
       {/* Left Trim */}
       <mesh position={[-offset + 0.1, 0.5, 0]} receiveShadow>
         <boxGeometry args={[0.2, 1, totalSize]} />
         <meshStandardMaterial color={woodColor} />
       </mesh>
       {/* Right Trim */}
        <mesh position={[0, 0.5, -offset + 0.1]} receiveShadow>
         <boxGeometry args={[totalSize, 1, 0.2]} />
         <meshStandardMaterial color={woodColor} />
       </mesh>

       {/* Decor Items */}
       <BeltRack position={[-offset + 0.6, 3, 0]} rotation={[0, Math.PI / 2, 0]} />
       <Mirror position={[0, 3, -offset + 0.6]} rotation={[0, 0, 0]} />
       <Dummy position={[offset - 2, 0, -offset + 2]} rotation={[0, -Math.PI / 4, 0]} />
       <Scrolls />

    </group>
  );
}
