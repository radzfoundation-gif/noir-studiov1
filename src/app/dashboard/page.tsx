"use client";

import React from "react";
import Link from "next/link";
import { Plus, ArrowRight, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

const recentProjects = [
  { id: 1, name: "Baby Studio - Cloudy", date: "Today, 10:24 AM", status: "completed", image: "from-blue-200 to-cyan-100" },
  { id: 2, name: "Corporate Headshot", date: "Yesterday, 14:05 PM", status: "processing", image: "from-slate-200 to-gray-100" },
  { id: 3, name: "Graduation Minimal", date: "May 4, 2026", status: "completed", image: "from-emerald-200 to-teal-100" },
  { id: 4, name: "Baby Studio - Newborn", date: "May 2, 2026", status: "failed", image: "from-red-100 to-rose-50" },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-2">Welcome back, User!</h1>
          <p className="text-[#5E6470]">Here's what's happening with your studio projects today.</p>
        </div>
        <Link href="/dashboard/generate" className="flex items-center gap-2 bg-[#0164FF] text-white px-6 py-3 rounded-full font-medium hover:bg-[#0164FF]/90 transition-colors shadow-lg shadow-blue-500/20">
          <Plus className="w-5 h-5" />
          <span>New Generation</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm flex flex-col justify-between">
          <span className="text-[#5E6470] font-medium text-sm">Credits Balance</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-[#0F172A]">12</span>
            <span className="text-sm text-[#5E6470]">credits</span>
          </div>
          <button className="mt-4 text-[#0164FF] text-sm font-semibold hover:underline w-fit">Top up credits →</button>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm flex flex-col justify-between">
          <span className="text-[#5E6470] font-medium text-sm">Photos Generated</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-4xl font-bold text-[#0F172A]">48</span>
            <span className="text-sm text-[#5E6470]">photos</span>
          </div>
          <button className="mt-4 text-[#0164FF] text-sm font-semibold hover:underline w-fit">View all →</button>
        </div>
        <div className="bg-gradient-to-br from-[#0F172A] to-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
          <span className="text-slate-300 font-medium text-sm relative z-10">Pro Plan</span>
          <div className="mt-2 flex items-baseline gap-2 relative z-10">
            <span className="text-2xl font-bold text-white">Active</span>
          </div>
          <span className="mt-4 text-slate-400 text-sm relative z-10">Renews on Jun 6, 2026</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#0F172A]">Recent Projects</h2>
          <button className="text-[#5E6470] hover:text-[#0F172A] text-sm font-medium flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentProjects.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                {project.status === 'processing' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
                    <div className="bg-white px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <Clock className="w-4 h-4 text-[#0164FF] animate-spin" />
                      <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Processing</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#0F172A] truncate mb-1">{project.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#5E6470]">{project.date}</span>
                  {project.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {project.status === 'failed' && <AlertCircle className="w-4 h-4 text-red-500" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
