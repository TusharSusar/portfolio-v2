import { useEyeTracking } from "./useEyeTracking";

export default function Eye() {
  const { eyeRef, pupilRef } = useEyeTracking(14);

  return (
    <div
      ref={eyeRef}
      className="w-24 h-16 sm:w-28 sm:h-20 rounded-full bg-[#f5f0e6] border-4 border-primary flex items-center justify-center overflow-hidden"
    >
      <div ref={pupilRef} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black" />
    </div>
  );
}