"use client";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    quote:
      "Nexus has transformed our email management. The integration was seamless and the features are incredible.",
    name: "Sarah Johnson",
    title: "CTO at TechCorp",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "The API is so well-documented and intuitive. It's made our development process much faster.",
    name: "Michael Chen",
    title: "Lead Developer at StartupX",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Customer support is outstanding. Any questions we had were answered promptly and thoroughly.",
    name: "Emily Rodriguez",
    title: "Product Manager at InnovateNow",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

export const AnimatedTestimonials = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl px-4 md:px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: idx * 0.2,
              }}
              viewport={{ once: true }}
              className="w-full max-w-xl bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-base md:text-lg text-white/90 mb-2">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-white/70">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
