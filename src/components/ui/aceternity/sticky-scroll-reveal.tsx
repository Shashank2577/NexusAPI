"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  return (
    <motion.div
      ref={ref}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-white mb-4"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/60 text-lg"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className="hidden lg:block h-60 w-80 rounded-md bg-white dark:bg-slate-900 p-4 sticky top-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, 
            var(--slate-800) 0%, 
            var(--slate-900) 100%)`,
        }}
      >
        <motion.div
          className="absolute inset-0 h-full w-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0, 0.25, 0.5, 0.75, 1],
              [0.2, 0.4, 0.6, 0.8, 1]
            ),
          }}
        />
        <div className="relative z-10">
          <motion.div
            className="text-white text-xl font-semibold mb-2"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0, 0.25, 0.5, 0.75, 1],
                [1, 0.8, 0.6, 0.4, 0.2]
              ),
            }}
          >
            {typeof content[activeCard].content === "string"
              ? content[activeCard].content
              : "Feature Details"}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
