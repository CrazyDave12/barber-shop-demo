# The Sovereign — Barbershop Demo Website

## What It Is
A premium barbershop demo website built to showcase as a portfolio piece to prospective clients. Features a full dark-gold aesthetic, scroll animations, and a complete multi-section layout.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond (display/headings) + Inter (body) via Google Fonts
- **Images**: picsum.photos for gallery placeholders
- **Deployment**: Vercel (ready to deploy)

## Sample Business
- **Name**: The Sovereign Barber Co.
- **Location**: 127 Mayfair Blvd, New York, NY 10001
- **Phone**: (212) 555-0147
- **Email**: hello@thesovereign.com

## File Structure
```
barber-shop-demo/
├── app/
│   ├── layout.tsx          ← Fonts, metadata, root layout
│   ├── page.tsx            ← Page assembly
│   ├── globals.css         ← Dark theme, animations
│   └── components/
│       ├── Reveal.tsx      ← IntersectionObserver scroll reveal wrapper
│       ├── Navbar.tsx      ← Fixed nav, scroll effect, mobile drawer
│       ├── Hero.tsx        ← Full-viewport hero with animated text
│       ├── Ticker.tsx      ← Gold scrolling text banner
│       ├── About.tsx       ← About section with decorative emblem + stats
│       ├── Services.tsx    ← 6 service cards
│       ├── Team.tsx        ← 4 barber cards with CSS avatars
│       ├── Gallery.tsx     ← 9-image grid (picsum, grayscale on hover)
│       ├── Testimonials.tsx← 4 review cards
│       ├── Contact.tsx     ← Contact info + booking form with success state
│       └── Footer.tsx      ← Footer with nav, contact, social
├── package.json
├── tailwind.config.ts
└── project.md
```

## Key Decisions
- Used Cormorant Garamond for a luxury serif display feel, paired with Inter for readability
- Team photos are CSS-based (gradient + initials) rather than placeholder photos — looks more intentional and premium
- Gallery uses picsum.photos with grayscale filter; color reveals on hover for interactivity
- Scroll reveal uses IntersectionObserver (no library needed)
- Ticker/marquee is pure CSS animation via Tailwind

## To Run
```bash
cd Projects/barber-shop-demo
npm install
npm run dev
```
Then open http://localhost:3000

## Links
- GitHub: (to be set up)
- Vercel URL: (to be deployed)
