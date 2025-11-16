# Personal Portfolio

Personal portfolio website built with Next.js, showcasing my work experience, projects, skills, and background as a software developer.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load custom fonts (Gambarino and Roboto Slab).

## Repository Structure

```
personal-portfolio/
├── public/                 # Static assets (images, icons, logos)
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx     # Root layout component
│   │   ├── page.tsx       # Main portfolio page
│   │   └── globals.css    # Global styles
│   ├── components/          # React components
│   │   ├── Bio/           # About Me section
│   │   ├── Card/          # Project card component
│   │   ├── Contact/       # Contact section
│   │   ├── Experience/    # Skills showcase
│   │   ├── Header/        # Site header
│   │   ├── Home/          # Landing/home section
│   │   ├── Nav/           # Navigation component
│   │   ├── Projects/      # Projects section
│   │   ├── WorkExperience/ # Work experience section
│   │   └── ui/            # Reusable UI components (shadcn/ui)
│   ├── lib/               # Utility libraries
│   │   └── utils.ts       # Helper functions
│   └── utils/             # Utilities and constants
│       ├── constants.ts   # Project data, work experience, navigation
│       ├── fadein.ts      # Animation utilities
│       └── fonts/         # Custom font files
├── components.json        # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Technologies

- **Next.js** - React framework for the portfolio
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Scroll-based animations
- **Radix UI** - Accessible UI components
