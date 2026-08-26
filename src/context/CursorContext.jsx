import { createContext, useContext, useEffect, useRef, useState } from "react";

const CursorContext = createContext({ x: 0, y: 0 });

export function CursorProvider({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <CursorContext.Provider value={position}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);