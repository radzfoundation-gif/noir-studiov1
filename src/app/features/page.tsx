"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { Camera, Sparkles, ShieldCheck, Layers, Image as ImageIcon, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: <Camera className="w-6 h-6 text-[#0164FF]" />,
    title: "Smart Upload & Validation",
    description: "Upload any photo. Our AI instantly validates lighting, face visibility, and quality to ensure perfect results.",
  },
  {
    icon: <Layers className="w-6 h-6 text-[#0164FF]" />,
    title: "Advanced Segmentation",
    description: "Flawless background removal and subject isolation. We retain fine details like hair and fabric textures.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#0164FF]" />,
    title: "AI Generation Pipeline",
    description: "Proprietary prompt injection adapts your photo to our curated studio templates with perfect lighting.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#0164FF]" />,
    title: "Instant 4K Upscaling",
    description: "Every generated photo is automatically upscaled to crisp 4K resolution, perfect for printing or framing.",
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-[#0164FF]" />,
    title: "Interactive Previews",
    description: "Compare your original and generated photos using our intuitive before/after slider with watermarked previews.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#0164FF]" />,
    title: "Private & Secure",
    description: "Your original uploads are stored in private, encrypted storage buckets. You retain full control over your data.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-3 md:p-5">
      <section className="relative w-full max-w-[1536px] min-h-[calc(100vh-2.5rem)] mx-auto rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-white/60 border border-white/20 flex flex-col shadow-xl backdrop-blur-md pb-12">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center text-center px-6 pt-12 md:pt-20 pb-12">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full bg-[#0164FF]/10 text-[#0164FF] text-sm font-medium mb-6"
          >
            Capabilities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight mb-4"
          >
            Powerful AI Features
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#5E6470] max-w-2xl leading-relaxed"
          >
            From intelligent face detection to seamless background segmentation and upscaling, Noir Studio AI handles the heavy lifting so you get perfect studio shots every time.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white/50 border border-white/40 p-6 md:p-8 rounded-[1.5rem] hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0164FF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{feature.title}</h3>
              <p className="text-[15px] text-[#5E6470] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
