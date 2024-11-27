"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "30px",
  className,
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-lg p-[1px] overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "360deg" }}
        transition={{ repeat: Infinity, duration: duration / 1000 }}
        style={{ width: "200%", height: "200%" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-[-100%] bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500"
          style={{
            width: "50%",
            height: "50%",
            borderRadius: rx,
            filter: "blur(20px)",
          }}
        />
      </motion.div>
      <div className="relative bg-black rounded-lg">{children}</div>
    </div>
  );
};

export const Button = ({
  borderRadius = "1.75rem",
  className,
  children,
  ...props
}: {
  borderRadius?: string;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <MovingBorder
      duration={2000}
      rx={borderRadius}
      className={className}
      {...props}
    >
      <div className="relative px-8 py-4">
        {children}
      </div>
    </MovingBorder>
  );
};
