import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function useEyeTracking(maxRadius = 12) {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);

  useEffect(() => {
    const pupil = pupilRef.current;
    const eye = eyeRef.current;
    if (!pupil || !eye) return;

    const xTo = gsap.quickTo(pupil, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(pupil, "y", { duration: 0.3, ease: "power3.out" });

    const handleMove = (e) => {
      const rect = eye.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(maxRadius, Math.hypot(dx, dy) / 8);
      xTo(Math.cos(angle) * distance);
      yTo(Math.sin(angle) * distance);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [maxRadius]);

  return { eyeRef, pupilRef };
}