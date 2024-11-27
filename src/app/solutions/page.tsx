"use client";
import React from 'react';
import { AceternityBackgroundBoxes } from "@/components/ui/aceternity/background-boxes";
import { InfiniteMovingCards } from "@/components/ui/aceternity/infinite-moving-cards";
import { WavyBackground } from "@/components/ui/aceternity/wavy-background";

const solutions = [
  {
    quote: "Email Integration",
    name: "Universal API",
    title: "Gmail, Outlook, and more",
  },
  {
    quote: "Calendar Management",
    name: "Scheduling Made Easy",
    title: "Cross-platform calendar sync",
  },
  {
    quote: "Contact Sync",
    name: "Unified Contacts",
    title: "Seamless contact management",
  },
  {
    quote: "Enterprise Solutions",
    name: "Enterprise-grade",
    title: "Secure and scalable",
  },
];

const testimonials = [
  {
    quote: "Nexus has transformed how we handle email integration in our app.",
    name: "John Smith",
    title: "CTO at TechCorp",
  },
  {
    quote: "The calendar API saved us months of development time.",
    name: "Sarah Johnson",
    title: "Lead Developer at Schedule.io",
  },
  {
    quote: "Best-in-class support and documentation.",
    name: "Mike Williams",
    title: "Product Manager at Enterprise Co",
  },
  {
    quote: "Reliable, scalable, and easy to implement.",
    name: "Lisa Chen",
    title: "Engineering Manager at StartupX",
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="relative h-screen">
        <AceternityBackgroundBoxes />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold inter-var text-center">
            Solutions
          </h1>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-2xl mx-auto">
            Powerful APIs for modern applications. Build faster, scale better.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="relative">
          <div className="relative z-10">
            <div className="mb-32">
              <h2 className="text-3xl font-bold text-center text-white mb-8">
                Our Solutions
              </h2>
              <InfiniteMovingCards
                items={solutions}
                direction="right"
                speed="slow"
              />
            </div>

            <div className="mb-32">
              <h2 className="text-3xl font-bold text-center text-white mb-8">
                What Our Customers Say
              </h2>
              <InfiniteMovingCards
                items={testimonials}
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
