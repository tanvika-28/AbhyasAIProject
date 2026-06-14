"use client";

import { useRouter } from "next/navigation";
import {
  FaArrowRight,
  FaBolt,
  FaBrain,
  FaMobileAlt,
  FaFileAlt,
} from "react-icons/fa";
import ThemeToggle from "./components/ThemeToggle";

export default function LandingPage() {
  const router = useRouter();

  const features = [
    {
      icon: FaBolt,
      title: "Instant Flashcards",
      desc: "Generate smart flashcards from PDFs, notes, and screenshots within seconds.",
    },
    {
      icon: FaBrain,
      title: "Better Recall",
      desc: "Improve memory retention with AI-assisted learning and revision flows.",
    },
    {
      icon: FaMobileAlt,
      title: "Study Anywhere",
      desc: "Access your study material seamlessly across all your devices.",
    },
    {
      icon: FaFileAlt,
      title: "OCR & Notes",
      desc: "Extract text from images and convert handwritten notes into study content.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300">
      
      {/* Navbar */}
      <header className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-[#0B1120]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              A
            </div>

            <div>
              <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
                ABHYAS AI
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                AI Learning Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => router.push("/auth")}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-xl font-medium transition-all duration-200"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        
        {/* Soft Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-100 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-slate-200 dark:bg-slate-700/20 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
          
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
              <FaBolt className="text-indigo-600 text-sm" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                AI-Powered Learning Platform
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Study smarter with
              <span className="block text-indigo-600 dark:text-indigo-400">
                AI-generated flashcards
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Transform PDFs, notes, screenshots, and raw text into
              interactive study material in seconds. Designed for students
              who want faster revision and better recall.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
              <button
                onClick={() => router.push("/auth")}
                className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-3 shadow-sm"
              >
                Start Learning
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="px-8 py-4 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-lg transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Small Stats */}
            <div className="mt-16 flex flex-wrap justify-center gap-10">
              
              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  10K+
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Flashcards Generated
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  2K+
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Active Students
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  98%
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Positive Feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Everything you need to study efficiently
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Built for modern students with AI tools that simplify learning and revision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-6">
                <feature.icon className="text-indigo-600 dark:text-indigo-400 text-xl" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              How it works
            </h2>

            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Create study material in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                step: "01",
                title: "Upload Content",
                desc: "Upload PDFs, screenshots, handwritten notes, or plain text.",
              },
              {
                step: "02",
                title: "Generate Flashcards",
                desc: "AI automatically creates structured questions and answers.",
              },
              {
                step: "03",
                title: "Revise Smarter",
                desc: "Practice and improve retention using interactive learning.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-4">
                  STEP {item.step}
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              ABHYAS AI
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Built for students who want to learn faster.
            </p>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2026 ABHYAS AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
