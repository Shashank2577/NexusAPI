"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { PricingCards } from "@/components/sections/pricing-cards";

const features = [
  {
    title: "Real-time Communication",
    description: "Connect with your team instantly with our real-time messaging system",
    icon: "💬"
  },
  {
    title: "File Sharing",
    description: "Share files securely with team members and external collaborators",
    icon: "📁"
  },
  {
    title: "Analytics Dashboard",
    description: "Track team performance and communication patterns with detailed analytics",
    icon: "📊"
  },
  {
    title: "Integration Support",
    description: "Connect with your favorite tools seamlessly",
    icon: "🔗"
  },
  {
    title: "Security First",
    description: "Enterprise-grade security with OAuth, GDPR compliance, and data encryption.",
    icon: "🔒"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
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
        <h1 className="text-6xl font-bold text-center text-white relative z-20">
          Simple, Transparent Pricing
        </h1>
        <p className="text-center text-white/60 mt-4 relative z-20">
          Choose the perfect plan for your team's needs
        </p>
      </div>

      <PricingCards />

      {/* Features Section */}
      <div className="px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Everything you need to scale
        </h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={features} />
        </div>
      </div>
    </div>
  );
}
