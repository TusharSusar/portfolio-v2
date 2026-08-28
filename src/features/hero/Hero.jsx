import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import TypingName from "./TypingName";
import DotGridBackground from "./DotGridBackground";
import { useHeroTilt } from "./hooks/useHeroTilt";
import { useMagneticButton } from "./hooks/useMagneticButton";
import { profile } from "@/data/portfolio.config";

export default function Hero() {
  const { sectionRef, stageRef } = useHeroTilt(9);
  const viewWorkRef = useMagneticButton(0.25);
  const contactRef = useMagneticButton(0.25);

  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  useGSAP(
    () => {
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        delay: 1.1,
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
      style={{ perspective: "1400px" }}
    >
      {/* 3D stage — rotates as one coherent block based on cursor position */}
      <div
        ref={stageRef}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* background sits furthest back */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: "translateZ(-140px)" }}
        >
          <DotGridBackground />
        </div>

        {/* foreground content — closer to viewer, tilts more */}
        <div
          className="relative z-10 h-full flex items-center justify-center"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6 px-6">
            <span className="hero-fade inline-flex items-center gap-2 rounded-md border border-primary-dim/40 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary">
              <Sparkles size={14} /> {profile.role}
            </span>

            <h1 className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95]">
              <span className="hero-fade block">
                <TypingName text={firstName} className="text-foreground" delay={0.3} />
              </span>
              {lastName && (
                <span className="hero-fade block">
                  <TypingName
                    text={lastName}
                    className="bg-gradient-to-r from-primary via-primary-hover to-primary-deep bg-clip-text text-transparent"
                    delay={0.55}
                  />
                </span>
              )}
            </h1>

            <div className="hero-fade h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <p className="hero-fade max-w-xl text-muted-foreground text-base sm:text-lg">
              {profile.tagline}
            </p>

            <div className="hero-fade flex flex-wrap gap-4 justify-center mt-2">
              <a
                ref={viewWorkRef}
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-primary text-background px-7 py-3.5 text-sm font-semibold hover:bg-primary-hover transition-colors duration-300 shadow-[0_0_30px_rgba(230,193,106,0.15)]"
              >
                View Work
                <ArrowUpRight size={16} />
              </a>
              <a
                ref={contactRef}
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-dim/40 bg-background/40 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Get In Touch
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator — outside the tilt stage so it stays anchored */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll Down
        </span>
        <ArrowDown size={16} className="text-primary animate-bounce" />
      </div>
    </section>
  );
}