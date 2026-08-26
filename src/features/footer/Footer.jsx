import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio.config";

export default function Footer() {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(footerRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    },
    { scope: footerRef }
  );

  const scrollTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1.2, ease: "power3.inOut" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative z-10 border-t border-primary-dim/20 px-6 py-12 mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} — Built with React, GSAP & a lot of coffee.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.socialLinks.mail}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={scrollTop}
            className="ml-2 p-2.5 rounded-md border border-primary-dim/30 text-primary hover:bg-primary hover:text-background transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}