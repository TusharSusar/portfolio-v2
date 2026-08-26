import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Eye from "./Eye";

export default function EyeTrackerSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
      });

      gsap.from(".eye-fade", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="eye-tracker"
      ref={sectionRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-8 bg-background"
    >
      <span className="eye-fade font-mono text-xs uppercase tracking-[0.3em] text-primary">
        Always Watching The Details
      </span>

      <div className="eye-fade flex gap-6">
        <Eye />
        <Eye />
      </div>

      <p className="eye-fade max-w-sm text-center text-sm text-muted-foreground px-6">
        A small interaction layer that mirrors how I approach every project —
        attentive to detail, responsive to feedback.
      </p>
    </section>
  );
}