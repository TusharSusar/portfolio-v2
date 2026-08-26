import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function TypingName({ text }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const chars = containerRef.current.querySelectorAll(".char");
      gsap.set(chars, { opacity: 0, y: 40, rotateX: -90 });
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.04,
        delay: 0.3,
      });
    },
    { scope: containerRef }
  );

  return (
    <h1
      ref={containerRef}
      className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight text-foreground"
      style={{ perspective: "800px" }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}