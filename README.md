# Mizan Money — Hero Section

Production-ready hero section for **Mizan Money 2026** built with Next.js 16, Tailwind CSS v4, and GSAP. Pixel-faithful to the Figma design: animated aurora gradient lights, glassmorphic CTA card with animated rainbow border, 3D iPhone tilt on mouse move, floating coin & arrow with parallax, and orchestrated entrance animations.

## What's in the box

```
mizan-hero/
├── app/
│   ├── globals.css        # Tailwind v4 + custom CSS (aurora, glass, border)
│   ├── layout.tsx         # Loads Poppins from next/font
│   └── page.tsx           # Renders <Hero />
├── components/
│   ├── Hero.tsx           # The full hero section
│   ├── Navbar.tsx         # Transparent navbar with logo
│   ├── AuroraLights.tsx   # 4 animated gradient blobs + light rays
│   ├── PhoneStage.tsx     # 3D-tilting iPhone + floating coin/arrow (GSAP)
│   ├── GlassCTA.tsx       # Glass card with animated rainbow border
│   └── DecorPattern.tsx   # The "M" decorative pattern (top-right)
├── lib/
│   └── useGsapEntrance.ts # Reusable GSAP entrance timeline hook
└── public/assets/
    ├── iphone.png         # YOUR iPhone mockup PNG
    ├── coin.png           # YOUR coin asset
    ├── arrow.png          # YOUR arrow asset
    ├── logo.svg           # YOUR Mizan logo
    └── pattern.svg        # YOUR decorative "M" pattern (optional)
```

## Setup

```bash
# 1. Create a fresh Next.js 16 project
npx create-next-app@latest mizan --typescript --tailwind --app --no-src-dir --turbopack

# 2. Drop these files into the project (overwrite where needed)
#    Match the structure above

# 3. Install GSAP (free version is plenty)
npm install gsap @gsap/react

# 4. Drop your exported assets into /public/assets/
#    - iphone.png, coin.png, arrow.png, logo.svg

# 5. Run
npm run dev
```

## How the magic works (so you can extend it)

### 1. Aurora gradient lights (`AuroraLights.tsx`)

Three layered radial-gradient blobs + three rotated light "rays". Each blob has its own keyframe timing for an organic drift. Uses `mix-blend-mode: plus-lighter` and `screen` to bloom against the dark navy. CSS-only — no WebGL needed for this look. Performance is great because they're transform-animated.

### 2. Glass CTA card (`GlassCTA.tsx`)

Three layers:
- **Base**: `backdrop-filter: blur(24px)` + `bg-white/[0.04]` for the frosted look
- **Animated border**: a `::before` pseudo-element with a rotating `conic-gradient`, masked using `padding-box` / `border-box` trick so only the 1px border shows the rainbow rotation
- **Glow**: a `::after` pseudo-element with a soft drop-shadow

### 3. 3D iPhone tilt (`PhoneStage.tsx`)

GSAP `quickTo` for buttery 60fps mouse-following. The phone tilts on `rotateX` / `rotateY` based on cursor position relative to the stage. Coin and arrow have their own `parallax depths` so they move slightly differently — that's what sells the 3D feel. Plus a continuous `yoyo` float animation on both that runs independently.

### 4. Entrance choreography (`useGsapEntrance.ts`)

A single GSAP timeline that:
1. Fades in navbar (0.0s)
2. Slides in heading + subheading from below with stagger (0.2s)
3. Fades in CTA buttons (0.6s)
4. Pops in the phone stage with scale + fade (0.4s)
5. Drops in the coin and arrow last (0.9s)

Total runtime: ~1.4s. Feels premium without being slow.

## Design tokens

All defined as CSS custom properties in `globals.css`:

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#1B1C39` | Page background |
| `--bg-deep` | `#0F1028` | Deeper variant for gradients |
| `--accent-violet` | `#7C5CFF` | Primary aurora colour |
| `--accent-pink` | `#FF6BB8` | Secondary aurora |
| `--accent-cyan` | `#5CE1FF` | Tertiary aurora |
| `--text` | `#FFFFFF` | Body text |
| `--text-muted` | `rgba(255,255,255,0.6)` | Subtitles |
| `--glass-bg` | `rgba(255,255,255,0.04)` | Glass surface |
| `--glass-border` | `rgba(255,255,255,0.10)` | Glass edge |

## Performance notes

- All animations use `transform` and `opacity` only → GPU-accelerated, no layout thrash
- The aurora blobs use `will-change: transform` only during animation
- GSAP's `quickTo` is debounced internally — safe to call on every `mousemove`
- iPhone image uses `next/image` with `priority` so it's preloaded for LCP

## Responsive behaviour

- **Desktop (≥1024px)**: Side-by-side layout exactly per Figma
- **Tablet (640–1023px)**: Phone scales down, stays right-side
- **Mobile (<640px)**: Phone moves below text block, scales to fit; 3D tilt is disabled (`pointer: coarse` media query) — replaced with the floating loop only

## Next steps

Once you approve this hero, the same patterns extend to the rest of the page:
- The "Mizan finds what you won't miss" cards reuse `GlassCTA`
- The "How Mizan works" carousel is the same glass + 3D recipe
- The "Bank-grade trust" section reuses `AuroraLights` with a different palette

Ship the hero, demo it to the client, then we cookie-cutter the rest.
