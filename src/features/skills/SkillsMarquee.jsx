import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { skillCategories } from "./skills.data";

const allSkills = skillCategories.flatMap((c) => c.skills);

export default function SkillsMarquee() {
  const trackRef = useRef(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const width = track.scrollWidth / 2;
      gsap.to(track, {
        x: -width,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: trackRef }
  );

  return (
    <div className="relative z-10 py-10 border-y border-primary-dim/15 overflow-hidden bg-surface/40">
      <div ref={trackRef} className="flex gap-10 w-max">
        {[...allSkills, ...allSkills].map((skill, i) => (
          <span
            key={i}
            className="font-mono text-sm text-muted-foreground whitespace-nowrap flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {skill}
          </span>
        ))}
      </div>
    </div>
  );
}