'use client';

import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Pricing } from '@/components/sections/pricing';
import { Testimonials } from '@/components/sections/testimonials';
import Navbar from '@/components/ui/navbar';
import { AceternityBackgroundBoxes } from '@/components/ui/aceternity/background-boxes';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative">
      <div className="fixed inset-0 h-full w-full">
        <AceternityBackgroundBoxes />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </div>
    </main>
  );
}
