import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const colors = ["#E6C16A", "#FFD662", "#DAB060", "#CE9F56", "#AA6C39"];

export default function DotGridBackground() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const dots = containerRef.current.querySelectorAll(".floating-dot");
      dots.forEach((dot) => {
        gsap.to(dot, {
          x: "random(-40, 40)",
          y: "random(-40, 40)",
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E6C16A 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="floating-dot absolute rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${4 + Math.random() * 6}px`,
            height: `${4 + Math.random() * 6}px`,
            backgroundColor: colors[i % colors.length],
            opacity: 0.25,
          }}
        />
      ))}
    </div>
  );
}