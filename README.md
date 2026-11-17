# Personal Portfolio

Henry Chen's portfolio: a single scroll-driven page with a WebGL glass object, built with Next.js.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Repository Structure

```
src/
├── app/
│   ├── layout.tsx          # Font, metadata, analytics
│   ├── page.tsx            # Page markup
│   └── globals.css         # All styles; scroll motion is CSS driven by --p
├── components/
│   ├── Scene.tsx           # three.js glass object and the intro reveal
│   └── ScrollProgress.tsx  # Writes scroll progress into CSS variables
├── lib/
│   ├── content.ts          # Experience, projects, links: edit this to change content
│   └── scroll.ts           # Layout measurement shared by the two components
└── assets/                 # Images
```

## Technologies

- **Next.js** and **TypeScript**
- **three.js** for the 3D object
- Plain CSS for layout and scroll-driven motion
