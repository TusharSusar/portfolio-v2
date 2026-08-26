import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { projects } from "./projects.data";
import ProjectCard from "./ProjectCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Make sure refs exist before GSAP runs
      if (!sectionRef.current) {
        console.warn("Projects refs are missing");
        return;
      }
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: cards[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            gsap.to(card, {
              scale: 1 - self.progress * 0.08,
              opacity: 1 - self.progress * 0.4,
              filter: `brightness(${1 - self.progress * 0.5})`,
              overwrite: "auto",
              duration: 0.1,
            });
          },
        });
      });

      gsap.from(".project-heading .char", {
        opacity: 0,
        y: 60,
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <SectionLabel eyebrow="Selected Work" title="Projects that shipped." />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card sticky top-24 mb-10"
            style={{ zIndex: i + 1 }}
          >
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}