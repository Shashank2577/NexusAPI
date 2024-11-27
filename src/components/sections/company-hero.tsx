"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export function CompanyHero() {
  return (
    <div className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="relative z-20">
        <TextGenerateEffect
          words="Building the Future of Communication"
          className="font-bold text-center text-6xl text-white"
        />
        <p className="text-center text-white/60 mt-4 max-w-2xl mx-auto">
          We're on a mission to revolutionize how the world connects and communicates.
          Join us in shaping the future of digital interactions.
        </p>
      </div>
    </div>
  );
}
