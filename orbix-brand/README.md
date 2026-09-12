# ORBIX Brand - Setup & Deployment Guide

## Project Overview
A production-ready, highly interactive brand landing page built with Next.js (App Router), featuring:
- **Smooth Scrolling**: Lenis integration with GSAP ScrollTrigger synchronization
- **Preloader**: SVG signature animation with choreographed intro sequence
- **3D Interactive Canvas**: React Three Fiber scene with floating geometry and mouse parallax
- **Modern Layout**: Tailwind CSS responsive design with dark aesthetic
- **Client-Side Rendering**: Proper `use client` directives to avoid SSR hydration issues

---

## Quick Start

### 1. Install Dependencies
All dependencies are already installed. If you need to reinstall:
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the site.

### 3. Production Build
```bash
npm run build
npm start
```

---

## Project Structure

```
orbix-brand/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & Tailwind config
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main landing page component
│   └── components/
│       ├── Preloader.tsx     # SVG handwriting preloader with GSAP timeline
│       ├── Scene3D.tsx       # R3F 3D canvas with interactive mesh
│       └── SmoothScroll.tsx  # Lenis wrapper with ScrollTrigger sync
├── public/                   # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Key Components

### SmoothScroll (`src/components/SmoothScroll.tsx`)
- Wraps the entire application for smooth scrolling
- Initializes Lenis with optimized settings for v1.x API
- Synchronizes with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- Uses `requestAnimationFrame` for smooth scroll interpolation

### Preloader (`src/components/Preloader.tsx`)
- Displays centered SVG logo with handwriting animation
- Uses `@react-three/drei` `useProgress()` hook for asset loading state
- GSAP timeline sequence:
  1. Locks body scroll
  2. Animates SVG stroke-dashoffset (handwriting effect)
  3. Pauses 0.4s after completion
  4. Scales up and fades out logo
  5. Slides white curtain upward (yPercent: -100)
  6. Unlocks body scroll
  7. Triggers parent callback for hero animations

### Scene3D (`src/components/Scene3D.tsx`)
- Dynamically imported with `ssr: false` to prevent hydration errors
- Features:
  - Icosahedron geometry with MeshDistortMaterial
  - Gentle auto-rotation
  - Mouse-follow parallax using THREE.MathUtils.lerp
  - Hover scale effect
  - Environment lighting (ambient, directional, point lights)
  - OrbitControls (zoom/pan disabled for controlled experience)

### Main Page (`src/app/page.tsx`)
- Manages preloader state and hero animation triggers
- GSAP timeline staggers in:
  - Navigation items
  - Hero title/subtitle
  - CTA buttons
  - Floating product tags
  - 3D canvas fade-in
- Responsive catalog preview section
- Clean footer with social links

---

## Configuration Files

### `next.config.ts`
Ensure proper TypeScript and App Router configuration:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
```

### `tailwind.config.ts`
Default Tailwind config with custom font variables:
```typescript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
```

---

## Deployment Instructions

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Import project in Vercel dashboard
3. Deploy automatically on push
4. No additional configuration needed

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next` (for Next.js) or use Netlify adapter
3. Add `_redirects` file for SPA routing if needed

### Docker
```dockerfile
FROM node:20-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

Add to `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
};
```

---

## Troubleshooting

### Hydration Mismatch Errors
- All browser-dependent components use `'use client'` directive
- 3D canvas is dynamically imported with `ssr: false`
- Suspense fallbacks prevent flash of unstyled content

### TypeScript Errors
- Ensure all Lenis options match v1.x API (no deprecated properties like `direction`, `smooth`, `mouseMultiplier`)
- Use `as const` for orientation types

### Scroll Not Smooth
- Verify Lenis raf loop is running
- Check GSAP ScrollTrigger sync: `lenis.on('scroll', ScrollTrigger.update)`
- Ensure no CSS `overflow: hidden` on body during normal operation

### 3D Scene Not Loading
- Check browser console for WebGL errors
- Verify dynamic import has `ssr: false`
- Ensure Three.js dependencies are installed

---

## Performance Optimizations

1. **Code Splitting**: Dynamic imports for heavy 3D components
2. **Font Optimization**: Next.js Google Fonts with `display: swap`
3. **Image Optimization**: Use Next.js Image component for static assets
4. **Tree Shaking**: ES modules with proper sideEffects config
5. **Static Generation**: Hero page pre-rendered at build time

---

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

WebGL 2.0 required for 3D scene.

---

## License
© 2024 Orbix Industries. All rights reserved.