"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.scale(dpr, dpr);
    };

    // Initialize
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Animation
    let animationFrameId: number;
    const render = () => {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient
      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#1a103f");
      gradient.addColorStop(1, "#0c0820");
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw beams
      const centerX = mousePosition.current.x;
      const centerY = mousePosition.current.y;

      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * 100;
        const y = centerY + Math.sin(angle) * 100;

        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(x, y);
        context.strokeStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
        context.lineWidth = 2;
        context.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full opacity-50",
        className
      )}
    />
  );
};
