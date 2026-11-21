# Gamified RPG Developer Portfolio — Saksham Sharma (YuRe1)

## 📥 Direct Download

[![Download ZIP](https://img.shields.io/badge/Download-Source_Code_(ZIP)-2ea44f?style=for-the-badge&logo=github)](https://github.com/saksham-sammy/RPG-Portfolio/archive/refs/heads/main.zip)

> **Quick Download**: Click the badge above to download the latest source code as a `.zip` archive directly from GitHub, or use **Code > Download ZIP**.

---


An interactive **RPG-Themed Developer Portfolio** built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Vite 8**. Designed like a classic fantasy/cyberpunk RPG character menu, it transforms projects, technical skills, achievements, and collaborations into interactive quests, character attributes, trophies, and party members.

---

## Key Features

- **Character Status Header (`src/components/CharacterHeader.tsx`)**:
  - Displays player avatar, level, class title, HP/MP/XP progress bars, and active buffs/status badges.
- **Quest Log — Projects Showcase (`src/components/QuestLog.tsx`)**:
  - Presents featured engineering projects as Main Quests and Side Quests with difficulty ratings, loot/tech-stack tags, completion status, and live demo / GitHub links.
- **Attribute & Skill Tree Panel (`src/components/StatsPanel.tsx`)**:
  - Visualizes core engineering proficiencies (Frontend, Backend, AI/ML, Systems, DevOps) as RPG stats and skill mastery gauges.
- **Trophies & Achievements (`src/components/AchievementsPanel.tsx`)**:
  - Highlights hackathons, certifications, and milestones with rarity tiers (`Legendary`, `Epic`, `Rare`).
- **Party & Guild Panel (`src/components/PartyPanel.tsx`)**:
  - Showcases team collaborations, roles, and community contributions.
- **Send a Raven / Guild Contact (`src/components/ContactPanel.tsx`)**:
  - Interactive contact terminal and social links for recruiting or collaborating with the developer.

---

## Tech Stack

- **Framework**: React 19 + TypeScript 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion 13
- **Bundler & Linter**: Vite 8 + Oxlint
- **Deployment**: Vercel (`vercel.json` included for SPA routing)

---

## Project Structure

```text
rpg-portfolio/
├── src/
│   ├── assets/                  # Character portraits & icons
│   ├── components/
│   │   ├── CharacterHeader.tsx  # Level, XP, HP/MP bars & character bio
│   │   ├── QuestLog.tsx         # Interactive project quests viewer
│   │   ├── StatsPanel.tsx       # Technical skills & attribute bars
│   │   ├── AchievementsPanel.tsx# Unlockable badges & milestones
│   │   ├── PartyPanel.tsx       # Collaborations & guild info
│   │   └── ContactPanel.tsx     # Contact & social links
│   ├── data/
│   │   └── character.ts         # Centralized portfolio data (quests, stats, achievements)
│   ├── App.tsx                  # Main RPG HUD layout & tab navigation
│   └── main.tsx                 # React DOM root
├── index.html                   # App HTML shell
├── vercel.json                  # Vercel SPA rewrite configuration
└── package.json                 # Scripts & dependencies
```

---

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```