import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

const colors = ["#E6C16A", "#FFD662", "#DAB060", "#CE9F56", "#AA6C39"];

export default function DotGridBackground() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".floating-dot").forEach((dot) => {
        gsap.to(dot, {
          x: "random(-25, 25)",
          y: "random(-25, 25)",
          duration: gsap.utils.random(5, 9),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      gsap.to(".orbit-ring", {
        rotate: 360,
        duration: 90,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });

      gsap.utils.toArray(".hero-sphere").forEach((sphere, i) => {
        gsap.to(sphere, {
          y: "random(-18, 18)",
          duration: gsap.utils.random(6, 10),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* faint base grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #E6C16A 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      {/* denser dot patches near corners, masked to fade out */}
      <div
        className="absolute -top-16 -left-16 w-80 h-80 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #E6C16A 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #E6C16A 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(circle, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 75%)",
        }}
      />

      {/* large sphere — bottom left */}
      <div
        className="hero-sphere absolute -bottom-40 -left-32 w-[440px] h-[440px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #6b4a22 0%, #1c1408 55%, transparent 78%)",
          boxShadow:
            "inset -25px -25px 70px rgba(0,0,0,0.65), 0 0 120px rgba(230,193,106,0.08)",
          border: "1px solid rgba(230,193,106,0.15)",
        }}
      />

      {/* large sphere — right side */}
      <div
        className="hero-sphere absolute top-4 -right-28 w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 38% 28%, #7a5427 0%, #241708 55%, transparent 78%)",
          boxShadow:
            "inset -25px -25px 70px rgba(0,0,0,0.65), 0 0 120px rgba(230,193,106,0.1)",
          border: "1px solid rgba(230,193,106,0.2)",
        }}
      />

      {/* small satellite sphere */}
      <div
        className="hero-sphere absolute top-[58%] right-[10%] w-20 h-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #3a2a14 0%, #100c05 60%, transparent 80%)",
          border: "1px solid rgba(230,193,106,0.15)",
        }}
      />

      {/* orbit arcs */}
      <svg
        className="orbit-ring absolute -top-44 -left-44 w-[620px] h-[620px] opacity-25"
        viewBox="0 0 620 620"
      >
        <circle cx="310" cy="310" r="300" fill="none" stroke="#E6C16A" strokeWidth="1" />
      </svg>
      <svg
        className="orbit-ring absolute -bottom-56 -right-44 w-[720px] h-[720px] opacity-[0.18]"
        viewBox="0 0 720 720"
      >
        <circle cx="360" cy="360" r="350" fill="none" stroke="#E6C16A" strokeWidth="1" />
      </svg>

      {/* glowing floating particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="floating-dot absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            backgroundColor: colors[i % colors.length],
            opacity: 0.55,
            boxShadow: `0 0 8px ${colors[i % colors.length]}`,
          }}
        />
      ))}
    </div>
  );
}