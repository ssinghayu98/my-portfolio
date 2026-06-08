# Ayush Singh — Portfolio

Dark futuristic personal portfolio built with React + Vite + Tailwind + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Navigate into folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
# Output in /dist folder
```

## ☁️ Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — framework: Vite, output: dist
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Framework: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click Deploy ✓

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom animated cursor
│   │   ├── Navbar.jsx       # Fixed navigation
│   │   ├── Hero.jsx         # Landing hero with particle canvas
│   │   ├── Skills.jsx       # Tech stack grid
│   │   ├── Experience.jsx   # LG Electronics internship
│   │   ├── Projects.jsx     # Banking (hero) + MediaFlow + YT Music
│   │   └── Contact.jsx      # Contact info + footer
│   ├── App.jsx              # Root with loading screen
│   ├── index.css            # Tailwind + custom globals
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ✏️ Customise

- Update project links/descriptions in `src/components/Projects.jsx`
- Update skills in `src/components/Skills.jsx`  
- Swap resume PDF: place `resume.pdf` in `/public/`
- Colors: edit CSS variables in `src/index.css`

## 🛠️ Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11** (ready to use — import from 'framer-motion')
- **Lucide React** icons
- **JetBrains Mono** + **Syne** + **DM Sans** fonts (Google Fonts)
