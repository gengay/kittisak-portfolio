"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#090D16] text-slate-100 overflow-x-hidden selection:bg-sky-500/30 selection:text-sky-300">
      {/* Global Navbar */}
      <Navbar onDownloadResume={handleOpenResume} />

      {/* Main Single Page Sections */}
      <main className="flex flex-col">
        {/* 1. Hero Section */}
        <Hero onDownloadResume={handleOpenResume} />

        {/* 2. Core Skills & Tech Stack */}
        <Skills />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. Work Experience (Vertical Timeline) */}
        <Experience />

        {/* 5. Contact Section */}
        <Contact onDownloadResume={handleOpenResume} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
