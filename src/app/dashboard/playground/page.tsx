"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles, Image as ImageIcon, Wand2, ArrowRight, Download,
  Camera, Lightbulb, Palette, Box, Clapperboard,
  Square, Monitor, Smartphone, RectangleHorizontal,
  Upload, X, Cpu, Zap, Brain, ChevronDown,
  Pen, Grid3X3, Scaling, Copy, User, Plus, ArrowLeft,
  Send, ImageUp, Layers, Settings2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* ── Template Presets ── */
const TEMPLATE_PRESETS: Record<string, { prompt: string; style: string }> = {
  "baby-studio": { prompt: "A cute baby sitting in a dreamy cloud-themed studio setup, soft pastel colors, professional baby photography, pink and white decorations", style: "studio" },
  "photo-booth": { prompt: "A fun and colorful photo booth setup with props, party hats, neon frame border, vibrant party atmosphere", style: "realistic" },
  "corporate": { prompt: "Professional corporate headshot portrait, business person in suit, clean neutral background, soft studio lighting", style: "studio" },
  "graduation": { prompt: "A beautiful graduation photo, person in graduation cap and gown, bokeh background with warm golden light, elegant minimal photography", style: "cinematic" },
  "prewedding": { prompt: "A romantic pre-wedding couple photo, beautiful outdoor garden setting, golden hour lighting, elegant floral decorations, dreamy soft focus background", style: "cinematic" },
  "product": { prompt: "Beautiful product photography, sleek product on marble surface, soft studio lighting, minimalist and premium aesthetic, high-end commercial photography", style: "realistic" },
};

/* ── Models ── */
const MODELS = [
  { id: "gpt-image-2", name: "GPT Image 2", icon: <Zap className="w-4 h-4" /> },
  { id: "nano-banana-2", name: "Nano Banana 2", icon: <Cpu className="w-4 h-4" /> },
  { id: "seedream-2", name: "Seedream 2.0", icon: <Brain className="w-4 h-4" /> },
];

const STYLES = [
  { id: "realistic", name: "Hyper Realistic", icon: <Camera className="w-4 h-4" /> },
  { id: "studio", name: "Studio Portrait", icon: <Lightbulb className="w-4 h-4" /> },
  { id: "anime", name: "Anime Style", icon: <Palette className="w-4 h-4" /> },
  { id: "3d", name: "3D Render", icon: <Box className="w-4 h-4" /> },
  { id: "cinematic", name: "Cinematic", icon: <Clapperboard className="w-4 h-4" /> },
];

/* ── Pixel Art Loading ── */
const PIXEL_LETTERS: Record<string, number[][]> = {
  N: [[1,0,0,0,1],[1,1,0,0,1],[1,0,1,0,1],[1,0,1,0,1],[1,0,0,1,1],[1,0,0,1,1],[1,0,0,0,1]],
  O: [[0,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[1,0,0,0,1],[0,1,1,1,0]],
  I: [[1,1,1,1,1],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[1,1,1,1,1]],
  R: [[1,1,1,1,0],[1,0,0,0,1],[1,0,0,0,1],[1,1,1,1,0],[1,0,1,0,0],[1,0,0,1,0],[1,0,0,0,1]],
};

const PALETTES = [
  ["#FF6B8A","#FF8E72","#FFB86C","#FFDA65","#A8FF78"],
  ["#00D2FF","#7B68EE","#9B59B6","#E056A0","#FF6B8A"],
  ["#A8FF78","#78FFD6","#00D2FF","#7B68EE","#B388FF"],
  ["#FFD700","#FF8C00","#FF4757","#C44569","#6C5CE7"],
];

function PixelLetterCard({ letter, paletteIndex, cardIndex }: { letter: string; paletteIndex: number; cardIndex: number }) {
  const pixels = PIXEL_LETTERS[letter];
  const palette = PALETTES[paletteIndex];
  const [colorShift, setColorShift] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setColorShift((p) => (p + 1) % palette.length), 1800 + cardIndex * 300);
    return () => clearInterval(interval);
  }, [palette.length, cardIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: cardIndex * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white/[0.04] rounded-2xl p-4 border border-white/[0.06] flex flex-col items-center gap-2"
    >
      <div className="grid gap-[3px]" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        {pixels.map((row, rIdx) => row.map((cell, cIdx) => {
          const colorIdx = (rIdx + cIdx + colorShift) % palette.length;
          return (
            <motion.div
              key={`${rIdx}-${cIdx}`}
              initial={{ scale: 0 }}
              animate={{ scale: cell ? 1 : 0.3, opacity: cell ? 1 : 0.03 }}
              transition={{ delay: cardIndex * 0.1 + (rIdx * 5 + cIdx) * 0.012, duration: 0.3 }}
              className="w-[9px] h-[9px] rounded-[2px]"
              style={{
                backgroundColor: cell ? palette[colorIdx] : "rgba(255,255,255,0.05)",
                boxShadow: cell ? `0 0 6px ${palette[colorIdx]}40` : "none",
                transition: "background-color 0.8s ease, box-shadow 0.8s ease",
              }}
            />
          );
        }))}
      </div>
      <span className="text-white/20 text-[9px] font-medium tracking-widest uppercase">{letter}</span>
    </motion.div>
  );
}

function NoirLoadingScreen({ modelName, styleName, resolution, aspectRatio, hasReference }: {
  modelName: string; styleName: string; resolution: string; aspectRatio: string; hasReference: boolean;
}) {
  return (
    <motion.div key="generating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="absolute inset-0 z-20 flex flex-col items-center justify-center overflow-hidden bg-[#0a0b10]"
    >
      <div className="absolute inset-0 opacity-40" style={{ background: "linear-gradient(-45deg, #0a0e1a, #111827, #130f1e, #0c1929)", backgroundSize: "400% 400%", animation: "dreamyGradient 12s ease infinite" }} />
      <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[100px] bg-blue-500" style={{ animation: "floatOrb1 15s ease-in-out infinite" }} />
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8">
          {["N","O","I","R"].map((l, i) => <PixelLetterCard key={l} letter={l} paletteIndex={i} cardIndex={i} />)}
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center">
          <p className="text-white/25 text-xs tracking-[0.3em] uppercase font-medium mb-3">Generating</p>
          <div className="w-40 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
          {/* All settings info */}
          <div className="flex items-center gap-2 mt-4 flex-wrap justify-center">
            <span className="text-white/20 text-[10px] bg-white/[0.06] px-2 py-0.5 rounded">{modelName}</span>
            <span className="text-white/20 text-[10px] bg-white/[0.06] px-2 py-0.5 rounded">{styleName}</span>
            <span className="text-white/20 text-[10px] bg-white/[0.06] px-2 py-0.5 rounded">{resolution}px</span>
            <span className="text-white/20 text-[10px] bg-white/[0.06] px-2 py-0.5 rounded">{aspectRatio}</span>
            {hasReference && (
              <span className="text-emerald-400/40 text-[10px] bg-emerald-400/[0.08] px-2 py-0.5 rounded">+ Reference</span>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Main Playground — Dark canvas-centric layout
   ══════════════════════════════════════════════════════════════════ */
export default function PlaygroundPage() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template");

  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-image-2");
  const [selectedStyle, setSelectedStyle] = useState("studio");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [resolution, setResolution] = useState("1024");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [referenceFileName, setReferenceFileName] = useState("");
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (templateId && TEMPLATE_PRESETS[templateId]) {
      const preset = TEMPLATE_PRESETS[templateId];
      setPrompt(preset.prompt);
      setSelectedStyle(preset.style);
    }
  }, [templateId]);

  /* Aspect ratio CSS mapping */
  const RATIO_CLASS: Record<string, string> = {
    "1:1": "aspect-square",
    "4:3": "aspect-[4/3]",
    "16:9": "aspect-video",
    "9:16": "aspect-[9/16]",
  };

  const handleGenerate = () => {
    if (!prompt) return;

    // Build full generation config
    const generationConfig = {
      prompt,
      model: selectedModel,
      style: selectedStyle,
      aspectRatio,
      resolution,
      referenceImage: referenceImage ? referenceFileName : null,
    };

    // Log for future backend integration
    console.log("🎨 Noir Studio — Generation Config:", generationConfig);

    setIsGenerating(true);
    setGeneratedImage(null);

    // Simulate generation (replace with real API call)
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedImage("from-violet-500 via-blue-500 to-cyan-400");
    }, 3000);
  };

  const handleReferenceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setReferenceFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => setReferenceImage(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const removeReference = () => {
    setReferenceImage(null);
    setReferenceFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const activeModel = MODELS.find((m) => m.id === selectedModel)!;
  const activeStyle = STYLES.find((s) => s.id === selectedStyle)!;

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-6 bg-white rounded-2xl overflow-hidden">

      {/* ── Top Bar ── */}
      <div className="h-12 border-b border-black/[0.06] flex items-center justify-between px-4 shrink-0 bg-white">
        <div className="flex items-center gap-3">
          <Link href="/dashboard/generate" className="flex items-center gap-1.5 text-[#5E6470] hover:text-[#0F172A] transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Templates</span>
          </Link>
          <div className="w-px h-5 bg-black/10" />
          <span className="text-sm font-semibold text-[#0F172A]">Noir Studio</span>
          <span className="text-[10px] bg-[#0164FF]/10 text-[#0164FF] px-1.5 py-0.5 rounded font-bold uppercase">Playground</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-[#5E6470] bg-[#f5f5f7] px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-black/[0.06]">
            <Sparkles className="w-3 h-3 text-[#0164FF]" />
            <span>12 Credits</span>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="flex flex-1 min-h-0">

        {/* ── Center Canvas ── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Canvas Area */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden bg-[#f5f5f7]">
            <AnimatePresence mode="wait">
              {!isGenerating && !generatedImage && (
                <motion.div key="empty" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl border border-black/[0.06] shadow-sm flex items-center justify-center mb-4">
                    <ImageIcon className="w-7 h-7 text-black/15" />
                  </div>
                  <h3 className="text-[#0F172A] font-semibold mb-1">Ready to create</h3>
                  <p className="text-[#5E6470] text-sm">Describe your vision in the chat and hit generate.</p>
                </motion.div>
              )}

              {isGenerating && (
                <NoirLoadingScreen
                  modelName={activeModel.name}
                  styleName={activeStyle.name}
                  resolution={resolution}
                  aspectRatio={aspectRatio}
                  hasReference={!!referenceImage}
                />
              )}

              {generatedImage && !isGenerating && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex items-center justify-center p-8"
                >
                  <div className={`w-full max-w-2xl ${RATIO_CLASS[aspectRatio] || "aspect-square"} bg-gradient-to-br ${generatedImage} rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <button className="bg-white text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform shadow-2xl text-sm">
                        <Download className="w-4 h-4" /> Save to Gallery
                      </button>
                    </div>
                    {/* Watermark */}
                    <span className="text-white/20 font-bold text-xl rotate-[-15deg] select-none pointer-events-none">Noir Studio AI</span>
                    {/* Info badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white/70 text-[10px] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">{resolution}px</span>
                      <span className="text-white/70 text-[10px] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">{aspectRatio}</span>
                      <span className="text-white/70 text-[10px] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">{activeStyle.name}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Bottom Toolbar ── */}
          <div className="h-14 border-t border-black/[0.06] bg-white flex items-center justify-between px-4 shrink-0">
            {/* Tool Icons */}
            <div className="flex items-center gap-1">
              {[
                { icon: <Pen className="w-4 h-4" />, label: "Draw", active: true },
                { icon: <ImageUp className="w-4 h-4" />, label: "Upload" },
                { icon: <Grid3X3 className="w-4 h-4" />, label: "Grid" },
                { icon: <Sparkles className="w-4 h-4" />, label: "Enhance" },
                { icon: <Scaling className="w-4 h-4" />, label: "Resize" },
                { icon: <Copy className="w-4 h-4" />, label: "Duplicate" },
                { icon: <User className="w-4 h-4" />, label: "Person" },
                { icon: <Plus className="w-4 h-4" />, label: "More" },
              ].map((tool, i) => (
                <button
                  key={i}
                  title={tool.label}
                  onClick={tool.label === "Upload" ? () => fileInputRef.current?.click() : undefined}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    tool.active
                      ? "bg-[#0164FF]/10 text-[#0164FF]"
                      : "text-[#5E6470]/50 hover:text-[#0F172A] hover:bg-black/[0.04]"
                  }`}
                >
                  {tool.icon}
                </button>
              ))}
            </div>

            {/* Model Selector + Download */}
            <div className="flex items-center gap-2">
              {/* Style Dropdown */}
              <div className="relative">
                <button onClick={() => setStyleDropdownOpen(!styleDropdownOpen)}
                  className="flex items-center gap-1.5 text-[#5E6470] hover:text-[#0F172A] text-xs px-3 py-2 rounded-lg bg-[#f5f5f7] hover:bg-black/[0.06] transition-all border border-black/[0.06]"
                >
                  {activeStyle.icon}
                  <span className="hidden md:inline">{activeStyle.name}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${styleDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {styleDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.12 }}
                      className="absolute bottom-full left-0 mb-2 bg-white border border-black/10 rounded-xl shadow-xl z-50 overflow-hidden min-w-[180px]"
                    >
                      {STYLES.map((s) => (
                        <button key={s.id} onClick={() => { setSelectedStyle(s.id); setStyleDropdownOpen(false); }}
                          className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs transition-colors ${selectedStyle === s.id ? "bg-[#0164FF]/10 text-[#0164FF] font-semibold" : "text-[#5E6470] hover:bg-black/[0.03] hover:text-[#0F172A]"}`}
                        >
                          {s.icon} {s.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Model Dropdown */}
              <div className="relative">
                <button onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                  className="flex items-center gap-1.5 text-[#5E6470] hover:text-[#0F172A] text-xs px-3 py-2 rounded-lg bg-[#f5f5f7] hover:bg-black/[0.06] transition-all border border-black/[0.06]"
                >
                  {activeModel.icon}
                  <span>{activeModel.name}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${modelDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {modelDropdownOpen && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.12 }}
                      className="absolute bottom-full right-0 mb-2 bg-white border border-black/10 rounded-xl shadow-xl z-50 overflow-hidden min-w-[180px]"
                    >
                      {MODELS.map((m) => (
                        <button key={m.id} onClick={() => { setSelectedModel(m.id); setModelDropdownOpen(false); }}
                          className={`w-full flex items-center gap-2 px-3 py-2.5 text-xs transition-colors ${selectedModel === m.id ? "bg-[#0164FF]/10 text-[#0164FF] font-semibold" : "text-[#5E6470] hover:bg-black/[0.03] hover:text-[#0F172A]"}`}
                        >
                          {m.icon} {m.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Download */}
              {generatedImage && (
                <button className="w-9 h-9 rounded-xl bg-[#f5f5f7] flex items-center justify-center text-[#5E6470] hover:text-[#0F172A] hover:bg-black/[0.06] transition-all border border-black/[0.06]">
                  <Download className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Right Sidebar (White) ── */}
        <div className="w-96 border-l border-black/[0.08] bg-white flex flex-col shrink-0 hidden lg:flex">

          {/* Sidebar Header */}
          <div className="px-5 py-3 border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] text-[#5E6470] font-semibold uppercase tracking-wider">Main</span>
            </div>
          </div>

          {/* Thumbnail Preview */}
          <div className="p-4 border-b border-black/[0.06]">
            {generatedImage ? (
              <div className={`w-full aspect-video bg-gradient-to-br ${generatedImage} rounded-xl shadow-sm`} />
            ) : referenceImage ? (
              <div className="relative rounded-xl overflow-hidden shadow-sm">
                <Image src={referenceImage} alt="Ref" width={380} height={280} className="w-full aspect-video object-cover rounded-xl" />
                <button onClick={removeReference}
                  className="absolute top-2 right-2 w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            ) : (
              <div className="w-full aspect-video bg-[#f5f5f7] rounded-xl border border-black/[0.06] flex items-center justify-center">
                <ImageIcon className="w-8 h-8 text-black/10" />
              </div>
            )}
          </div>

          {/* Settings: Aspect Ratio & Resolution */}
          <div className="p-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-1.5 mb-3">
              <Settings2 className="w-3.5 h-3.5 text-[#5E6470]" />
              <span className="text-[11px] text-[#5E6470] font-semibold uppercase tracking-wider">Settings</span>
            </div>

            {/* Aspect Ratio */}
            <span className="text-[10px] text-[#5E6470] font-medium uppercase tracking-wider mb-1.5 block">Image Size</span>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {[
                { id: "1:1", label: "1:1", icon: <Square className="w-3 h-3" /> },
                { id: "4:3", label: "4:3", icon: <RectangleHorizontal className="w-3 h-3" /> },
                { id: "16:9", label: "16:9", icon: <Monitor className="w-3 h-3" /> },
                { id: "9:16", label: "9:16", icon: <Smartphone className="w-3 h-3" /> },
              ].map((r) => (
                <button key={r.id} onClick={() => setAspectRatio(r.id)}
                  className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-[11px] font-medium transition-all ${
                    aspectRatio === r.id
                      ? "bg-[#0F172A] border-[#0F172A] text-white"
                      : "border-black/[0.08] text-[#5E6470] hover:bg-[#f5f5f7]"
                  }`}
                >
                  {r.icon} {r.label}
                </button>
              ))}
            </div>

            {/* Resolution */}
            <span className="text-[10px] text-[#5E6470] font-medium uppercase tracking-wider mb-1.5 block">Resolution</span>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: "512", label: "512 × 512", tag: "Draft" },
                { id: "1024", label: "1024 × 1024", tag: "Standard" },
                { id: "2048", label: "2048 × 2048", tag: "HD" },
                { id: "4096", label: "4096 × 4096", tag: "Ultra HD" },
              ].map((res) => (
                <button key={res.id} onClick={() => setResolution(res.id)}
                  className={`px-2.5 py-2 rounded-lg border text-[11px] font-medium transition-all text-left ${
                    resolution === res.id
                      ? "bg-[#0F172A] border-[#0F172A] text-white"
                      : "border-black/[0.08] text-[#5E6470] hover:bg-[#f5f5f7]"
                  }`}
                >
                  <div className="font-semibold text-[11px]">{res.label}</div>
                  <div className={`text-[9px] mt-0.5 ${resolution === res.id ? "text-white/60" : "text-[#5E6470]/60"}`}>{res.tag}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Prompt Input */}
          <div className="p-4 border-t border-black/[0.06]">
            <div className="flex items-end gap-2 bg-[#f5f5f7] rounded-xl border border-black/[0.08] p-3 focus-within:border-[#0164FF]/40 focus-within:ring-2 focus-within:ring-[#0164FF]/10 transition-all">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your image edit..."
                rows={3}
                className="flex-1 bg-transparent text-sm text-[#0F172A] placeholder-[#5E6470]/50 resize-none focus:outline-none min-h-[60px] max-h-[120px]"
                onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleGenerate(); } }}
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating || !prompt}
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isGenerating || !prompt
                    ? "bg-black/[0.06] text-black/20 cursor-not-allowed"
                    : "bg-[#0164FF] text-white hover:bg-[#0150d4] shadow-lg shadow-blue-500/20"
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {/* Bottom icons */}
            <div className="flex items-center gap-3 mt-3">
              <button onClick={() => fileInputRef.current?.click()} className="text-[#5E6470]/40 hover:text-[#0164FF] transition-colors" title="Upload reference">
                <ImageUp className="w-4 h-4" />
              </button>
              <button className="text-[#5E6470]/40 hover:text-[#0164FF] transition-colors" title="Enhance prompt">
                <Wand2 className="w-4 h-4" />
              </button>
              <button className="text-[#5E6470]/40 hover:text-[#0164FF] transition-colors" title="Layers">
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleReferenceUpload} className="hidden" />
    </div>
  );
}
