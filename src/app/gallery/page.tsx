"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "motion/react";

const galleryItems = [
  { id: 1, aspect: "aspect-[3/4]", gradient: "from-blue-200 to-indigo-100" },
  { id: 2, aspect: "aspect-square", gradient: "from-emerald-200 to-teal-100" },
  { id: 3, aspect: "aspect-[4/3]", gradient: "from-amber-200 to-orange-100" },
  { id: 4, aspect: "aspect-square", gradient: "from-pink-200 to-rose-100" },
  { id: 5, aspect: "aspect-[3/4]", gradient: "from-purple-200 to-fuchsia-100" },
  { id: 6, aspect: "aspect-[4/3]", gradient: "from-cyan-200 to-sky-100" },
  { id: 7, aspect: "aspect-square", gradient: "from-slate-300 to-gray-200" },
  { id: 8, aspect: "aspect-[3/4]", gradient: "from-yellow-200 to-lime-100" },
];

export default function GalleryPage() {
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
            Community Gallery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight mb-4"
          >
            Studio Results
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5E6470] max-w-2xl leading-relaxed"
          >
            Lihat berbagai hasil foto menakjubkan yang di-generate oleh pengguna kami menggunakan teknologi Noir Studio AI.
          </motion.p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`w-full ${item.aspect} bg-gradient-to-br ${item.gradient} rounded-[1.5rem] overflow-hidden relative group break-inside-avoid`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-black/30 group-hover:text-white/90 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
