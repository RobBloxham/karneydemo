# Karney Plumbing Website

A modern, fast-loading single-page website for Karney Plumbing, a family-owned plumbing company in Tulsa, OK.

## Features

- ⚡ **Fast Loading** - Optimized for sub-2 second load times
- 📱 **Mobile-First** - Responsive design that works on all devices
- 🎨 **Modern Design** - Clean contractor aesthetic with brand colors
- ✨ **Smooth Animations** - Framer Motion animations for enhanced UX
- 🔍 **SEO Optimized** - Proper metadata and semantic HTML

## Tech Stack

- **Next.js 16.0.7** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Brand Colors

- **Primary**: #E31E24 (Red)
- **Secondary**: #1A1A1A (Black)
- **Accent**: #F5F5F5 (Off-white)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form section
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## Performance Optimizations

- Next.js automatic code splitting
- Optimized images (when added)
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- Smooth scroll behavior
- Lazy loading animations

## Adding a Hero Background Image

To add a custom hero background image:

1. Place your image in the `public/` directory (e.g., `hero-bg.jpg` or `hero-bg.webp`)
2. Update `components/Hero.tsx` line 25, replace the `backgroundImage` style with:
   ```tsx
   style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
   ```

The component includes a darkened overlay (70% opacity) to ensure text readability over any background image.

## License

© 2024 Karney Plumbing. All rights reserved.

# karneydemo
