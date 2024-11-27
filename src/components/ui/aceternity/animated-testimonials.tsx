"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InfiniteMovingCards } from "./infinite-moving-cards";

const testimonials = [
  {
    quote: "Nexus has transformed how we handle email integration. Their APIs are incredibly reliable and easy to work with.",
    name: "Sarah Chen",
    title: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  },
  {
    quote: "The pre-built UI components saved us months of development time. Highly recommended for any SaaS product.",
    name: "Michael Rodriguez",
    title: "Lead Developer at CloudScale",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  },
  {
    quote: "Their calendar integration is seamless. We were able to implement complex scheduling features in just days.",
    name: "Emily Thompson",
    title: "Product Manager at Scheduler Pro",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  },
  {
    quote: "The support team is exceptional. They've helped us optimize our email workflows significantly.",
    name: "David Kim",
    title: "Engineering Manager at EmailPro",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  },
  {
    quote: "Integration was a breeze. The documentation is clear and the APIs are intuitive.",
    name: "Lisa Wang",
    title: "Software Architect at DevFlow",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
  },
];

export const AnimatedTestimonials = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear from our customers</h2>
      <div className="flex flex-col antialiased items-center justify-center relative">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};
