"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = 1,
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: number;
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    y: number,
    v: number;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    contextRef.current = ctx;

    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;

    if (!canvas || !ctx) return;

    nt = 0;
    ctx.fillStyle = backgroundFill || "#000";
    ctx.fillRect(0, 0, w, h);

    const drawWave = (color: string) => {
      nt += 0.002 * speed;
      for (i = 0; i < w; i += 5) {
        x = i;
        v = noise(x * (waveWidth || 0.005), x * (waveWidth || 0.005), nt);
        y = Math.floor(h / 2 + v * 100);
        ctx.fillStyle = color;
        ctx.globalAlpha = waveOpacity;
        ctx.fillRect(x, y, 2, h);
      }
    };

    colors?.forEach((color) => drawWave(color));
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    init();
    animate();
    window.addEventListener("resize", init);

    return () => {
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
        }}
        {...props}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
