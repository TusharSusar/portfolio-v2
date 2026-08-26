import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { experience } from "./experience.data";
import TimelineNode from "./TimelineNode";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(
    () => {
      // Make sure refs exist before GSAP runs
      if (!sectionRef.current || !lineRef.current) {
        console.warn("Experience refs are missing");
        return;
      }
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="relative z-10 px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <SectionLabel
          eyebrow="Selected Experience"
          title="A practice built through making."
        />

        <div className="relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary-dim/20" />
          <div
            ref={lineRef}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-primary origin-top"
          />

          <div className="flex flex-col gap-14">
            {experience.map((item) => (
              <TimelineNode key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}