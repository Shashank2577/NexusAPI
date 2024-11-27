"use client";
import React from 'react';
import { AceternityBackgroundLines } from "@/components/ui/aceternity/background-lines";
import { WavyBackground } from "@/components/ui/aceternity/wavy-background";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";

const resources = [
  {
    quote: "Quick Start Guide",
    name: "Get started quickly",
    title: "Learn the basics of Nexus APIs",
    image: "https://placehold.co/100x100?text=QuickStart",
  },
  {
    quote: "API Reference",
    name: "Complete documentation",
    title: "Detailed API endpoints and parameters",
    image: "https://placehold.co/100x100?text=APIRef",
  },
  {
    quote: "SDKs & Libraries",
    name: "Multiple languages",
    title: "Official SDKs for rapid development",
    image: "https://placehold.co/100x100?text=SDKs",
  },
  {
    quote: "Code Examples",
    name: "Real-world samples",
    title: "Implementation guides and patterns",
    image: "https://placehold.co/100x100?text=CodeEx",
  },
];

const guides = [
  {
    quote: "Authentication Guide",
    name: "OAuth 2.0",
    title: "Secure authentication flows",
    image: "https://placehold.co/100x100?text=Auth",
  },
  {
    quote: "Webhooks Setup",
    name: "Real-time updates",
    title: "Event notifications and callbacks",
    image: "https://placehold.co/100x100?text=Webhooks",
  },
  {
    quote: "Error Handling",
    name: "Best practices",
    title: "Robust error management",
    image: "https://placehold.co/100x100?text=Errors",
  },
  {
    quote: "Rate Limiting",
    name: "Usage guidelines",
    title: "Request throttling and quotas",
    image: "https://placehold.co/100x100?text=RateLim",
  },
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold inter-var text-center">
          Developer Resources
        </h1>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Build powerful communication features with our unified APIs
        </p>
      </WavyBackground>

      <div className="container mx-auto px-4">
        <div className="relative">
          <AceternityBackgroundLines />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Developer Tools
            </h2>
            <div className="mb-16">
              <InfiniteMovingCards
                items={resources}
                direction="right"
                speed="slow"
              />
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Implementation Guides
            </h2>
            <div className="mb-16">
              <InfiniteMovingCards
                items={guides}
                direction="left"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
