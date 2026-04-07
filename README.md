# Mannah Real Estate — Standalone Web Project

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- lucide-react (icons)
- Google Fonts (Playfair Display + Inter)

---

## 🚀 Run Locally

```bash
npm install
npm run dev
# Open http://localhost:5173
```

---

## 🌐 Deploy to Vercel

### Option A — Via GitHub (Recommended)
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/mannah-realestate.git
git push -u origin main
```
Then: Vercel Dashboard → Add New Project → Import repo
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
mannah-realestate/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vercel.json
└── src/
    ├── main.jsx
    ├── index.css    ← Tailwind + Google Fonts + custom animations
    └── App.jsx      ← Main component (from blog.html)
```

> This is a completely standalone project, separate from mannah-web.
