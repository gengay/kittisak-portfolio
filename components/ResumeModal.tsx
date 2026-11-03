"use client";

import React from "react";
import {
  X,
  Printer,
  Phone,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, skills, experience, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="resume-modal-dialog glass-card max-w-4xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 bg-slate-950 shadow-2xl relative my-6 max-h-[92vh] overflow-y-auto print:max-h-none print:overflow-visible print:border-none print:shadow-none print:p-0 print:m-0 print:bg-white">
        
        {/* Close Button (Hidden in Print) */}
        <button
          onClick={onClose}
          className="print-hidden absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header (Hidden in Print) */}
        <div className="print-hidden flex items-center gap-3.5 mb-6">
          <img
            src="/profile.jpg"
            alt={personal.name}
            className="w-12 h-12 rounded-xl object-cover object-top border-2 border-sky-400/40 shadow-md"
          />
          <div>
            <h3 className="text-xl font-bold text-white">ประวัติย่อ / Online Resume Preview</h3>
            <p className="text-xs text-slate-400">
              {personal.englishName} ({personal.thaiName}) — {personal.titles[0]}
            </p>
          </div>
        </div>

        {/* Action bar (Print / Download) - Hidden in Print */}
        <div className="print-hidden flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ / บันทึกเป็น PDF (Print to PDF)</span>
            </button>
          </div>
          <div className="text-xs text-slate-400">
            เบอร์โทรติดต่อ: <span className="text-emerald-400 font-semibold">{personal.phone}</span>
          </div>
        </div>

        {/* =========================================================================
            PRINTABLE RESUME SHEETS (Explicit 2cm Page 1 & Page 2 Architecture)
           ========================================================================= */}
        <div className="resume-print-sheet bg-slate-900/60 rounded-xl border border-slate-800/80 print:bg-white print:border-none">
          
          {/* ============================= PAGE 1 ============================= */}
          <div className="print-page-1 p-6 sm:p-8 space-y-5 print:space-y-3.5 text-slate-300 text-xs sm:text-sm print:text-slate-900">
            
            {/* Header Info */}
            <div className="border-b border-slate-800 pb-4 print:border-b-2 print:border-slate-300 print:pb-3 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <img
                    src="/profile.jpg"
                    alt={personal.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-sky-400 shadow-md shrink-0 print:w-16 print:h-16 print:rounded-xl print:border-slate-400"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-slate-900 print:text-xl">
                      {personal.englishName}
                    </h1>
                    <p className="text-sm sm:text-base font-semibold text-sky-400 print:text-indigo-800 mt-0.5 print:text-sm">
                      {personal.thaiName}
                    </p>
                    <p className="text-xs font-medium text-slate-300 print:text-slate-600 mt-0.5 print:text-[11px]">
                      {personal.titles.join(" | ")}
                    </p>
                  </div>
                </div>

                {/* Contact Details (Clean stacking without line break cutoff) */}
                <div className="text-left sm:text-right space-y-1 font-mono text-xs text-slate-300 print:text-slate-800 shrink-0">
                  <div className="flex sm:justify-end items-center gap-1.5 font-bold">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                    <span>{personal.phone}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
                    <span>{personal.email}</span>
                  </div>
                  <div className="flex sm:justify-end items-center gap-1.5 text-[11px] text-slate-400 print:text-slate-600">
                    <MapPin className="w-3 h-3 text-indigo-400 print:text-indigo-700" />
                    <span>ขอนแก่น / กรุงเทพฯ (พร้อมเริ่มงาน)</span>
                  </div>
                </div>
              </div>

              {/* Availability Banner */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 print:bg-emerald-50 print:border print:border-emerald-200 print:text-emerald-900 text-xs print:text-[10px]">
                <MapPin className="w-3.5 h-3.5 print:text-emerald-700" />
                <span>{personal.location}</span>
              </div>
            </div>

            {/* About Me / Summary */}
            <div className="print-avoid-break">
              <h2 className="font-bold text-white print:text-slate-900 text-xs uppercase tracking-wider mb-1 text-indigo-400 print:text-indigo-800 font-mono">
                เกี่ยวกับฉัน (About Me)
              </h2>
              <p className="text-slate-300 print:text-slate-700 leading-relaxed text-xs sm:text-sm print:text-[11px] bg-slate-950/40 print:bg-slate-50 print:border print:border-slate-200 p-2.5 rounded-xl print:rounded-lg">
                {personal.bio}
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-2">
              <h2 className="font-bold text-white print:text-slate-900 text-xs uppercase tracking-wider mb-1 text-indigo-400 print:text-indigo-800 font-mono flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
                <span>ประสบการณ์ทำงาน (Work Experience)</span>
              </h2>
              <div className="space-y-2 print:space-y-1.5">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-3 print:p-2 rounded-xl print:rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print-avoid-break"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-0.5">
                      <span className="font-bold text-white print:text-slate-900 text-xs sm:text-sm print:text-xs">
                        {exp.role}
                      </span>
                      <span className="font-mono text-xs text-sky-400 print:text-sky-800 font-semibold print:text-[11px]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-indigo-300 print:text-indigo-700 font-medium mb-1">
                      {exp.company} — {exp.location} ({exp.type})
                    </p>
                    <ul className="space-y-0.5 text-xs print:text-[10px] text-slate-300 print:text-slate-700">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 print:text-emerald-700 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="print-avoid-break pt-0.5">
              <h2 className="font-bold text-white print:text-slate-900 text-xs uppercase tracking-wider mb-1 text-indigo-400 print:text-indigo-800 font-mono flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
                <span>ประวัติการศึกษา (Education)</span>
              </h2>
              <div className="p-2.5 print:p-2 rounded-xl print:rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-bold text-white print:text-slate-900 text-xs sm:text-sm print:text-xs">
                    {personal.education.degree}
                  </p>
                  <p className="text-xs text-slate-300 print:text-slate-600 mt-0.5 print:text-[11px]">
                    {personal.education.faculty} {personal.education.university}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-2 py-0.5 rounded-md bg-sky-500/15 print:bg-sky-100 text-sky-300 print:text-sky-800 border border-sky-500/30 print:border-sky-300 font-mono text-xs font-semibold print:text-[10px]">
                    {personal.education.gpa}
                  </span>
                  <p className="text-[10px] text-slate-400 print:text-slate-600 mt-0.5">{personal.education.graduationYear}</p>
                </div>
              </div>
            </div>

          </div>

          {/* ============================= PAGE 2 ============================= */}
          <div className="print-page-2 p-6 sm:p-8 space-y-5 print:space-y-4 text-slate-300 text-xs sm:text-sm print:text-slate-900 border-t border-slate-800/80 print:border-none">
            
            {/* Skills Summary (Page 2 Header) */}
            <div className="print-avoid-break">
              <h2 className="font-bold text-white print:text-slate-900 text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-800 font-mono flex items-center gap-1.5">
                <span>ทักษะความสามารถ (Skills &amp; Competencies)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print:gap-2.5">
                {skills.map((cat) => (
                  <div
                    key={cat.title}
                    className="p-3.5 print:p-2.5 rounded-xl print:rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print-avoid-break"
                  >
                    <p className="font-bold text-slate-200 print:text-slate-900 text-xs mb-1.5 pb-1 border-b border-slate-800 print:border-slate-200">
                      {cat.title}
                    </p>
                    <p className="text-[11px] text-slate-400 print:text-slate-700 leading-relaxed print:text-[10px]">
                      {cat.skills.map((s) => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="print-avoid-break mt-4 print:mt-3">
              <h2 className="font-bold text-white print:text-slate-900 text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-800 font-mono flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400 print:text-amber-700" />
                <span>ใบรับรองและผลงาน (Certifications &amp; Achievements)</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 print:gap-2.5">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-3 print:p-2.5 rounded-xl print:rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-200 print-avoid-break"
                  >
                    <p className="font-bold text-white print:text-slate-900 text-xs">{cert.title}</p>
                    <p className="text-[10px] text-sky-400 print:text-sky-800 font-mono mt-0.5">{cert.issuer}</p>
                    <p className="text-[11px] text-slate-400 print:text-slate-600 mt-1 leading-relaxed print:text-[10px]">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Endorsement Note at the bottom of Page 2 */}
            <div className="hidden print:block text-center pt-8 mt-8 border-t border-slate-200 text-[10px] text-slate-600 font-mono">
              <span>{personal.englishName} ({personal.phone}) — เอกสารประวัติการทำงาน (Official Online Resume)</span>
            </div>

          </div>

        </div>

        {/* Modal Footer (Hidden in Print) */}
        <div className="print-hidden mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
}
