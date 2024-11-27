"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [complete, setComplete] = useState(false);
  const characters = words.split("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setComplete(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={cn("font-bold", className)}
      variants={containerVariants}
      initial="hidden"
      animate={complete ? "visible" : "hidden"}
    >
      {characters.map((character, index) => (
        <motion.span key={index} variants={childVariants}>
          {character}
        </motion.span>
      ))}
    </motion.div>
  );
};
