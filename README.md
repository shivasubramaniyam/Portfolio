# Portfolio — Shiva Subramaniyam

**Live:** [shivasubramaniyams.vercel.app](https://shivasubramaniyams.vercel.app/)

A personal developer portfolio built with Next.js 15, showcasing Web3 identity tools, real-time systems, and full-stack applications. Features a Playground section with live interactive demos.

## Features

- **Hero section** — bold typography, positioning statement, and CTAs
- **Interactive Playground** — embedded live demos (Weather App, E-Commerce API docs)
- **Project case studies** — problem statements, contributions, and tech stack per project
- **Experience timeline** — visual timeline with role history and downloadable resume
- **Skills proficiency tiers** — Core / Built With / Tools / Exploring
- **Dark/Light theme** — class-based with next-themes, system preference detection
- **Responsive** — mobile-first layout, sticky nav with blur backdrop
- **Visitor counter** — persistent count via MongoDB
- **Weather widget** — real-time weather in header via OpenWeatherMap API
- **SEO** — structured data (Person + CreativeWork schemas), OpenGraph, sitemap, robots.txt
- **AI-friendly** — llms.txt for LLM indexing

## Tech Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Framework  | Next.js 15 (App Router)     |
| Language   | TypeScript                  |
| UI         | Shadcn UI + Tailwind CSS v4 |
| Animations | motion (Framer Motion)      |
| Theme      | next-themes                 |
| Icons      | Lucide React                |
| Lottie     | lottie-react                |
| Database   | MongoDB Atlas               |
| Deployment | Vercel                      |

## Architecture

```
app/
├── page.tsx              # Main page — all sections composed here
├── layout.tsx            # Root layout — Manrope font, ThemeProvider
├── globals.css           # Tailwind + Shadcn theming CSS variables
├── api/visitor/route.ts  # Visitor count API (MongoDB)
├── sitemap.ts            # Dynamic sitemap
├── robots.ts             # Robots.txt
└── opengraph-image.tsx   # OG image generation
components/
├── Hero.tsx              # Full-bleed hero with CTAs
├── Header.tsx            # Sticky nav + weather widget + theme toggle
├── AboutmeDetails.tsx    # Bio + info cards (hover reveal)
├── TechStack.tsx         # Skill tiers with staggered animations
├── Project.tsx           # Case study cards (problem + role + tech)
├── Playground.tsx        # Tabbed iframe demos (weather + ecommerce API)
├── Education.tsx         # Education timeline with icons
├── Resume.tsx            # Experience timeline + PDF download
├── CoverLetter.tsx       # Let's Connect CTA + social links
├── WeatherAPI.tsx        # Header weather widget (OpenWeatherMap)
├── ThemeToggle.tsx       # Dark/light/system toggle
├── BackToTop.tsx         # Scroll-to-top button
├── ScrollIndicator.tsx   # Top scroll progress bar
└── ui/                   # Shadcn components (Button, Card, Badge, etc.)
```

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Add your keys:
# NEXT_PUBLIC_WEATHER_KEY=your_openweather_api_key
# MONGODB_URI=your_mongodb_connection_uri

# Run dev server
npm run dev
```

## Environment Variables

| Variable                  | Description                     |
| ------------------------- | ------------------------------- |
| `NEXT_PUBLIC_WEATHER_KEY` | OpenWeatherMap API key          |
| `MONGODB_URI`             | MongoDB Atlas connection string |

## Deployment

Deployed on Vercel with automatic CI/CD on every push.

```bash
vercel deploy
```

## Author

**Shiva Subramaniyam S** — Full Stack Developer
[GitHub](https://github.com/shivasubramaniyam) · [LinkedIn](https://linkedin.com/in/shiva-subramaniyam-s)
