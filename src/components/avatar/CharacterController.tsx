'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group } from 'three';
import Character from './Character';
import { useCharacterStore } from '@/hooks/stores/useCharacterStore';

export default function CharacterController() {
  const position = useCharacterStore((state) => state.position);
  const targetPosition = useCharacterStore((state) => state.targetPosition);
  const isMoving = useCharacterStore((state) => state.isMoving);
  const setPosition = useCharacterStore((state) => state.setPosition);
  const stopMoving = useCharacterStore((state) => state.stopMoving);

  const group = useRef<Group>(null);
  const currentPos = useRef(new Vector3(0, 0, 0));

  useEffect(() => {
      // Initialize position from store
      if (group.current) {
          currentPos.current.set(position[0], position[1], position[2]);
          group.current.position.copy(currentPos.current);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    if (isMoving && targetPosition) {
       const target = new Vector3(targetPosition[0], position[1], targetPosition[2]); // Keep original Y

       const distance = currentPos.current.distanceTo(target);

       if (distance < 0.1) {
         // Arrived
         stopMoving();
         currentPos.current.copy(target);
         group.current.position.copy(currentPos.current);
         setPosition([target.x, target.y, target.z]);
       } else {
         // Move
         const speed = 5 * delta;
         // Ensure we don't overshoot
         const moveStep = speed > distance ? distance : speed;

         const direction = target.clone().sub(currentPos.current).normalize();
         currentPos.current.add(direction.multiplyScalar(moveStep));

         group.current.position.copy(currentPos.current);
         // Rotate to face direction
         group.current.lookAt(target.x, group.current.position.y, target.z);
       }
    }
  });

  return <Character ref={group} />;
}
