import { create } from 'zustand';

interface CharacterState {
  position: [number, number, number];
  targetPosition: [number, number, number] | null;
  isMoving: boolean;
  setTargetPosition: (pos: [number, number, number]) => void;
  setPosition: (pos: [number, number, number]) => void;
  stopMoving: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  position: [0, 0, 0],
  targetPosition: null,
  isMoving: false,
  setTargetPosition: (pos) => set({ targetPosition: pos, isMoving: true }),
  setPosition: (pos) => set({ position: pos }),
  stopMoving: () => set({ isMoving: false, targetPosition: null }),
}));
