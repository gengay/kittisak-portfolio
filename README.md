# Interactive Web Portfolio & Online Resume

Modern, Clean & Interactive Developer Portfolio สร้างขึ้นด้วย **Next.js 14+ (App Router)**, **TypeScript** และ **Tailwind CSS** ในสไตล์ Professional Dark Mode (Slate / Zinc กับ Accent Blue / Indigo)

---

## ✨ Features & Sections

1. **Header & Navigation Bar (`Navbar.tsx`)**:
   - Sticky Glassmorphism Header with backdrop blur
   - Active section highlighting upon scroll
   - Responsive Mobile Navigation Drawer
   - Quick CTA Buttons ("Contact Me", "Resume PDF")

2. **Hero Section (`Hero.tsx`)**:
   - หัวข้อแนะนำตัวและ Target Roles: **Frontend / Full-Stack / QA & IT Support** พร้อมแอนิเมชันสลับตำแหน่งอัตโนมัติ
   - สรุปจุดเด่น: Web Development, Automation Scripting, REST API Testing, Database Management
   - ปุ่ม Call-to-Action: "View Projects", "Download Resume", "Contact Me"
   - Social Profile Links (GitHub, LinkedIn, Email)
   - Micro-interactions: Floating Tech Badges (Next.js, TypeScript, Python, PostgreSQL, Postman, LINE API) และ Pulse Status Indicator

3. **Core Skills & Tech Stack (`Skills.tsx`)**:
   - จัดหมวดหมู่ 3 กลุ่มหลัก:
     - **Frontend & Web**: Next.js 14, React, TypeScript, Tailwind CSS, Modern CSS, State Management
     - **Backend & Database**: Python, PostgreSQL & SQL, Google Apps Script (GAS), REST API & Postman, Node.js, Webhooks
     - **Other Tools & Platforms**: Git & GitHub, VS Code, LINE Messaging API, App Store Connect & TestFlight, Chrome DevTools, Manual QA
   - ระบบ Interactive Tabs และช่อง Search ค้นหาทักษะแบบ Real-time พร้อม Level Badges (Advanced / Proficient)

4. **Featured Projects (`Projects.tsx`)**:
   - ตัวกรองผลงานตามหมวดหมู่ (All, Web, Automation, Mobile, QA & Testing)
   - การ์ดผลงานพร้อม Tag, Live Demo Link, GitHub Link และ Metric ความสำเร็จ
   - **Interactive Modal สำหรับ QA Testing**: สามารถคลิกเปิดดูตัวอย่าง Test Execution Matrix (Positive, Negative, Security) และตัวอย่าง Postman Test Assertion Script ได้ทันที

5. **Work Experience (`Experience.tsx`)**:
   - Vertical Timeline แสดงประวัติการทำงานย้อนหลัง:
     - **Team Lead & Senior IT Operations**
     - **IT Support Specialist**
     - **Technical Support & Automation Developer**
   - ระบุ Key Achievements และ Automation Impact เช่น ลดเวลาทำรายงานลง 80%, ลดเวลา Onboarding ลง 40%, SLA 98%+

6. **Contact Section (`Contact.tsx`)**:
   - ช่องทางติดต่อ (Phone: 095-304-4906, Email: gengkittisak@gmail.com, Location)
   - ปุ่มคลิกเดียวเพื่อโทรออก และปุ่มคัดลอกเบอร์/อีเมลพร้อมแจ้งเตือน
   - **Direct Message Form เชื่อมต่อ Web3Forms จริง**: เมื่อผู้ใช้กรอกข้อความและกดส่ง ข้อความจะถูกส่งตรงเข้าอีเมล `gengkittisak@gmail.com` ทันที
   - ปุ่มดาวน์โหลด Resume PDF และเปิดพรีวิวแบบพิมพ์ได้

7. **Resume Preview Modal (`ResumeModal.tsx`)**:
   - ป๊อปอัปพรีวิว Resume ฉบับย่อสวยงาม พร้อมปุ่ม Print / Save as PDF และ Request ผ่านอีเมล

---

## 🚀 Quick Start Guide

### 1. ติดตั้ง Dependencies
เปิด Terminal ในโฟลเดอร์โปรเจกต์:

```bash
cd "C:\Users\Geng AY\.gemini\antigravity\scratch\portfolio-resume"
npm install
```

### 2. ตั้งค่า Web3Forms API Key
ก่อนรันโปรเจกต์ ให้สร้างไฟล์ `.env.local` หรือแก้ไข `.env` แล้วใส่ key จริงจาก Web3Forms:

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_real_web3forms_uuid_here
```

> หากยังคงเป็นค่า placeholder เช่น `your_web3forms_access_key_here` หรือ UUID ที่ไม่ถูกต้อง ฟอร์มส่งข้อความจะไม่สามารถส่งอีเมลได้

### 3. รัน Local Development Server
```bash
npm run dev
```

เปิดบราวเซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### 3. Build สำหรับ Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
portfolio-resume/
├── app/
│   ├── globals.css         # Custom animations, scrollbar, Tailwind base
│   ├── layout.tsx          # Root layout & SEO Metadata
│   └── page.tsx            # Main Single-page assembling all components
├── components/
│   ├── Navbar.tsx          # Navigation header with smooth scroll & mobile menu
│   ├── Hero.tsx            # Hero banner, role cycler, floating badges
│   ├── Skills.tsx          # Skills grid with category filter & live search
│   ├── Projects.tsx        # Project showcase with interactive QA modal
│   ├── Experience.tsx      # Vertical timeline with achievements
│   ├── Contact.tsx         # Contact info, copy email, message form
│   ├── ResumeModal.tsx     # Quick resume preview & print dialog
│   └── Footer.tsx          # Copyright & back-to-top button
├── data/
│   └── portfolioData.ts    # Centralized data model for easy editing
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ How to Customize Data

คุณสามารถแก้ไขข้อมูลส่วนตัว ผลงาน ประวัติการทำงาน และทักษะทั้งหมดได้ง่ายๆ เพียงแก้ไขไฟล์:
`data/portfolioData.ts`

ทุก Component จะดึงข้อมูลจากไฟล์นี้ไปแสดงผลโดยอัตโนมัติ!
