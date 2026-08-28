import { useEffect, useRef, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useScrollDirection } from "@/context/ScrollContext";
import { profile } from "@/data/portfolio.config";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "eye-tracker", label: "Focus" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef(null);
  const { direction, scrolled } = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.to(headerRef.current, {
      y: direction === "down" && scrolled ? "-120%" : "0%",
      duration: 0.5,
      ease: "power3.out",
    });
  }, [direction, scrolled]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: el, offsetY: 80 },
        ease: "power2.inOut",
      });
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 lg:top-5 left-0 right-0 z-50 w-auto lg:mx-20 lg:rounded-full transition-colors duration-300 lg:border lg:border-primary-dim/30 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-primary-dim/20"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-lg font-semibold tracking-wide text-foreground"
        >
          T<span className="text-primary">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group  cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-primary-dim/40 px-4 py-2 text-sm text-primary hover:bg-primary-muted hover:text-background transition-all duration-300"
          >
            <Download size={16} /> Resume
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-background/95 backdrop-blur-md border-b border-primary-dim/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary"
          >
            <Download size={16} /> Resume
          </a>
        </div>
      )}
    </header>
  );
}