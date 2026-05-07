"use client";

import React, from "react";
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";

const stylesList = [
  { id: 1, name: "Baby Cloud Setup", category: "Baby Studio", isPremium: false, gradient: "from-blue-100 to-cyan-50" },
  { id: 2, name: "Newborn Nest", category: "Baby Studio", isPremium: true, gradient: "from-amber-100 to-orange-50" },
  { id: 3, name: "Minimalist Graduation", category: "Graduation", isPremium: false, gradient: "from-slate-200 to-gray-50" },
  { id: 4, name: "Ivy League Scholar", category: "Graduation", isPremium: true, gradient: "from-emerald-100 to-teal-50" },
  { id: 5, name: "Executive Dark", category: "Corporate", isPremium: true, gradient: "from-gray-800 to-slate-700" },
  { id: 6, name: "Bright Office", category: "Corporate", isPremium: false, gradient: "from-sky-100 to-blue-50" },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-3 md:p-5">
      <section className="relative w-full max-w-[1536px] min-h-[calc(100vh-2.5rem)] mx-auto rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-white/60 border border-white/20 flex flex-col shadow-xl backdrop-blur-md pb-12">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center text-center px-6 pt-12 md:pt-16 pb-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full bg-[#0164FF]/10 text-[#0164FF] text-sm font-medium mb-6"
          >
            Style Catalog
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight mb-4"
          >
            Curated Studio Styles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5E6470] max-w-2xl leading-relaxed"
          >
            Browse our extensive collection of premium templates. Starting with our specialized Baby Studio, and expanding to Graduation, Corporate Headshots, and Prewedding themes.
          </motion.p>
          
          <div className="flex gap-2 md:gap-4 mt-8 flex-wrap justify-center">
            {["All", "Baby Studio", "Graduation", "Corporate"].map((cat, i) => (
              <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-[#0F172A] text-white' : 'bg-white/50 text-[#5E6470] hover:bg-white border border-white/40'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stylesList.map((style, i) => (
            <motion.div 
              key={style.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer rounded-[1.5rem] overflow-hidden bg-white/50 border border-white/40 flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-full aspect-[4/3] bg-gradient-to-br ${style.gradient} relative flex items-center justify-center`}>
                <span className="text-black/20 font-semibold text-lg mix-blend-overlay px-4 text-center">Style Preview Image</span>
                {style.isPremium && (
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-[#0F172A] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Premium
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col">
                <span className="text-[#0164FF] text-[12px] font-semibold tracking-wider uppercase mb-1">{style.category}</span>
                <h3 className="text-[#0F172A] font-bold text-lg mb-4">{style.name}</h3>
                <button className="w-full py-2.5 rounded-xl bg-[#0F172A]/5 hover:bg-[#0F172A] hover:text-white text-[#0F172A] text-sm font-medium transition-colors">
                  Gunakan Style Ini
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
