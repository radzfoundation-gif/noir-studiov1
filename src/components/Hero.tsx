"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroBadge from "./HeroBadge";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroTexts = [
  "Transform ordinary photos into professional studio shots in minutes.",
  "Fast, affordable, and AI-powered. Get stunning results effortlessly.",
  "Starting with our specialized Baby Studio. Capture your best moments."
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onTimeUpdate={(e) => {
            const video = e.currentTarget;
            if (video.duration - video.currentTime < 0.2) {
              video.currentTime = 0;
              video.play();
            }
          }}
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          <Navbar />

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <HeroBadge />
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-white drop-shadow-lg mb-4 tracking-tight leading-[1.05]"
            >
              Studio-Quality Photos from Home
            </motion.h1>
            
            <div className="h-16 md:h-20 relative w-full flex justify-center mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  variants={{
                    hidden: { opacity: 1 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
                    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute flex flex-wrap justify-center gap-x-[0.25em] text-sm sm:text-base md:text-lg text-white/90 drop-shadow-md leading-relaxed max-w-xl font-normal text-center"
                >
                  {heroTexts[textIndex].split(" ").map((word, wordIdx) => (
                    <span key={wordIdx} className="inline-flex">
                      {word.split("").map((char, charIdx) => (
                        <motion.span
                          key={charIdx}
                          variants={{
                            hidden: { opacity: 0, y: 15, scale: 0.8 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 12, stiffness: 200 } }
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <Link href="/waitlist">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 md:mt-10 px-8 py-3.5 rounded-full bg-[#0164FF] hover:bg-[#0164FF]/90 text-white font-bold text-base md:text-lg shadow-[0_0_20px_rgba(1,100,255,0.4)] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 z-20 cursor-pointer"
              >
                Claim 7-Day Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>

          </div>

          <div className="hidden md:block">
            <BottomLeftCard />
          </div>
          <div className="hidden md:block">
            <BottomRightCorner />
          </div>
        </div>
      </section>
    </div>
  );
}
