"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Free Trial",
    credits: 3,
    price: "Rp 0",
    features: ["3 Photo Generations", "Watermarked Previews", "Basic Styles Access", "No Credit Card Required"],
    isPopular: false,
  },
  {
    name: "Starter",
    credits: 10,
    price: "Rp 49.000",
    features: ["10 Photo Generations", "Standard Resolution", "Basic Styles Access", "Email Support"],
    isPopular: false,
  },
  {
    name: "Pro",
    credits: 25,
    price: "Rp 99.000",
    features: ["25 Photo Generations", "4K Upscaling Included", "All Premium Styles", "Priority Support", "No Watermark on Preview"],
    isPopular: true,
  },
  {
    name: "Premium",
    credits: 50,
    price: "Rp 179.000",
    features: ["50 Photo Generations", "4K Upscaling Included", "All Premium Styles", "Priority Support", "Early Access to Features"],
    isPopular: false,
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-3 md:p-5">
      <section className="relative w-full max-w-[1536px] min-h-[calc(100vh-2.5rem)] mx-auto rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-white/60 border border-white/20 flex flex-col shadow-xl backdrop-blur-md pb-12">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center text-center px-6 pt-12 md:pt-16 pb-12">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-[#0164FF]/10 text-[#0164FF] text-sm font-medium mb-6"
          >
            Simple Pricing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight mb-4"
          >
            Pay Per Render or Subscribe
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5E6470] max-w-xl leading-relaxed"
          >
            Start with <strong className="text-[#0F172A]">3 free credits</strong> on your trial. 1 generation costs just 1 credit. Preview first, pay only when you love the result.
          </motion.p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className={`relative bg-white/70 rounded-[2rem] p-8 flex flex-col shadow-sm border ${plan.isPopular ? 'border-[#0164FF] shadow-xl md:-translate-y-4' : 'border-white/40'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0164FF] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
              </div>
              <p className="text-[#0164FF] font-medium bg-[#0164FF]/5 w-fit px-3 py-1 rounded-full text-sm mb-8">
                {plan.credits} Credits
              </p>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-[#0164FF]/10 p-0.5 rounded-full text-[#0164FF]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#5E6470]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-medium transition-colors ${plan.isPopular ? 'bg-[#0164FF] text-white hover:bg-[#0164FF]/90' : 'bg-[#0F172A]/5 text-[#0F172A] hover:bg-[#0F172A]/10'}`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
