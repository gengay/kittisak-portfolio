export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "QA & Testing" | "Support & SLA" | "Documentation" | "Infrastructure";
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  testCasesSample?: {
    testId: string;
    description: string;
    type: "Positive" | "Negative" | "Security" | "UAT";
    status: "PASS" | "AUTOMATED" | "VERIFIED";
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Specialist";
    badgeColor?: string;
    iconName: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "กิตติศักดิ์ สัพโส",
    englishName: "Kittisak Sapphaso (Geng)",
    shortName: "KITTISAK S.",
    initials: "KS",
    titles: [
      "IT Support & QA",
      "QA & Tester",
      "Team Lead Customer Service & Support",
      "Technical Support Specialist",
    ],
    bio: "ผู้เชี่ยวชาญด้าน IT Support และ Customer Service มีประสบการณ์รวมกว่า 7 ปี นำทีม Support ประสานงานระหว่างลูกค้ากับ Developer แก้ไขปัญหาเชิงเทคนิค ทดสอบระบบ (Manual QA & Test Cases) และจัดทำเอกสารคู่มือระบบ มีความรับผิดชอบสูง ปรับตัวเก่ง และสื่อสารได้อย่างมีประสิทธิภาพ",
    location: "พร้อมเริ่มงานทันที | สามารถย้ายไปปฏิบัติงานในกรุงเทพฯ ได้ทันที หรือปฏิบัติงานแบบ Remote",
    currentProvince: "ขอนแก่น / กรุงเทพฯ (พร้อมย้าย)",
    phone: "095-304-4906",
    email: "gengkittisak@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    resumeDownloadUrl: "#",
    statusText: "พร้อมเริ่มงานทันที (Available Immediately / Ready to Relocate to BKK & Remote)",
    education: {
      degree: "ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ (IT)",
      faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
      university: "มหาวิทยาลัยราชภัฏสกลนคร",
      gpa: "GPA 3.16",
      graduationYear: "จบปี 2561",
    },
  },

  skills: [
    {
      title: "IT Support, Help Desk & Infrastructure",
      description: "เชี่ยวชาญการวิเคราะห์ แก้ไขปัญหาฮาร์ดแวร์ ซอฟต์แวร์ เน็ตเวิร์ก และระบบสารสนเทศ",
      skills: [
        { name: "IT Support / Help Desk / On-site", level: "Specialist", iconName: "HelpCircle" },
        { name: "Hardware & Peripheral Maintenance", level: "Advanced", iconName: "Cpu" },
        { name: "Network & LAN/WiFi Troubleshooting", level: "Advanced", iconName: "Network" },
        { name: "Remote Support (AnyDesk, TeamViewer)", level: "Advanced", iconName: "Monitor" },
        { name: "Hospital & Enterprise System Support", level: "Proficient", iconName: "Server" },
        { name: "SLA Management & Ticket Resolution", level: "Specialist", iconName: "Clock" },
      ],
    },
    {
      title: "QA, Software Testing & Requirements",
      description: "การออกแบบและควบคุมคุณภาพซอฟต์แวร์ ทดสอบระบบ และประสานงานลูกค้ากับ Developer",
      skills: [
        { name: "Software Testing & Test Cases Design", level: "Advanced", iconName: "CheckSquare" },
        { name: "Manual Testing & Regression Test", level: "Advanced", iconName: "ShieldCheck" },
        { name: "Requirement Gathering from Clients", level: "Specialist", iconName: "Users" },
        { name: "Bug Tracking & Defect Lifecycle", level: "Advanced", iconName: "Bug" },
        { name: "User Acceptance Testing (UAT)", level: "Advanced", iconName: "FileCheck" },
        { name: "REST API Testing & Webhook Basics", level: "Proficient", iconName: "Zap" },
      ],
    },
    {
      title: "Leadership, Tools & Documentation",
      description: "การบริหารจัดการทีม การสื่อสารข้ามสายงาน และการจัดทำคู่มือระบบมาตรฐาน",
      skills: [
        { name: "Team Leadership & People Management", level: "Specialist", iconName: "Award" },
        { name: "User Manual & System Documentation", level: "Specialist", iconName: "BookOpen" },
        { name: "Trello / ClickUp / Task Management", level: "Advanced", iconName: "Trello" },
        { name: "Slack & Team Communication", level: "Advanced", iconName: "MessageSquare" },
        { name: "Cross-functional Coordination (Client-Dev)", level: "Specialist", iconName: "GitMerge" },
        { name: "Computer Literacy Training & Coaching", level: "Advanced", iconName: "GraduationCap" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "project-1",
      title: "Customer Support SLA & Incident Resolution Optimization",
      subtitle: "Team Leadership + Incident Troubleshooting Workflow",
      description:
        "การปรับปรุงกระบวนการรับแจ้งและแก้ไขปัญหาเชิงเทคนิคของทีม Support โดยสร้างมาตรฐาน SOPs และระบบคัดกรองปัญหา ทำให้ทีมสามารถแก้ไขปัญหาได้รวดเร็วและเป็นระบบมากขึ้น",
      category: "Support & SLA",
      tags: ["IT Support", "SLA Management", "Team Leadership", "Incident Management", "AnyDesk"],
      metrics: "⚡ ลดเวลาแก้ปัญหาจาก 45 → 30 นาที และลดเคสซ้ำลง 20%",
      demoUrl: "tel:0953044906",
      highlights: [
        "บริหารจัดการทีม Customer Support ในการดูแลและแก้ไขปัญหาเชิงเทคนิคระดับ Tier 1/2/3",
        "จัดทำ Flowchart และ Checklists การตรวจสอบปัญหาเบื้องต้น ทำให้ลดการส่งเคสซ้ำซ้อนไปยัง Developer",
        "ใช้เครื่องมือ Remote Support (AnyDesk, TeamViewer) เข้าแก้ปัญหาหน้างานให้ลูกค้าอย่างมีประสิทธิภาพ",
      ],
    },
    {
      id: "project-2",
      title: "Software QA Testing Suite & Test Cases Architecture",
      subtitle: "Manual Testing + Requirement Gathering + Defect Tracking",
      description:
        "การร่วมทดสอบระบบซอฟต์แวร์ขององค์กรอย่างเข้มข้น จัดทำ Test Cases ครอบคลุมทุก Scenario ก่อนส่งมอบระบบให้ลูกค้า พร้อมเป็นตัวกลางรวบรวม Requirement จากลูกค้าส่งต่อให้ Developer",
      category: "QA & Testing",
      tags: ["Software Testing", "Test Cases", "Manual Test", "Requirement Gathering", "UAT"],
      metrics: "🛡️ ตรวจสอบความถูกต้องของระบบและลด Bug ในช่วง Release ได้อย่างมีนัยสำคัญ",
      highlights: [
        "จัดทำ Test Cases ทั้งรูปแบบ Positive, Negative, Boundary Values และ UAT Scenarios",
        "ประสานงานระหว่างลูกค้ากับ Developer เพื่อแปลง Business Needs ให้เป็น Technical Requirements",
        "ตรวจสอบความถูกต้องของฟังก์ชันและทำ Regression Testing ทุกครั้งที่มีการอัปเดตระบบ",
      ],
      testCasesSample: [
        {
          testId: "TC-REQ-001",
          description: "ตรวจสอบการทำงานของระบบตามข้อกำหนดความต้องการใหม่ของลูกค้า (Business Requirement)",
          type: "Positive",
          status: "PASS",
        },
        {
          testId: "TC-SUP-002",
          description: "ทดสอบการรับส่งข้อมูลข้อผิดพลาด (Error Handling) เมื่อผู้ใช้งานกรอกข้อมูลไม่ถูกต้อง",
          type: "Negative",
          status: "VERIFIED",
        },
        {
          testId: "TC-SEC-003",
          description: "ทดสอบสิทธิ์การเข้าถึงเมนูและการจัดการสิทธิ์ผู้ใช้งาน (Role-Based Access Control)",
          type: "Security",
          status: "PASS",
        },
        {
          testId: "TC-UAT-004",
          description: "การทดสอบความพร้อมใช้งานร่วมกับผู้ใช้งานจริงก่อนขึ้นระบบ Production (UAT Sign-off)",
          type: "UAT",
          status: "VERIFIED",
        },
      ],
    },
    {
      id: "project-3",
      title: "Enterprise User Manual & Standard Operating Documentation",
      subtitle: "Technical Writing + System Onboarding & Training Materials",
      description:
        "โครงการจัดทำเอกสารคู่มือการใช้งานระบบ (User Manual) และคู่มือการปฏิบัติงานสำหรับผู้ใช้งานและทีมงานภายใน เพื่อยกระดับการให้บริการและช่วยให้ผู้ใช้งานเรียนรู้ระบบได้รวดเร็ว",
      category: "Documentation",
      tags: ["User Manual", "Technical Documentation", "SOPs", "Training", "EPUB 3"],
      metrics: "📖 ลดข้อสงสัยและคำถามเบื้องต้นจากผู้ใช้งานลงกว่า 35%",
      highlights: [
        "เขียนเอกสารแนะนำการใช้งานระบบแบบ Step-by-Step พร้อมภาพประกอบที่ชัดเจนและเข้าใจง่าย",
        "จัดทำเอกสาร Release Notes สรุปฟีเจอร์ใหม่ให้กับลูกค้าและทีมงานในทุกรอบอัปเดต",
        "ประยุกต์ใช้ความรู้ด้านการสร้างสื่ออิเล็กทรอนิกส์มาตรฐาน EPUB 3 เพื่อเผยแพร่เอกสารในรูปแบบดิจิทัล",
      ],
    },
    {
      id: "project-4",
      title: "Educational & Hospital IT Systems Infrastructure Support",
      subtitle: "Hardware & Network Maintenance + Laboratory & Medical System Support",
      description:
        "การบริหารจัดการและซ่อมบำรุงระบบเครือข่ายและเครื่องคอมพิวเตอร์ระดับสถาบันการศึกษาและโรงพยาบาล ดูแลห้องปฏิบัติการ และสนับสนุนระบบสารสนเทศให้บุคลากรทำงานได้อย่างต่อเนื่อง",
      category: "Infrastructure",
      tags: ["Network Support", "Hardware", "Hospital HIS", "Lab Maintenance", "IT Administration"],
      metrics: "🏆 ครูผู้ควบคุมทีมแข่งขันทักษะวิชาชีพระดับภูมิภาค และควบคุมทีมพิมพ์ดีดไทย OPEN HOUSE RMUTI",
      highlights: [
        "ดูแล ติดตั้ง และแก้ไขปัญหาระบบสารสนเทศโรงพยาบาล สนับสนุนบุคลากรทางการแพทย์อย่างต่อเนื่อง",
        "ซ่อมบำรุงและดูแลเครื่องคอมพิวเตอร์ระบบเครือข่ายห้องปฏิบัติการคอมพิวเตอร์กว่า 100+ เครื่อง",
        "ฝึกอบรมนักเรียนนักศึกษาและเป็นตัวแทนควบคุมทีมเข้าร่วมการแข่งขันระดับภูมิภาค",
      ],
    },
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Team Lead Customer Service & Support",
      company: "สวิตต์เทคกรุ๊ป จำกัด (Swit Tech Group Co., Ltd.)",
      period: "มี.ค. 2564 – เม.ย. 2569 (ปัจจุบัน)",
      location: "ขอนแก่น",
      type: "Full-time",
      description:
        "เป็นผู้นำทีม Customer Support ดูแลและแก้ไขปัญหาเชิงเทคนิค ประสานงานระหว่างลูกค้ากับ Developer รวบรวม Requirement ร่วมทดสอบระบบ และจัดทำเอกสารคู่มือระบบ",
      achievements: [
        "ลดเวลาแก้ไขปัญหาให้ลูกค้าจาก 45 นาที เหลือเพียง 30 นาที และลดเคสปัญหาซ้ำลงได้ถึง 20%",
        "เป็นตัวกลางสำคัญในการประสานงานระหว่างลูกค้ากับทีม Developer เพื่อรวบรวมและวิเคราะห์ Requirement ได้อย่างแม่นยำ",
        "ร่วมทดสอบระบบ จัดทำ Test Cases และ Manual Test เพื่อให้มั่นใจในคุณภาพก่อนส่งมอบงาน",
        "จัดทำ User Manual และ Documentation ครบวงจร ช่วยให้ลูกค้าใช้งานระบบได้อย่างราบรื่น",
      ],
      technologies: ["Team Leadership", "Software Testing", "Test Cases", "Requirement Gathering", "User Manual", "AnyDesk", "ClickUp", "Slack"],
    },
    {
      id: "exp-2",
      role: "ครูคอมพิวเตอร์ & ผู้ดูแลระบบสารสนเทศ",
      company: "วิทยาลัยเทคโนโลยีเทคนิควิชาชีพสกลนคร",
      period: "ต.ค. 2561 – ก.พ. 2564",
      location: "สกลนคร",
      type: "Full-time",
      description:
        "สอนวิชาคอมพิวเตอร์พื้นฐานและเทคโนโลยีสารสนเทศ ดูแลและซ่อมบำรุงเครื่องคอมพิวเตอร์และระบบเครือข่ายภายในวิทยาลัย พร้อมควบคุมทีมนักเรียนเข้าแข่งขันระดับภูมิภาค",
      achievements: [
        "ครูผู้ควบคุมทีมแข่งขันพิมพ์ดีดไทย ในงาน OPEN HOUSE RMUTI",
        "ควบคุมดูแลทีมนักเรียนเข้าแข่งขันแข่งขันทักษะวิชาชีพระดับภูมิภาค",
        "ดูแล ซ่อมบำรุงเครื่องคอมพิวเตอร์ และบริหารจัดการระบบเครือข่ายคอมพิวเตอร์ห้องแล็บอย่างมีประสิทธิภาพ",
      ],
      technologies: ["IT Teaching", "Network Troubleshooting", "Hardware Repair", "Mentoring", "Lab Administration"],
    },
    {
      id: "exp-3",
      role: "IT Support (ฝึกงาน)",
      company: "ศูนย์หัวใจสิริกิติ์ ภาคตะวันออกเฉียงเหนือ",
      period: "พ.ค. 2560 – ส.ค. 2560",
      location: "ขอนแก่น",
      type: "Internship",
      description:
        "ดูแล ติดตั้ง และแก้ไขปัญหาระบบสารสนเทศโรงพยาบาล ซ่อมบำรุงอุปกรณ์คอมพิวเตอร์และอุปกรณ์ต่อพ่วง พร้อมสนับสนุนการใช้งานระบบให้แก่บุคลากรทางการแพทย์",
      achievements: [
        "สนับสนุนการใช้งานระบบสารสนเทศโรงพยาบาลและแก้ไขปัญหาขัดข้องทางเทคนิคได้อย่างรวดเร็ว",
        "ตรวจเช็กและซ่อมบำรุงคอมพิวเตอร์ อุปกรณ์เน็ตเวิร์ก และอุปกรณ์ต่อพ่วงในหอผู้ป่วยและแผนกต่างๆ",
        "ได้รับคำชมเชยด้านความรับผิดชอบและการประสานงานอย่างสุภาพกับทีมแพทย์และพยาบาล",
      ],
      technologies: ["Hospital IT Support", "Hardware Maintenance", "Troubleshooting", "User Support", "Teamwork"],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      title: "ตัวแทนทีม IT_CM13 ประกวดสื่อ EPUB 3 ระดับประเทศ",
      issuer: "NECTEC (ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ)",
      description: "ตัวแทนเข้าร่วมการประกวดสร้างสื่อดิจิทัลและอีบุ๊กมาตรฐานสากล EPUB 3 ระดับประเทศ",
    },
    {
      title: "วุฒิบัตรอบรมสร้างสื่ออิเล็กทรอนิกส์ มาตรฐาน EPUB 3",
      issuer: "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม / NECTEC",
      description: "ผ่านการอบรมเชิงปฏิบัติการการพัฒนาและออกแบบสื่ออิเล็กทรอนิกส์มาตรฐานเปิด EPUB 3",
    },
    {
      title: "ผู้ช่วยวิทยากรโครงการพัฒนาโปรแกรม Android",
      issuer: "สาขาเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏสกลนคร",
      description: "ทำหน้าที่ถ่ายทอดความรู้ ให้คำปรึกษา และดูแลผู้เข้ารับการอบรมด้านการพัฒนาแอปพลิเคชันบนระบบปฏิบัติการ Android",
    },
    {
      title: "วุฒิบัตรผู้บังคับบัญชาลูกเสืออนุรักษ์สิ่งแวดล้อม",
      issuer: "สำนักงานลูกเสือแห่งชาติ",
      description: "ผ่านการฝึกอบรมการเป็นผู้นำ กิจกรรมสร้างสรรค์ และการบริหารจัดการค่ายเยาวชนอนุรักษ์สิ่งแวดล้อม",
    },
  ] as CertificationItem[],
};
