"use client";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundBoxes = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  return (
    <div
      style={{
        transform: `translate(-40%, -60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2"
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.5,
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 2,
          }}
          className="w-16 h-8 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              key={`col` + j}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
              }}
              className="h-full w-full absolute top-0 left-0"
            >
              <div
                className="h-full w-full rounded-lg bg-slate-800"
                style={{
                  opacity: Math.random() * 0.07 + 0.03,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};
