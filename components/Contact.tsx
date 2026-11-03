"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  FileText,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Briefcase,
  AlertCircle,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ContactProps {
  onDownloadResume?: () => void;
}

export default function Contact({ onDownloadResume }: ContactProps) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
      "af8fed6c-b086-4fcb-8558-18f574fde4fb";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio Contact] ${formData.subject}`,
          message: formData.message,
          from_name: `${formData.name} (ผ่านหน้าเว็บ Portfolio)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        setErrorMessage(
          result.message || "เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง"
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(
        "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้ กรุณาติดต่อผ่านอีเมลโดยตรงที่ gengkittisak@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/50">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH &amp; HIRING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ติดต่อสอบถาม &amp; นัดสัมภาษณ์งาน
          </h2>
          <p className="mt-3 text-base text-slate-400">
            พร้อมเริ่มงานทันที สามารถย้ายไปปฏิบัติงานในกรุงเทพฯ ได้ทันที หรือปฏิบัติงานในรูปแบบ Remote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column: Contact Info Cards & Resume CTA (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">
                ข้อมูลการติดต่อ (Direct Contact)
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                ยินดีตอบกลับทุกการติดต่อเกี่ยวกับตำแหน่งงาน IT Support, QA &amp; Tester และ Team Lead
              </p>

              <div className="space-y-3.5">
                {/* Phone Call & Copy */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-400 font-mono">เบอร์โทรศัพท์ (Mobile)</p>
                      <a
                        href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
                        className="text-xs sm:text-sm font-semibold text-emerald-300 hover:underline block"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="คัดลอกเบอร์โทร"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Email with Copy Action */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-sky-500/15 text-sky-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-400 font-mono">อีเมล (Email Address)</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-200 hover:text-sky-300 truncate block"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="คัดลอกอีเมล"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location / Relocation */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">พื้นที่ปฏิบัติงาน (Availability)</p>
                    <p className="text-xs text-slate-200 leading-relaxed mt-0.5">
                      {personal.location}
                    </p>
                  </div>
                </div>

                {/* Work Status */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-emerald-400 font-mono">สถานะการทำงาน</p>
                    <p className="text-xs font-semibold text-emerald-300">
                      พร้อมเริ่มงานทันที (Immediate Availability)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Download Action Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900 to-indigo-950/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ดาวน์โหลดเรซูเม่ (Resume PDF)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    เปิดพรีวิวและดาวน์โหลดเอกสารประวัติการทำงานฉบับสมบูรณ์ของ กิตติศักดิ์ สัพโส
                  </p>
                </div>
              </div>

              <button
                onClick={onDownloadResume}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>เปิดดูและดาวน์โหลดเรซูเม่ (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message Form (3 columns) */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold text-white">ส่งข้อความติดต่อ (Direct Message)</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                กรอกข้อความเพื่อนัดสัมภาษณ์งาน ข้อความจะส่งตรงถึงอีเมล{" "}
                <span className="text-sky-400 font-mono font-medium">gengkittisak@gmail.com</span> ทันที
              </p>

              {/* Success Notification */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">ส่งข้อความสำเร็จเรียบร้อยแล้ว!</p>
                    <p className="text-emerald-200/80 mt-0.5">
                      ข้อความถูกส่งไปยังอีเมลของคุณกิตติศักดิ์แล้ว ผมจะรีบติดต่อกลับโดยเร็วที่สุดครับ
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">เกิดข้อผิดพลาด</p>
                    <p className="text-red-200/80 mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      ชื่อ-นามสกุล / บริษัทผู้ติดต่อ <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. คุณสมชาย (HR Company X)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      อีเมลสำหรับติดต่อกลับ <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hr@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    หัวข้อเรื่อง <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="e.g. สนใจนัดสัมภาษณ์งานตำแหน่ง IT Support & QA / Team Lead"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    รายละเอียดข้อความ <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="พิมพ์รายละเอียดตำแหน่งงาน หรือข้อความที่ต้องการติดต่อที่นี่..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      กำลังส่งข้อความเข้าอีเมล...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ส่งข้อความเข้าอีเมล (Send Message)</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
