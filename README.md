# Personal Portfolio & Professional Resume Website

A modern, high-performance, and visually stunning developer portfolio website built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed to show skills, professional experience, blog topics, and contact integrations with an interactive, premium layout.

---

## 🚀 Key Features

* **Interactive Orbit Galaxy Visualizer**: An engaging, animated 2D solar-system style galaxy displaying tech stack skills orbiting a central profile avatar. Includes custom hover pauses, detailed popover tooltips, and smooth responsive resizing.
* **Responsive Fixed Navigation & Sliding Pill**: A top menu bar that sticks/fixes to the top of the viewport on desktop and tablet screens. Nav link transitions feature a dynamic, absolute sliding background pill that morphs size and tracks active page sections (synced with a `ResizeObserver` listener).
* **Command Menu & Terminal Palette**: A keyboard-accessible Command Palette modal (`Ctrl+K` or button click) allowing search navigation, active logs, theme changing, and responsive command inputs.
* **Adaptive Dark & Light Theme**: Built-in support for theme toggle switches, shifting backgrounds, typography colors, shadows, and canvas assets.
* **SEO Optimized**: Fully optimized layout metadata containing OpenGraph tags, canonical anchors, dynamically generated sitemaps, and indexing robot rules for crawling.
* **Offline Toast Monitor**: Event listener setup to warn visitors of network connection loss.

---

## 🛠️ Technology Stack

* **Core Framework**: React (v19) & Next.js (v16 App Router / Turbopack)
* **Programming Language**: TypeScript
* **Styling Engine**: Tailwind CSS (v4 PostCSS variant)
* **Eslint Rules**: Custom ESLint standard checker
* **Asset Integration**: React SVG Icons & Devicon vectors

---

## ⚙️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.x or above) and npm installed.

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Kavin-Brat/personal-portfolio-2k26.git
   cd personal-portfolio-2k26
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the live site.

### Production Build

Compile and check the production build assets:
```bash
npm run build
```

Run the compiled production server:
```bash
npm run start
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
