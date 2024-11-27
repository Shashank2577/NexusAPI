"use client";

import { HoverEffect } from "../ui/card-hover-effect";
import { WavyBackground } from "../ui/aceternity/wavy-background";

const features = [
  {
    title: "Smart Workflow Automation",
    description: "Automate complex business processes with our intelligent workflow engine. Connect and orchestrate multiple services effortlessly.",
    icon: "🔄",
  },
  {
    title: "Universal API Gateway",
    description: "One API to connect them all. Integrate with hundreds of services through our unified API interface.",
    icon: "🌐",
  },
  {
    title: "Real-time Data Sync",
    description: "Keep your systems in perfect harmony with real-time bi-directional synchronization across all connected platforms.",
    icon: "⚡",
  },
  {
    title: "No-Code Integration Builder",
    description: "Build complex integrations visually with our drag-and-drop interface. No coding required.",
    icon: "🎯",
  },
  {
    title: "AI-Powered Automation",
    description: "Leverage advanced AI to automate decision-making and optimize your workflows automatically.",
    icon: "🤖",
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, audit logs, and compliance with major security standards.",
    icon: "🔒",
  },
];

export function Features() {
  return (
    <div className="relative mt-48 sm:mt-24 md:mt-0">
      <WavyBackground 
        className="max-w-full mx-auto" 
        containerClassName="w-full min-h-screen relative pt-32 md:pt-24"
        colors={["#2a2a2a", "#2b2b2b", "#2c2c2c"]}
        waveWidth={0.5}
        backgroundFill="#1a1a1a"
        blur={2}
        speed={0.5}
        waveOpacity={0.3}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-8">
              Supercharge Your Workflow Integration
            </h2>
            <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
              Nexus Flow provides a comprehensive suite of tools to streamline your business processes and automate workflows with ease.
            </p>
          </div>
          <HoverEffect items={features} />
        </div>
      </WavyBackground>
    </div>
  );
}
