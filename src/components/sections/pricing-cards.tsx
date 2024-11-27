"use client";
import { BackgroundGradient } from "@/components/ui/aceternity/background-gradient";

const plans = [
  {
    title: "Starter",
    price: "$29",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1GB storage",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Professional",
    price: "$99",
    features: [
      "Up to 15 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Dedicated support",
      "Unlimited storage",
    ],
    gradient: "from-orange-500 to-yellow-500",
  },
];

export function PricingCards() {
  return (
    <div className="flex flex-wrap justify-center gap-8 px-8 py-12">
      {plans.map((plan) => (
        <BackgroundGradient key={plan.title} className="rounded-[22px] max-w-sm p-4 bg-black">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">{plan.title}</h3>
            <div className="text-4xl font-bold mb-4 text-white">{plan.price}</div>
            <ul className="space-y-2 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-gray-400">
                  • {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 rounded-lg bg-gradient-to-r ${plan.gradient} text-white font-semibold`}>
              Get Started
            </button>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
}
