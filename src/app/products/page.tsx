"use client";
import React from 'react';
import { AceternityBackgroundBoxes } from "@/components/ui/aceternity/background-boxes";
import { HoverEffect } from "@/components/ui/aceternity/card-hover-effect";
import { StickyScroll } from "@/components/ui/aceternity/sticky-scroll-reveal";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";

const products = [
  {
    title: "Email API",
    description: "Send, receive, and sync emails across providers with our unified Email API. Support for Gmail, Outlook, and more.",
    link: "/products/email",
    icon: "📧",
  },
  {
    title: "Calendar API",
    description: "Seamlessly integrate calendar functionality with our Calendar API. Schedule events, manage availability, and sync across platforms.",
    link: "/products/calendar",
    icon: "📅",
  },
  {
    title: "Contacts API",
    description: "Manage contact information effortlessly with our Contacts API. Sync address books and maintain user relationships.",
    link: "/products/contacts",
    icon: "👥",
  },
  {
    title: "Neural API",
    description: "Leverage AI-powered features for email categorization, sentiment analysis, and smart scheduling.",
    link: "/products/neural",
    icon: "🧠",
  }
];

const features = [
  {
    title: "Universal Integration",
    description: "One API to connect with all major email providers. No need for multiple integrations.",
    content: "Connect with Gmail, Outlook, Yahoo, and more",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type 2 certified, GDPR & HIPAA compliant. Bank-grade encryption for all data.",
    content: "Enterprise-grade security",
  },
  {
    title: "Scalable Infrastructure",
    description: "Built for scale with 99.99% uptime guarantee. Handle millions of requests effortlessly.",
    content: "Built for scale",
  },
  {
    title: "Developer First",
    description: "Comprehensive SDKs, detailed documentation, and responsive support team.",
    content: "Amazing developer experience",
  }
];

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    name: "John Doe",
    title: "Software Engineer",
    description: "The Email API integration was seamless and powerful."
  },
  {
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Jane Smith",
    title: "Product Manager",
    description: "Calendar API saved us months of development time."
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Mike Johnson",
    title: "Technical Lead",
    description: "Best developer experience I've had with an API."
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="relative">
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our Products
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Powerful APIs to supercharge your applications
            </p>
          </div>
          
          <div className="mt-16">
            <HoverEffect items={products} />
          </div>

          <div className="mt-32">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Why Choose Our APIs?
            </h2>
            <StickyScroll content={features} />
          </div>

          <div className="mt-32">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Customer Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <BackgroundGradient key={i} className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                  <div className="flex flex-col gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <p className="text-base sm:text-lg text-black dark:text-white">
                      "{testimonial.description}"
                    </p>
                    <div>
                      <h3 className="font-semibold text-sm text-black dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{testimonial.title}</p>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
