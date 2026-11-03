"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface NavbarProps {
  onDownloadResume?: () => void;
}

export default function Navbar({ onDownloadResume }: NavbarProps) {
  const { personal } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "หน้าแรก", href: "#hero", id: "hero" },
    { label: "ทักษะความสามารถ", href: "#skills", id: "skills" },
    { label: "ผลงาน & QA", href: "#projects", id: "projects" },
    { label: "ประสบการณ์ทำงาน", href: "#experience", id: "experience" },
    { label: "ช่องทางติดต่อ", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-sky-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 font-black text-sm tracking-tighter">
                  {personal.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-100 text-sm tracking-wide group-hover:text-sky-400 transition-colors">
                {personal.shortName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                IT SUPPORT &amp; QA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  activeSection === link.id
                    ? "text-sky-400 bg-sky-500/10 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{personal.phone}</span>
            </a>

            <button
              onClick={onDownloadResume}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                activeSection === link.id
                  ? "text-sky-400 bg-sky-500/10 font-semibold"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-emerald-300 border border-emerald-500/30 bg-emerald-500/10"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              โทร {personal.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onDownloadResume) onDownloadResume();
              }}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md shadow-sky-500/20"
            >
              <FileText className="w-4 h-4" />
              ดาวน์โหลด Resume (PDF)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
