<div align="center">
  <img src="https://i.imgur.com/vH1Wb1S.png" alt="ScoutIQ Logo" width="120" />
  <h1>ScoutIQ</h1>
  <p><strong>Enterprise-Grade Football Scouting & Performance Intelligence Platform</strong></p>
  <p><em>Empowering Indian Football with AI-driven analytics, predictive modeling, and intelligent scouting.</em></p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" /></a>
  </p>
</div>

---

## 📖 Overview

**ScoutIQ** is a comprehensive, AI-powered platform designed to revolutionize football scouting and recruitment in India. Built with a focus on the **Indian Super League (ISL)** and the **Indian National Team**, ScoutIQ leverages data analytics, semantic search, and predictive machine learning models to help technical directors, head coaches, and chief scouts make data-driven recruitment decisions.

This project was built as a comprehensive **Final Year Major Project**, demonstrating production-ready software engineering practices, modern UI/UX principles, and advanced system architecture.

## ✨ Core Features

- 🧠 **AI-Powered Chat Assistant**: An interactive NLP chatbot capable of parsing queries, running comparative analyses, and answering complex scouting questions in plain English.
- 📊 **Head-to-Head Compare Engine**: Select any two players from the database to instantly visualize side-by-side attribute comparisons, radar charts, and potential growth metrics.
- 🔮 **Predictive Analytics**: Utilize simulated historical models to forecast player market values, career trajectories, and injury risks.
- 📑 **Automated AI Scout Reports**: Generate and manage comprehensive tactical scouting documents highlighting key strengths, areas for improvement, and tactical fit.
- 🕸️ **Knowledge Graph Integration**: A visual representation of semantic relationships between players, clubs, leagues, and tactical styles.
- 🗃️ **Indian Football Database**: Pre-populated with 24 high-profile Indian and ISL overseas players, complete with real-world photographs, accurate market values (in Crores ₹), and detailed technical attributes.

## 💻 Tech Stack

### Frontend & UI
- **[Next.js (App Router)](https://nextjs.org/)**: React framework for server-rendered applications and optimized routing.
- **[React 18](https://react.dev/)**: Component-based UI rendering.
- **[TypeScript](https://www.typescriptlang.org/)**: Strict static typing for robust, error-free code.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling with custom UI components (`shadcn/ui`).
- **[Framer Motion](https://www.framer.com/motion/)**: Smooth, dynamic layout micro-animations and page transitions.
- **[Lucide Icons](https://lucide.dev/)**: Beautiful, crisp SVG iconography.

## 🚀 Getting Started

To run ScoutIQ locally on your machine, follow these steps:

### Prerequisites
- **Node.js** (v20 or higher recommended)
- **npm** (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/scoutiq.git
   cd scoutiq/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📂 Project Structure

```text
scoutiq/
├── frontend/
│   ├── app/                # Next.js App Router (Pages & Layouts)
│   │   ├── dashboard/      # Protected dashboard modules (Compare, Assistant, Predictions)
│   │   └── page.tsx        # Landing page
│   ├── components/         # Reusable React components
│   │   ├── dashboard/      # Complex dashboard UI logic (Sidebar, Player Cards)
│   │   ├── landing/        # Landing page sections (Hero, Features, FAQ)
│   │   └── ui/             # Core UI components (Buttons, Inputs, Selects)
│   ├── lib/                # Utilities and centralized data definitions
│   │   ├── data.ts         # Player database and statistical mocks
│   │   └── utils.ts        # Helper functions (Tailwind merges, etc.)
│   └── public/             # Static assets
└── README.md               # Project documentation
```

## 🎯 Dashboard Modules

1. **Database Explorer** (`/dashboard/players`): Search, filter, and discover over 12,000 scouted players (simulated).
2. **Head-to-Head Compare** (`/dashboard/compare`): Attribute differentials and side-by-side tactical profiling.
3. **League Analytics** (`/dashboard/analytics`): Macro-level ISL performance trends and goal distribution graphics.
4. **AI Predictions** (`/dashboard/predictions`): Market value forecasts and injury risk monitoring.
5. **AI Scout Reports** (`/dashboard/reports`): Exportable tactical reports generated dynamically.
6. **AI Assistant** (`/dashboard/assistant`): Interactive NLP chat for rapid intelligence gathering.
7. **Knowledge Graph** (`/dashboard/knowledge`): Entity relationship visualization of the scouting ecosystem.

## 👨‍💻 Developed By

Built for a **Final Year Major Project**.
*Focused on bridging the gap between raw data and actionable football intelligence in the Indian sports tech industry.*

---
*If you like this project, please consider giving it a ⭐ on GitHub!*
