import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="fixed w-6 h-6 rounded-full bg-pink-500 pointer-events-none mix-blend-difference z-50 transition-transform duration-150"
            style={{ top: pos.y - 12, left: pos.x - 12 }}
        />
    );
};

export default CustomCursor;
