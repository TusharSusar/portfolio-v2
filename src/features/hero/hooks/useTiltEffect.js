import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export function useTiltEffect(maxTilt = 12) {
  const ref = useRef(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "rotateY", {
      duration: 0.6,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(el, "rotateX", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      xTo(px * maxTilt * 2);
      yTo(-py * maxTilt * 2);
    };

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return ref;
}