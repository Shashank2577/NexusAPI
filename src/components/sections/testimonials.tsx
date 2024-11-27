"use client";
import { BackgroundGradient } from "../ui/aceternity/background-gradient";

const testimonials = [
  {
    quote: "Nexus has transformed how we handle email integration in our app.",
    name: "John Smith",
    title: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&h=500&fit=crop",
  },
  {
    quote: "The calendar API saved us months of development time. Incredible support team!",
    name: "Sarah Johnson",
    title: "Lead Developer at StartupX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
  },
  {
    quote: "Best developer experience I've had with an API. Documentation is top-notch.",
    name: "Michael Chen",
    title: "Engineering Manager at ScaleUp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Loved by Developers
          </h2>
          <p className="mt-4 text-lg text-neutral-300/60">
            Here's what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <BackgroundGradient
              key={i}
              className="rounded-[22px] p-6 sm:p-8 bg-black dark:bg-zinc-900"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-24 w-24 rounded-full object-cover border-2 border-purple-500/20"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-neutral-400">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="flex-1 text-lg text-neutral-300 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
}
