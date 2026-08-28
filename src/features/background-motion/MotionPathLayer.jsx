import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const paths = [
  "M -100 100 Q 200 -50 500 150 T 1200 100 T 1800 300",
  "M -100 400 Q 300 600 700 400 T 1400 500 T 1900 300",
  "M -100 700 Q 400 500 800 750 T 1500 700 T 2000 600",
];

const colors = ["#E6C16A", "#FFD662", "#DAB060", "#CE9F56", "#AA6C39"];

export default function MotionPathLayer() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const dots = containerRef.current.querySelectorAll(".mp-dot");
      dots.forEach((dot, i) => {
        const path = paths[i % paths.length];
        gsap.to(dot, {
          motionPath: {
            path,
            align: "self",
            alignOrigin: [0.5, 0.5],
          },
          duration: gsap.utils.random(18, 30),
          repeat: -1,
          ease: "none",
          delay: i * 1.5,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30"
      aria-hidden="true"
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i}
            className="mp-dot"
            r={i % 3 === 0 ? 3 : 2}
            fill={colors[i % colors.length]}
          />
        ))}
      </svg>
    </div>
  );
}
