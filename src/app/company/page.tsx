"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CompanyHero } from "@/components/sections/company-hero";
import { CompanyTeam } from "@/components/sections/company-team";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <CompanyHero />
      <CompanyTeam />
      
      {/* Mission Section */}
      <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h2 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Our Mission
          </h2>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            We're dedicated to creating seamless communication experiences that bring people
            closer together, no matter where they are in the world.
          </p>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
