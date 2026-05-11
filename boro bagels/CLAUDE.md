# Boros Bagels — Project Guide

## What This Is
A hand-coded static website for Boros Bagels. No frameworks, no build step — plain HTML, CSS, and JavaScript.

## Stack
- **HTML**: `index.html` — semantic markup, single page entry point
- **CSS**: `css/style.css` — all styles, uses CSS custom properties defined in `:root`
- **JS**: `js/main.js` — vanilla JavaScript for interactivity
- **Assets**: `assets/images/` — logo and other images

## Folder Structure
```
boros bagels/
├── CLAUDE.md               ← you are here
├── design-tokens.md        ← full design system reference
├── index.html
├── assets/
│   └── images/
│       └── Borobagelslogo.webp
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Running the Site
Open `index.html` directly in a browser — no server or build step required.

## Design System
All colors, typography, spacing, and motion values are documented in [design-tokens.md](design-tokens.md) and declared as CSS custom properties in `css/style.css`. Always use token variables (e.g. `var(--color-navy)`) rather than hardcoded values.

## Brand Colors (quick reference)
| Role | Token | Value |
|---|---|---|
| Primary blue | `--color-navy` | `#153359` |
| Body text | `--color-espresso` | `#2B1A0E` |
| Accent gold | `--color-golden-crust` | `#B8860B` |
| Page background | `--color-cream` | `#F5EDD6` |
