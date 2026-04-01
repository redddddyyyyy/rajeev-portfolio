# Verris-Inspired Portfolio Redesign

**Date:** 2026-04-01  
**Status:** Approved  
**Inspiration:** https://verris.framer.website

---

## Overview

Full redesign of Rajeev Reddy's portfolio website inspired by the Verris Framer template. The core aesthetic shift: editorial, mixed light/dark alternating sections, full-width display typography in the hero, and project tiles that use real screenshot media from GitHub repos instead of plain cards.

---

## Theme System

**Alternating section backgrounds:**

| Section | Background | Text |
|---|---|---|
| Navbar | `#FAFAF8` (warm white) | `#0a0a0a` |
| Hero | `#FAFAF8` | `#0a0a0a` |
| Projects | `#0a0a0a` (dark) | `#ffffff` |
| About | `#FAFAF8` | `#0a0a0a` |
| Open Source | `#0a0a0a` | `#ffffff` |
| Experience | `#FAFAF8` | `#0a0a0a` |
| Contact | `#0a0a0a` | `#ffffff` |
| Footer | `#0a0a0a` | `#ffffff` |

**Accent color:** Burgundy `#8B1A2B` / `#C14B5A` — used only for hover states, active nav links, merged PR badges. Not dominant anywhere.

**Fonts:**
- Hero name: Clash Display (heavy weight, loaded via @fontsource/clash-display or local)
- Body + UI: Inter (existing)
- Code/mono labels: JetBrains Mono (existing)

---

## Components

### Navbar

- Background: `#FAFAF8`, no shadow, no border
- Left: `RAJEEV` in small bold JetBrains Mono caps
- Right: `About · Projects · OSS · Contact` in small Inter regular + `Resume ↗` in burgundy accent
- Sticky, no blur effect — white stays white on scroll
- Mobile: hamburger collapses to vertical menu

### Hero

- Background: `#FAFAF8`
- Full-width display name: `RAJEEV——REDDY` using Clash Display, sized to fill ~90vw edge-to-edge (responsive clamp, ~10vw font size)
- Em dash separator between first and last name, same style as Verris
- Below name, two-column layout:
  - Left: role tag `Robotics Engineer · ML Researcher` in small mono + "Available Summer 2026" badge (green dot + text)
  - Right: 2-sentence bio
- Bottom strip: 4 stats separated by thin `|` dividers — `6 Projects · 4 OSS PRs · 2 Internships · Nav2 · TF Contributor`
- CTAs: `View Projects ↓` and `Download Resume` — underline hover style, no pill buttons
- No aurora, no meteors, no grid background, no cursor follower
- Framer Motion: name fades in as a whole unit (not letter-by-letter stagger), bio and stats fade up with 200ms delay

### Projects

- Dark section (`#0a0a0a`)
- Section label: `Selected Work` in small mono, top-left
- Counter: `04 / 06` top-right
- 2×2 asymmetric grid, each tile ~400px tall:
  - Row 1: tile-1 (66% width) + tile-2 (34% width)
  - Row 2: tile-3 (34% width) + tile-4 (66% width)
  - Row 3 (below): tile-5 + tile-6 equal 50/50
- Each tile:
  - Full-bleed background image (or animated canvas for 05/06)
  - Dark gradient overlay: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)`
  - Bottom-left: project number `01`, project title (medium weight), tech tag pills in mono
  - Hover: image scale 1.05 (200ms ease), overlay lightens slightly, `View on GitHub ↗` slides up from bottom
  - Click: opens GitHub repo in new tab

**Project → Visual mapping:**

| # | Project | Visual Source | Raw URL |
|---|---|---|---|
| 01 | LiDAR-Camera Fusion with YOLO | `fusion_results.png` | `https://raw.githubusercontent.com/redddddyyyyy/lidar-camera-fusion/master/assets/fusion_results.png` |
| 02 | Multispectral Habitat Segmentation | `habitat_mosaic.png` | `https://raw.githubusercontent.com/redddddyyyyy/multispectral-habitat-segmentation/main/assets/habitat_mosaic.png` |
| 03 | Hybrid A* Planner | `planning_demo.gif` (animated!) | `https://raw.githubusercontent.com/redddddyyyyy/hybrid-astar-planner/master/assets/planning_demo.gif` |
| 04 | IIWA Trajectory Planning | `demo_preview_raw_vs_smooth.png` | `https://raw.githubusercontent.com/redddddyyyyy/iiwa-trajectory-planning/main/assets/demo_preview_raw_vs_smooth.png` |
| 05 | CARLA Autonomous Driving (ROS2) | CSS animated SVG: car dot moving along a road path | — |
| 06 | Indoor Food Delivery (UDrive ROS2) | CSS animated SVG: robot navigating floor grid | — |

Images for 01–04 are loaded directly from GitHub raw CDN URLs (no local copies needed). Animated tiles for 05–06 are self-contained React components with CSS keyframe animations.

Below grid: `View all projects on GitHub →` link in small mono.

### About

- White section, no section title header — editorial feel
- Two columns:
  - Left (60%): Bio paragraph — "I build perception and autonomy systems..." 2–3 sentences
  - Right (40%): Skills grid — 6 categories in mono text lists, no decorative icons, thin dividers between categories
- Framer Motion: scroll-triggered fade-up, 20px Y travel

### Open Source

- Dark section
- 4 PR rows (no card borders), separated by thin `1px` top-line dividers
- Each row: repo name (large, mono) + PR title (smaller below) + merged/open badge
  - Merged: green badge
  - Open: yellow badge
- Burgundy accent on hover of each row

**PRs:**
- Nav2 #5885 (merged)
- Nav2 #5969 (open)
- TF #112975 (open)
- TF #112688 (open)

### Experience

- White section
- Vertical timeline, two entries only
- Layout: date on left (mono, muted), role + org + description on right
- No icons, no decorative timeline dots — just a thin left border line

**Entries:**
1. DRDO — role/dates from existing component
2. BHEL — role/dates from existing component

### Contact

- Dark section
- Large centered display text: `Let's build something.`
- Below: email + LinkedIn + GitHub as plain underline-hover links
- No contact form

### Footer

- Dark, one line
- Left: `© 2026 Rajeev Reddy`
- Right: `GitHub · LinkedIn · Email` as small links

---

## Animations

- All sections: Framer Motion `whileInView` fade-up (opacity 0→1, y 20→0, duration 0.5s)
- Project tile hover: CSS transform scale + overlay opacity transition
- Hero name: single fade-in as a block (not letter stagger)
- Remove: CursorFollower component, meteor shower, aurora gradient, grid background

---

## What Gets Removed

- `CursorFollower.tsx` — deleted
- `Sidebar.tsx` — already unused, deleted
- Aurora/meteor/grid code in `Hero.tsx` — removed
- Letter-by-letter stagger animation — replaced with block fade

---

## What Gets Added

- Clash Display font (via npm or local font files in `/public/fonts/`)
- Two CSS-animated SVG project tile components: `CarlaAnimatedTile.tsx`, `UDriveAnimatedTile.tsx`
- GitHub raw image URLs for projects 01–04 in Projects component
- Alternating section background logic (white/dark per section via `bg` prop or Tailwind classes)

---

## File Changes Summary

| File | Action |
|---|---|
| `src/app/globals.css` | Add Clash Display font-face, update CSS vars for warm white |
| `src/app/layout.tsx` | Add Clash Display font loading |
| `src/app/page.tsx` | Remove CursorFollower import |
| `src/components/Navbar.tsx` | Rewrite for white minimal style |
| `src/components/Hero.tsx` | Full rewrite — white bg, Clash Display, two-column layout |
| `src/components/Projects.tsx` | Full rewrite — dark bg, asymmetric grid, image tiles |
| `src/components/About.tsx` | Rewrite — white bg, two-column editorial |
| `src/components/OpenSource.tsx` | Restyle — dark bg, row list style |
| `src/components/Experience.tsx` | Restyle — white bg, clean timeline |
| `src/components/Contact.tsx` | Rewrite — dark bg, large CTA text |
| `src/components/Footer.tsx` | Restyle — one-line dark footer |
| `src/components/CursorFollower.tsx` | Delete |
| `src/components/Sidebar.tsx` | Delete |
| `src/components/CarlaAnimatedTile.tsx` | Create new |
| `src/components/UDriveAnimatedTile.tsx` | Create new |
