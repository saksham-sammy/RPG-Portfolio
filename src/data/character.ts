// ─── All of Saksham's data in RPG format ──────────────────────────────────────

export const character = {
  name: "Saksham Sharma",
  title: "The Algorithm Architect",
  primaryClass: "Full Stack Developer",
  secondaryClass: "Cybersecurity Initiate",
  level: 3,
  guild: "PCU Pune · Open Source Legion",
  location: "Pune, Maharashtra, India",
  status: "Open to Internships",
  lore: "A third-year CS student forging digital experiences at the intersection of clean code and thoughtful design. Rumoured to have tamed algorithms, encrypted images, and built entire kingdoms inside Discord servers.",
  stats: {
    hp: { current: 85, max: 100, label: "Stamina" },
    mp: { current: 72, max: 100, label: "Creativity" },
    xp: { current: 6800, next: 10000, label: "XP to Level 4" },
  },
  links: {
    github: "https://github.com/saksham-sammy",
    linkedin: "https://www.linkedin.com/in/saksham-sharma-14sept/",
    email: "sakshamamitsharma@gmail.com",
    portfolio: "https://sakshamsharmaportfolio.vercel.app",
  },
};

// ── Skill level → RPG percentage ──────────────────────────────────────────────
export type SkillLevel = "strong" | "proficient" | "familiar" | "learning";

export const levelToPercent: Record<SkillLevel, number> = {
  strong: 92,
  proficient: 72,
  familiar: 50,
  learning: 28,
};

export const levelToRank: Record<SkillLevel, string> = {
  strong:     "S",
  proficient: "A",
  familiar:   "B",
  learning:   "C",
};

export const levelToColor: Record<SkillLevel, string> = {
  strong:     "#fbbf24", // gold
  proficient: "#c084fc", // purple
  familiar:   "#60a5fa", // blue
  learning:   "#6ee7b7", // green
};

// ── Core Attributes (shown as big stat bars) ──────────────────────────────────
export const coreAttributes = [
  { id: "cpp",    label: "C++",        level: "strong" as SkillLevel,     icon: "⚡", type: "STR" },
  { id: "python", label: "Python",     level: "proficient" as SkillLevel, icon: "🐍", type: "INT" },
  { id: "html",   label: "HTML5",      level: "strong" as SkillLevel,     icon: "🌐", type: "DEX" },
  { id: "css",    label: "CSS3",       level: "proficient" as SkillLevel, icon: "🎨", type: "AGI" },
  { id: "js",     label: "JavaScript", level: "familiar" as SkillLevel,   icon: "✨", type: "INT" },
  { id: "sql",    label: "SQL",        level: "familiar" as SkillLevel,   icon: "🗄️", type: "WIS" },
];

// ── Passive Skills (frameworks/tools) ─────────────────────────────────────────
export const passiveSkills = [
  { name: "React",         level: "learning" as SkillLevel,    icon: "⚛️" },
  { name: "Tailwind CSS",  level: "familiar" as SkillLevel,    icon: "💨" },
  { name: "Next.js",       level: "learning" as SkillLevel,    icon: "▲" },
  { name: "Flask",         level: "familiar" as SkillLevel,    icon: "🧪" },
  { name: "Django",        level: "familiar" as SkillLevel,    icon: "🦄" },
  { name: "Git & GitHub",  level: "proficient" as SkillLevel,  icon: "🔀" },
  { name: "Figma",         level: "familiar" as SkillLevel,    icon: "🖌️" },
  { name: "Linux / RHEL",  level: "familiar" as SkillLevel,    icon: "🐧" },
  { name: "TypeScript",    level: "learning" as SkillLevel,    icon: "📘" },
  { name: "Framer Motion", level: "familiar" as SkillLevel,    icon: "🎬" },
];

// ── Quest Log (Projects) ───────────────────────────────────────────────────────
export type Rarity = "legendary" | "epic" | "rare" | "uncommon";

export interface Quest {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  rarity: Rarity;
  status: "completed" | "in-progress";
  tags: string[];
  github?: string;
  demo?: string;
  reward: string;
}

export const rarityConfig: Record<Rarity, { label: string; color: string; glow: string; border: string }> = {
  legendary: { label: "LEGENDARY", color: "#fbbf24", glow: "rgba(251,191,36,0.35)",  border: "#b8962a" },
  epic:      { label: "EPIC",      color: "#c084fc", glow: "rgba(192,132,252,0.3)",  border: "#7c3aed" },
  rare:      { label: "RARE",      color: "#60a5fa", glow: "rgba(96,165,250,0.25)",  border: "#2563eb" },
  uncommon:  { label: "UNCOMMON",  color: "#4ade80", glow: "rgba(74,222,128,0.2)",   border: "#16a34a" },
};

export const quests: Quest[] = [
  {
    id: "algovision",
    name: "AlgoVision V2",
    subtitle: "Algorithm Visualiser",
    description: "Brought algorithms to life. Built a C++ engine, wrapped it in Flask, animated it in JS. Sorting, searching, linked lists — all rendered in real time.",
    rarity: "legendary",
    status: "completed",
    tags: ["JavaScript", "Python", "Flask", "C++", "Tailwind"],
    github: "https://github.com/saksham-sammy/AlgoVision",
    demo: "https://algo-vision-theta.vercel.app/",
    reward: "Title: Algorithm Architect",
  },
  {
    id: "javavision",
    name: "JavaVision",
    subtitle: "Java Learning Platform",
    description: "Built a universal terminal emulator in JS that simulates Java execution, GUI windows, network operations — all in the browser.",
    rarity: "legendary",
    status: "completed",
    tags: ["Java", "JavaScript", "Python", "Flask"],
    github: "https://github.com/saksham-sammy/JavaVision",
    demo: "https://java-vision-seven.vercel.app/",
    reward: "+500 XP · Skill: Terminal Emulation",
  },
  {
    id: "pyvision",
    name: "PyVision",
    subtitle: "Python Execution Platform",
    description: "A native .ipynb parser with live subprocess streaming to a virtual terminal. Python runs real code in the browser via Serverless Flask.",
    rarity: "legendary",
    status: "completed",
    tags: ["Python", "Flask", "JavaScript"],
    github: "https://github.com/saksham-sammy/PyVision",
    demo: "https://py-vision.vercel.app/",
    reward: "+400 XP · Skill: Serverless Architecture",
  },
  {
    id: "viscrypt",
    name: "VisCrypt",
    subtitle: "Visual Cryptography Tool",
    description: "Encrypted images into pixel-noise shares. Decryptable only by overlaying — zero key, pure mathematics. Threshold cryptographic schemes.",
    rarity: "epic",
    status: "completed",
    tags: ["Python", "Tkinter", "Cryptography", "Image Processing"],
    github: "https://github.com/saksham-sammy/Viscrypt",
    reward: "Title: Cipher Weaver · +350 XP",
  },
  {
    id: "exotica",
    name: "Exotica PCMC Website",
    subtitle: "Official Business Portal",
    description: "Production Next.js site with SSR, TailwindCSS, and Framer Motion animations. Real business, real deployment, real users.",
    rarity: "epic",
    status: "completed",
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "React"],
    demo: "https://exotica-main.vercel.app/",
    reward: "Title: Web Artisan · +300 XP",
  },
  {
    id: "svj",
    name: "SVJ — Jewellers 3D",
    subtitle: "3D Product Showcase",
    description: "WebGL 3D product experience via Spline, embedded in React. Real-time 3D in the browser, zero downloads, smooth Framer Motion transitions.",
    rarity: "epic",
    status: "completed",
    tags: ["React", "Spline 3D", "Vite", "Framer Motion"],
    demo: "https://svj-surajvermajewellers.vercel.app/",
    reward: "Skill: 3D Web Rendering · +280 XP",
  },
  {
    id: "typing-samurai",
    name: "Typing Samurai",
    subtitle: "Speed Trainer",
    description: "Gamified typing speed trainer with real-time WPM, accuracy tracking, custom visual feedback, and local high-score storage.",
    rarity: "rare",
    status: "completed",
    tags: ["Python", "Flask", "JavaScript", "CSS3"],
    github: "https://github.com/saksham-sammy/Typing-Samurai",
    demo: "https://typing-samurai.vercel.app",
    reward: "Skill: Reflexes +10 · +200 XP",
  },
  {
    id: "hostel-dbms",
    name: "Hostel DBMS Portal",
    subtitle: "Database Management System",
    description: "Relational DBMS automating room allocations, fee logs, student registrations. Custom ER models, SQL triggers, and optimised queries.",
    rarity: "rare",
    status: "completed",
    tags: ["Python", "SQL", "CRUD", "Relational DB"],
    github: "https://github.com/saksham-sammy/Hostel-Management-DBMS-Project",
    reward: "Skill: Database Design · +180 XP",
  },
  {
    id: "exactmatch",
    name: "ExactMatch Replace",
    subtitle: "Developer Productivity Tool",
    description: "Precision Find & Replace with 100% 1:1 character mapping, no regex interference. Direct Gemini / Perplexity / ChatGPT integrations.",
    rarity: "rare",
    status: "completed",
    tags: ["JavaScript", "HTML5", "Tailwind CSS"],
    github: "https://github.com/saksham-sammy/ExactMatch-Replace",
    demo: "https://exact-match-replace.vercel.app",
    reward: "Skill: Tool Crafting · +220 XP",
  },
  {
    id: "arcade-hub",
    name: "Arcade Hub",
    subtitle: "Classic Games Collection",
    description: "Snake, Tetris, Tic-Tac-Toe, Memory — all with zero dependencies. Pure vanilla JS game logic with unified retro styling.",
    rarity: "uncommon",
    status: "completed",
    tags: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/saksham-sammy/Arcade-Hub",
    demo: "https://arcade-hub-sigma.vercel.app",
    reward: "Title: Arcade Master · +150 XP",
  },
];

// ── Achievements / Unlocked Abilities ─────────────────────────────────────────
export interface Achievement {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
  tier: "mythic" | "legendary" | "epic" | "rare";
  description: string;
}

export const achievementTier: Record<string, { color: string; border: string }> = {
  mythic:    { color: "#ff6b6b", border: "#cc2222" },
  legendary: { color: "#fbbf24", border: "#b8962a" },
  epic:      { color: "#c084fc", border: "#7c3aed" },
  rare:      { color: "#60a5fa", border: "#2563eb" },
};

export const achievements: Achievement[] = [
  {
    id: "sih",
    name: "Smart India Hackathon 2026",
    issuer: "Govt. of India · MIC",
    year: "2026",
    icon: "🏆",
    tier: "mythic",
    description: "Selected at national level — India's largest student hackathon",
  },
  {
    id: "bosch",
    name: "Operations Intern (Allianze Global · Bosch BGSW)",
    issuer: "Allianze Global Relocations LLP · 6 Days",
    year: "2026",
    icon: "🏭",
    tier: "legendary",
    description: "On-site corporate operations stint (document scanning, data screening & inventory tracking) outsourced at Bosch BGSW Pune",
  },
  {
    id: "google-cybersec",
    name: "Google Cybersecurity Certificate",
    issuer: "Coursera · Google",
    year: "2025",
    icon: "🔐",
    tier: "legendary",
    description: "8-course specialization: security, networks, Linux, Python, SIEM",
  },
  {
    id: "redhat",
    name: "Red Hat Linux & OpenShift",
    issuer: "Red Hat",
    year: "2025",
    icon: "🎩",
    tier: "epic",
    description: "4-course: Linux fundamentals, RHEL sysadmin I & II, OpenShift",
  },
  {
    id: "meta-webdev",
    name: "Meta Web Development",
    issuer: "Coursera · Meta",
    year: "2025",
    icon: "🌐",
    tier: "epic",
    description: "Front-End Dev, Django, Version Control, Full Stack capstone",
  },
  {
    id: "os-spec",
    name: "Operating Systems Specialization",
    issuer: "Coursera",
    year: "2025",
    icon: "💻",
    tier: "epic",
    description: "5 courses: processes, concurrency, memory, persistence, virtualisation",
  },
  {
    id: "python-everybody",
    name: "Python for Everybody",
    issuer: "Coursera · Univ. of Michigan",
    year: "2025",
    icon: "🐍",
    tier: "rare",
    description: "4-course: Python, data structures, web data, SQLite databases",
  },
  {
    id: "quantum",
    name: "Quantum Computing Certificate",
    issuer: "IUCEE",
    year: "2025",
    icon: "⚛️",
    tier: "rare",
    description: "Qubits, superposition, and quantum algorithms workshop",
  },
];

// ── Party Members (Tech Stack shown as party) ─────────────────────────────────
export const partyMembers = [
  { name: "C++",        role: "Tank",        icon: "⚡", hp: 92, class: "STR" },
  { name: "Python",     role: "Mage",        icon: "🐍", hp: 72, class: "INT" },
  { name: "JavaScript", role: "Rogue",       icon: "✨", hp: 55, class: "DEX" },
  { name: "React",      role: "Apprentice",  icon: "⚛️", hp: 35, class: "INT" },
  { name: "Git",        role: "Scribe",      icon: "🔀", hp: 72, class: "WIS" },
  { name: "Flask",      role: "Alchemist",   icon: "🧪", hp: 50, class: "INT" },
];
