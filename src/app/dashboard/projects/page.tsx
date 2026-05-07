"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Clock, CheckCircle2, AlertCircle, Download, MoreVertical } from "lucide-react";
import { motion } from "motion/react";

const allProjects = [
  { id: 1, name: "Baby Studio - Cloudy", date: "Today, 10:24 AM", status: "completed", image: "from-blue-200 to-cyan-100" },
  { id: 2, name: "Corporate Headshot", date: "Yesterday, 14:05 PM", status: "processing", image: "from-slate-200 to-gray-100" },
  { id: 3, name: "Graduation Minimal", date: "May 4, 2026", status: "completed", image: "from-emerald-200 to-teal-100" },
  { id: 4, name: "Baby Studio - Newborn", date: "May 2, 2026", status: "failed", image: "from-red-100 to-rose-50" },
  { id: 5, name: "Prewedding Classic", date: "May 1, 2026", status: "completed", image: "from-amber-100 to-orange-100" },
  { id: 6, name: "Corporate Executive", date: "Apr 28, 2026", status: "completed", image: "from-gray-200 to-slate-200" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = allProjects.filter(p => filter === "all" || p.status === filter);

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">My Projects</h1>
          <p className="text-[#5E6470] text-sm mt-1">Manage and view all your generated studio photos.</p>
        </div>
        <Link href="/dashboard/generate" className="flex items-center gap-2 bg-[#0164FF] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0164FF]/90 transition-colors shadow-md">
          <Plus className="w-4 h-4" />
          <span>New Generation</span>
        </Link>
      </div>

      <div className="flex gap-2 pb-2 border-b border-black/5 overflow-x-auto no-scrollbar">
        {["all", "completed", "processing", "failed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize whitespace-nowrap transition-colors ${filter === f ? 'bg-[#0F172A] text-white' : 'text-[#5E6470] hover:bg-black/5'}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {filteredProjects.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
          >
            <div className={`w-full aspect-[4/3] bg-gradient-to-br ${project.image} relative`}>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              
              {project.status === 'processing' && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-md">
                  <div className="bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Clock className="w-4 h-4 text-[#0164FF] animate-spin" />
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Processing</span>
                  </div>
                </div>
              )}

              {project.status === 'completed' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-[#0F172A] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform">
                    <Download className="w-4 h-4" /> Download 4K
                  </button>
                </div>
              )}
            </div>
            
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1 line-clamp-1">{project.name}</h3>
                  <span className="text-xs text-[#5E6470]">{project.date}</span>
                </div>
                <button className="text-[#5E6470] hover:text-[#0F172A] p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              
              <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs font-medium text-[#5E6470] uppercase tracking-wider">Status</span>
                <div className="flex items-center gap-1.5">
                  {project.status === 'completed' && <><CheckCircle2 className="w-4 h-4 text-emerald-500" /><span className="text-xs font-medium text-emerald-600 capitalize">{project.status}</span></>}
                  {project.status === 'processing' && <><Clock className="w-4 h-4 text-[#0164FF]" /><span className="text-xs font-medium text-[#0164FF] capitalize">{project.status}</span></>}
                  {project.status === 'failed' && <><AlertCircle className="w-4 h-4 text-red-500" /><span className="text-xs font-medium text-red-600 capitalize">{project.status}</span></>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-8 h-8 text-[#5E6470]" />
          </div>
          <h3 className="text-lg font-semibold text-[#0F172A]">No projects found</h3>
          <p className="text-[#5E6470] text-sm mt-1">You haven't generated any photos in this category yet.</p>
        </div>
      )}
    </div>
  );
}
