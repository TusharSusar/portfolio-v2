import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ArrowDown, Sparkles } from "lucide-react";
import TypingName from "./TypingName";
import DotGridBackground from "./DotGridBackground";
import { useTiltEffect } from "./useTiltEffect";
import { profile } from "@/data/portfolio.config";

export default function Hero() {
  const sectionRef = useRef(null);
  const tiltRef = useTiltEffect(10);

  useGSAP(
    () => {
      // Make sure refs exist before GSAP runs
      if (!sectionRef.current) {
        console.warn("Hero refs are missing");
        return;
      }
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        delay: 1.2,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <DotGridBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="hero-fade inline-flex items-center gap-2 rounded-md border border-primary-dim/40 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
          <Sparkles size={14} /> {profile.role}
        </span>

        <TypingName text={profile.name} />

        <p className="hero-fade max-w-xl text-muted-foreground text-base sm:text-lg">
          {profile.tagline}
        </p>

        <div
          ref={tiltRef}
          className="hero-fade mt-4 w-40 h-40 rounded-full"
          style={{
            perspective: "800px",
            background: "radial-gradient(circle at 35% 30%, #FFD662, #AA6C39 70%)",
            boxShadow: "0 0 80px rgba(230,193,106,0.25)",
          }}
        />

        <div className="hero-fade flex gap-4 mt-2">
          <a
            href="#projects"
            className="rounded-md bg-primary text-background px-6 py-3 text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-primary-dim/40 px-6 py-3 text-sm font-medium text-foreground hover:border-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}