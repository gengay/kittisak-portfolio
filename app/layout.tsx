import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090D16",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "กิตติศักดิ์ สัพโส (Kittisak Sapphaso) | IT Support & QA Portfolio",
  description:
    "เว็บพอร์ตโฟลิโอและเรซูเม่ออนไลน์ของ กิตติศักดิ์ สัพโส — ผู้เชี่ยวชาญด้าน IT Support, QA & Tester และ Team Lead Customer Service ประสบการณ์รวมกว่า 7 ปี พร้อมเริ่มงานทันที",
  keywords: [
    "กิตติศักดิ์ สัพโส",
    "Kittisak Sapphaso",
    "IT Support",
    "QA Tester",
    "Software Testing",
    "Team Lead",
    "Customer Support",
    "Help Desk",
    "Test Cases",
    "Requirement Gathering",
    "SLA Management",
  ],
  authors: [{ name: "กิตติศักดิ์ สัพโส (Kittisak Sapphaso)" }],
  openGraph: {
    title: "กิตติศักดิ์ สัพโส (Kittisak Sapphaso) | IT Support & QA Portfolio",
    description:
      "ผู้เชี่ยวชาญด้าน IT Support, QA & Tester และ Team Lead Customer Service ประสบการณ์รวมกว่า 7 ปี พร้อมเริ่มงานทันที",
    siteName: "Kittisak Sapphaso Portfolio",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "กิตติศักดิ์ สัพโส | IT Support & QA Portfolio",
    description:
      "ผู้เชี่ยวชาญด้าน IT Support, QA & Tester และ Team Lead Customer Service ประสบการณ์รวมกว่า 7 ปี",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
