"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const AceternityBackgroundBoxes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const boxes = useRef<HTMLDivElement[]>([]);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const children = Array.from(container.current.children) as HTMLDivElement[];
      boxes.current = children;
    }
  }, []);

  useEffect(() => {
    boxes.current.forEach((box) => {
      const rect = box.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = Math.abs(mousePosition.x - centerX);
      const distanceY = Math.abs(mousePosition.y - centerY);
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const maxDistance = 400;
      const scale = Math.max(0, 1 - distance / maxDistance);

      box.style.transform = `scale(${1 + scale * 0.2})`;
      box.style.backgroundColor = `rgba(124, 58, 237, ${scale * 0.5})`;
    });
  }, [mousePosition]);

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <motion.div
        ref={container}
        className="absolute inset-0 h-full w-full"
        initial="initial"
        animate="animate"
      >
        {Array.from({ length: 126 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-20 w-20 absolute rounded-2xl bg-violet-500/10"
            style={{
              left: `${(i % 18) * 6}rem`,
              top: `${Math.floor(i / 18) * 6}rem`,
              transition: "all 0.3s ease-out",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
