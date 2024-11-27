"use client";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
            style={{
              top: `${i * 5}%`,
            }}
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`vertical-${i}`}
            className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"
            style={{
              left: `${i * 5}%`,
            }}
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
