# 🚀 Idriss Chafik — Portfolio

> A modern, responsive portfolio website built with **Astro** and deployed on **Vercel**.

🌐 **Live:** [https://portfolio-idriss-chafik.vercel.app](https://portfolio-idriss-chafik.vercel.app)

---

## 📁 Project Structure

```text
/
├── public/               # Static assets (favicon, images)
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Publications.astro
│   │   ├── Certifications.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── BackToTop.astro
│   ├── data/
│   │   └── portfolio.ts  # ← Single source of truth for all content
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── vercel.json
├── tsconfig.json
└── package.json
```

## ✏️ How to Update Content

All portfolio content lives in a **single file**: `src/data/portfolio.ts`.

Edit this file to update:
- Personal information (name, title, emails, avatar)
- Statistics
- About cards
- Technical & soft skills
- Education history
- Experience (optional)
- Publications (optional)
- Certifications (optional)
- Projects
- Social links

**Sections without data are automatically hidden** — no need to touch any component.

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally                        |
| `vercel --prod`   | Deploy to Vercel                             |

## 🛠 Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Hosting:** [Vercel](https://vercel.com)
- **Styling:** CSS Custom Properties + Glassmorphism
- **Icons:** Lucide (inline SVG)
- **Fonts:** Inter + JetBrains Mono
- **Language:** TypeScript

## 📄 License

© 2026 Idriss Chafik. All rights reserved.

