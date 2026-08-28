import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

/**
 * Cursor-driven perspective tilt.
 * Rotates a `transform-style: preserve-3d` wrapper based on pointer
 * position within the section. Children placed at different
 * translateZ depths automatically get parallax via CSS perspective.
 */
export function useHeroTilt(max = 10) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const rotateX = gsap.quickTo(stage, "rotationX", {
      duration: 0.8,
      ease: "power3.out",
    });
    const rotateY = gsap.quickTo(stage, "rotationY", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      const rect = section.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY(px * max);
      rotateX(-py * max);
    };

    const reset = () => {
      rotateX(0);
      rotateY(0);
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", reset);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", reset);
    };
  }, [max]);

  return { sectionRef, stageRef };
}