"use client";

import { MovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for small teams and individual developers",
    features: [
      "Up to 1,000 API calls/month",
      "Basic integration support",
      "Community forum access",
      "Email notifications"
    ],
    buttonText: "Start Free"
  },
  {
    name: "Pro",
    price: "$49",
    description: "Ideal for growing businesses with advanced needs",
    features: [
      "Up to 50,000 API calls/month",
      "Priority email support",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager"
    ],
    buttonText: "Get Pro"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited API calls",
      "24/7 dedicated support",
      "On-premise deployment",
      "Advanced security features",
      "Custom SLAs",
      "Personalized onboarding"
    ],
    buttonText: "Contact Sales"
  }
];

export function Pricing() {
  return (
    <div id="pricing" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            Flexible Pricing for Every Team
          </h2>
          <p className="text-neutral-300 text-lg max-w-3xl mx-auto">
            Scale your workflow automation with transparent, predictable pricing. No hidden fees, just powerful integrations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              className="bg-neutral-900 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-purple-500 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  {tier.price}
                  {tier.price !== "Custom" && <span className="text-base text-neutral-400">/month</span>}
                </div>
                <p className="text-neutral-400 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center text-neutral-300">
                      <svg 
                        className="w-5 h-5 text-purple-500 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <MovingBorder className="w-full">
                <button className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity">
                  {tier.buttonText}
                </button>
              </MovingBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
