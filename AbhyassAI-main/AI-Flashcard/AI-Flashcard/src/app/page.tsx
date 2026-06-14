"use client";

import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaBolt, FaMagic, FaBrain, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import ThemeToggle from "./components/ThemeToggle";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    }
  };

  return (
    <div 
        className="min-h-screen relative overflow-y-auto bg-slate-50 flex flex-col items-center justify-between px-4 sm:px-8 py-12 dark:bg-slate-900 transition-colors"
        onMouseMove={handleMouseMove}
    >
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Background Decorative Elements */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-200/30 dark:bg-brand-500/20 rounded-full blur-[120px] animate-pulse-subtle transition-transform duration-300 ease-out" 
        style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
      />
      <div 
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-200/20 dark:bg-accent-500/10 rounded-full blur-[120px] animate-pulse-subtle transition-transform duration-300 ease-out" 
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      />

      <div className="w-full max-w-5xl z-10 my-auto flex flex-col justify-center">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50 dark:bg-brand-500/10 rounded-full border border-brand-100 dark:border-brand-500/20 mb-2 animate-float">
            <FaBolt className="text-brand-500 text-sm" />
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest">AI-Powered Learning</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Elevate Your Study with <br/>
            <span className="text-brand-500 dark:text-brand-400">
              <Typewriter
                options={{
                  strings: [
                    "ABHYAS AI ⚡",
                    "Smart Cards 🧠",
                    "Instant Learning ✨",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-450 max-w-2xl mx-auto font-medium leading-relaxed">
            Turn any document, image, or raw text into structured <br className="hidden sm:block"/>
            interactive flashcards in seconds using advanced AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => router.push("/auth")}
              className="group relative px-6 py-3.5 bg-brand-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-brand-500/25 hover:bg-brand-600 hover:-translate-y-0.5 transition-all flex items-center gap-3"
            >
              Get Started Now
              <FaArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3.5 glass-card font-bold text-lg text-slate-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-slate-800 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {[
            { icon: FaMagic, title: "AI Magic", desc: "Instant generation from any source" },
            { icon: FaBrain, title: "Smart Recall", desc: "Differentiated learning paths" },
            { icon: FaMobileAlt, title: "Multi-Device", desc: "Study anywhere, anytime" },
            { icon: FaBolt, title: "OCR Power", desc: "Convert images to text instantly" }
          ].map((feature, i) => (
            <div key={i} className="glass-card p-5 border-slate-100 dark:border-white/10 dark:bg-slate-900/60 hover:border-brand-200 group transition-all">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-500/20 flex items-center justify-center mb-3 group-hover:bg-brand-500 transition-colors">
                <feature.icon className="text-brand-500 text-lg group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-slate-800 dark:text-white mb-1.5 text-base">{feature.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-slate-400 font-medium text-xs">
        © 2026 ABHYAS AI. Built for students who want to excel.
      </footer>
    </div>
  );
}