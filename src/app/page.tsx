'use client';

import DojoScene from '@/components/DojoScene';
import Environment from '@/components/dojo/Environment';
import CharacterController from '@/components/avatar/CharacterController';
import GroundPlane from '@/components/dojo/GroundPlane';
import Zones from '@/components/dojo/Zones';
import UIOverlay from '@/components/UIOverlay';

export default function DojoPage() {
  return (
    <main className="h-screen w-full relative bg-[#f0f2f5] overflow-hidden">
      <DojoScene>
        <Environment />
        <GroundPlane />
        <Zones />
        <CharacterController />
      </DojoScene>

      <UIOverlay />
    </main>
  );
}
