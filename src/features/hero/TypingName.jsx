import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function TypingName({ text, className = "", delay = 0.3 }) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const chars = containerRef.current.querySelectorAll(".char");
      gsap.set(chars, { opacity: 0, y: 30 });
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.035,
        delay,
      });
    },
    { scope: containerRef, dependencies: [text, delay] }
  );

  return (
    <span ref={containerRef} className="inline-block">
      {text.split("").map((char, i) => (
        <span key={i} className={`char inline-block ${className}`}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}