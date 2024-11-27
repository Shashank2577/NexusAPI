"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      container.style.setProperty("--x-offset", `${x * 100}%`);
      container.style.setProperty("--y-offset", `${y * 100}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group/container bg-slate-950 rounded-[22px] p-0.5 transition duration-300 hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-slate-800",
        containerClassName
      )}
    >
      <div
        className={cn(
          "relative flex h-full w-full flex-col items-start bg-slate-950 overflow-hidden rounded-[21px] p-5 transition duration-300 group-hover/container:ring-1 group-hover:ring-emerald-500/30",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
