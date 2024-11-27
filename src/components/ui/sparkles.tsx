"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
  particleSpeed,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const createParticle = () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * (maxSize || 2 - (minSize ?? 0.1)) + (minSize ?? 0.1);
        const speedX = (Math.random() - 0.5) * (particleSpeed || 0.3);
        const speedY = (Math.random() - 0.5) * (particleSpeed || 0.3);
        const opacity = Math.random();

        return {
          x,
          y,
          size,
          speedX,
          speedY,
          opacity,
        };
      };

      const particleCount = particleDensity || 100;
      particles.current = Array.from({ length: particleCount }, createParticle);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (background) {
          ctx.fillStyle = background;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        particles.current.forEach((particle) => {
          ctx.fillStyle = `${particleColor || "#FFFFFF"}${Math.floor(particle.opacity * 255).toString(16).padStart(2, "0")}`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          particle.x += particle.speedX;
          particle.y += particle.speedY;

          if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        });

        requestAnimationFrame(animate);
      };

      animate();
    }
  }, [background, maxSize, minSize, particleColor, particleDensity, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    />
  );
};
