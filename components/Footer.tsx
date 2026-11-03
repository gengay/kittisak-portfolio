"use client";

import React from "react";
import { ArrowUp, Code2, Phone, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {personal.name} ({personal.englishName}).</span>
            <span className="hidden sm:inline">•</span>
            <span>{personal.phone}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Code2 className="w-4 h-4 text-sky-400" />
            <span>Built with Next.js 14, TypeScript &amp; Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex items-center gap-1 text-xs"
            aria-label="Back to top"
          >
            <span>กลับขึ้นด้านบน</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
