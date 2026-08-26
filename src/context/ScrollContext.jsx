import { createContext, useContext, useEffect, useRef, useState } from "react";

const ScrollContext = createContext({ direction: "up", scrolled: false });

export function ScrollProvider({ children }) {
  const [direction, setDirection] = useState("up");
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY.current) > 5) {
        setDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ direction, scrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScrollDirection = () => useContext(ScrollContext);