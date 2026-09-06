import {
    useEffect,
    useState
} from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        const handleMouseOver = (e) => {
            const target = e.target;

            if (
                target.closest(
                    "a, button, input, textarea, select, [role='button']"
                )
            ) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (<
        div className={
            `
        pointer-events-none
        fixed
        left-0
        top-0
        z-9999
        h-3
        w-3
        rounded-full
        bg-foreground
        transition-transform
        duration-200
        ease-out
        ${hovering ? "scale-[2.5]" : "scale-100"}
      `
        }
        style={
            {
                transform: `translate3d(${position.x - 6}px, ${position.y - 6
                    }px, 0)`,
            }
        }
    />
    );
}