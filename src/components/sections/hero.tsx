'use client';

import { AnimatedText } from "../ui/animated-text";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../ui/background-beams";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { Button } from "../ui/moving-border";
import Image from "next/image";
import { AceternityBackgroundLines } from "../ui/aceternity/background-lines";

const companies = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google", logo: "/logos/google.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
];

const words = [
  {
    text: "Automate",
    className: "text-white",
  },
  {
    text: "workflow",
    className: "text-white",
  },
  {
    text: "integration",
    className: "text-white",
  },
  {
    text: "100x",
    className: "text-purple-500",
  },
  {
    text: "smarter.",
    className: "text-white",
  },
];

export const Hero = () => {
  return (
    <div className="min-h-[90vh] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden py-8 md:py-24">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#8B5CF6"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center z-50 space-y-8 px-4 md:px-0">
        <h1 className="text-3xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to <span className="text-purple-500">Nexus Flow</span>
        </h1>
        <div className="w-full">
          <TypewriterEffect words={words} className="text-xl md:text-4xl" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full sm:w-auto"
          >
            Get Started
          </Button>
          <Button
            borderRadius="1.75rem"
            className="bg-purple-500 text-white border-purple-500 w-full sm:w-auto"
          >
            See Demo
          </Button>
        </div>
        <div className="space-y-4 w-full mb-16 sm:mb-0">
          <p className="text-neutral-300 text-center">Trusted by innovative teams at</p>
          <div className="flex flex-wrap gap-8 items-center justify-center pb-8 sm:pb-0">
            {companies.map((company) => (
              <div key={company.name} className="relative w-20 h-10 md:w-24 md:h-12">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
