import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0
          ? scrollTop / scrollHeight
          : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-9999 h-1 w-full bg-background">
      <div
        ref={progressRef}
        className="h-full w-full origin-left bg-primary-deep"
        style={{
          transform: "scaleX(0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}