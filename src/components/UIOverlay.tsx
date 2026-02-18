'use client';

export default function UIOverlay() {
  return (
    <>
      {/* Night Mode Toggle Visual */}
      <div className="absolute top-8 right-8 flex gap-4 pointer-events-none z-10">
         <div className="bg-white/90 p-3 rounded-2xl shadow-sm pointer-events-auto backdrop-blur-md text-sm font-semibold text-gray-700 flex items-center gap-2 border border-white/50 cursor-pointer transition-transform hover:scale-105">
            Night Mode
            <div className="w-10 h-6 bg-gray-200 rounded-full relative transition-colors">
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform"></div>
            </div>
         </div>
      </div>

      {/* Controls Hint */}
       <div className="absolute bottom-8 left-8 text-gray-700 pointer-events-none p-4 bg-white/90 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm flex items-center gap-4 z-10">
        <div className="grid grid-cols-3 gap-1 w-16 text-center text-[10px] font-bold text-gray-500">
           <div></div><div className="border border-gray-400 rounded p-0.5 aspect-square flex items-center justify-center">W</div><div></div>
           <div className="border border-gray-400 rounded p-0.5 aspect-square flex items-center justify-center">A</div><div className="border border-gray-400 rounded p-0.5 aspect-square flex items-center justify-center">S</div><div className="border border-gray-400 rounded p-0.5 aspect-square flex items-center justify-center">D</div>
        </div>
        <div className="flex flex-col">
            <p className="font-semibold text-sm">Tap to Move</p>
            <p className="text-xs text-gray-500">Use mouse to rotate</p>
        </div>
      </div>
    </>
  );
}
