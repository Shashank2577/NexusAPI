"use client";
import { motion } from "framer-motion";
import React from "react";

export const AceternityBackgroundLines = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute h-full w-full z-0">
        <div className="absolute h-full w-full z-0">
          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.05 }}
              className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"
              style={{
                left: `${(i + 1) * 5}%`,
              }}
            />
          ))}

          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`h-${i}`}
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.05 }}
              className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
              style={{
                top: `${(i + 1) * 5}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
