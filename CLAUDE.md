# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test suite is configured in this project.

## Architecture

This is a **React 19 + Vite** marketing/landing site for DigitEase, a Moroccan digital agency. The site is in French.

### Routing (React Router v7)

```
/               → Home (full landing page)
/services/:id   → Service detail page (id matches services[].id in datas/services.js)
/contact        → Contact page (WhatsApp, email, phone links)
/mail           → Mail form page
```

### Styling — dual-layer system

Styling uses **two parallel systems that must be kept in sync**:

1. **CSS custom properties** (`src/index.css`) — used by Tailwind and raw CSS. Theme applied via `data-theme` attribute on `<html>`.
2. **MUI theme** (`src/theme/index.js`) — used by all MUI components. Exports `theme` (MUI `createTheme`) and `designTokens` (raw values).

Dark/light mode is managed by `ThemeContext` (`src/contexts/ThemeContext.jsx`), which sets `data-theme` on `<html>` and persists to `localStorage` under the key `digitease-theme`. Components access it via `useTheme()` from that context — not from MUI. When styling MUI components for dark mode, check `isDark` from `useTheme()` and pass inline `sx` values conditionally.

### Data layer

Static data lives in `src/datas/`:
- `services.js` — array of 3 services, each with `id`, `title`, `icon`, `description`, `specifités`, `image`, `engagements`. The Service page reads `specifités` but the field is spelled `specifites` in the JSX — keep this inconsistency in mind when editing.
- `equipes.js` — team members
- `temoignages.js` — testimonials (the `<Temoignages />` section is currently commented out in `Home.jsx`)

Assets are re-exported through `src/assets/index.js` and `src/assets/assets.js`.

### Component barrel exports

`src/components/index.js` and `src/pages/index.js` re-export everything — import from the barrel, not individual files.

### EmailJS

Contact form emails use `@emailjs/browser`. The `Mail` page (`src/pages/Mail.jsx`) handles form submission.

### SEO

`SEOHead` component (`src/components/SEOHead.jsx`) uses `react-helmet-async`. The `HelmetProvider` wraps the app in `main.jsx`.

### Animations

Framer Motion (`framer-motion` / `motion`) is used for entrance animations. Standard pattern: `initial={{ opacity: 0, y: 40 }}` with `whileInView={{ opacity: 1, y: 0 }}` and `viewport={{ once: true }}`.

## Key conventions

- MUI `Grid` uses the v2 API: `<Grid size={{ xs: 12, md: 6 }}>` (not `item xs={12}`).
- Fonts: Inter (body/headings), Poppins (hero/section titles in JSX inline `sx`).
- Primary blue: `#2563eb` (light) / `#3b82f6` (dark). Gradient: `linear-gradient(135deg, #1a56db 0%, #0891b2 100%)`.
- The `Navbar` accepts `isHome` prop which controls transparent/solid background behavior.
- Deployed via Vercel; `vercel-build` script runs `npm install --legacy-peer-deps && npm run build`.
