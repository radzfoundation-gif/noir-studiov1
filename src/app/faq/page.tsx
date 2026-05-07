"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara kerja uji coba gratis?",
    answer: "Setiap pengguna baru yang mendaftar akan otomatis mendapatkan 3 kredit gratis yang dapat digunakan untuk menghasilkan hingga 3 foto studio kualitas tinggi. Anda tidak perlu memasukkan kartu kredit untuk mencoba."
  },
  {
    question: "Apakah foto asli saya aman?",
    answer: "Sangat aman. Foto asli yang Anda unggah disimpan secara privat di server Supabase kami dengan enkripsi dan aturan keamanan tingkat baris (RLS). Kami tidak membagikannya ke pihak ketiga."
  },
  {
    question: "Kapan saya harus membayar?",
    answer: "Kami menggunakan sistem 'Preview first → Pay later'. Anda dapat menghasilkan foto dan melihat pratinjaunya (dengan watermark) tanpa biaya jika kredit habis. Anda hanya membayar saat Anda ingin mengunduh hasil HD-nya."
  },
  {
    question: "Berapa lama proses pembuatan foto?",
    answer: "Sistem antrean cerdas kami dapat memproses deteksi wajah, segmentasi latar belakang, dan injeksi AI hingga hasil akhir biasanya dalam waktu kurang dari 1-2 menit tergantung dari kepadatan server."
  },
  {
    question: "Berapa banyak foto yang saya butuhkan?",
    answer: "Anda hanya perlu mengunggah 1 foto selfie atau portrait yang memiliki pencahayaan cukup jelas. AI kami yang akan mengurus sisanya."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-black/5 bg-white/50 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-semibold text-[#0F172A] text-lg">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-[#5E6470]">
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-0 text-[#5E6470] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
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
            Support
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-bold tracking-tight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5E6470] max-w-2xl leading-relaxed"
          >
            Got questions about our watermark previews, payment gateways, or how the AI background segmentation works? We've got answers.
          </motion.p>
        </div>

        <div className="w-full max-w-3xl mx-auto px-6 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </div>
        
        <div className="w-full max-w-3xl mx-auto px-6 mt-12 text-center">
          <p className="text-[#5E6470]">Masih butuh bantuan? <a href="#" className="text-[#0164FF] font-medium hover:underline">Hubungi Tim Support</a></p>
        </div>
      </section>
    </main>
  );
}
