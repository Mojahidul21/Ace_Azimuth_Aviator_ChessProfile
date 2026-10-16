# BOARD/LOG — Chess Performance Portfolio

A polished, responsive personal chess portfolio for **Ace_Azimuth_Aviator**. Built with React + Vite and custom CSS, with inline SVG charts, no charting-library dependency, and a print/save-to-PDF action.

## Included
- Editorial hero and player dossier
- Performance KPI cards for rapid rating, games, puzzles, and streak
- Responsive rating checkpoint chart
- Player milestones and opening-landscape infographic
- Improvement blueprint and weekly training rhythm
- Print-friendly stylesheet
- Accessible chart labels and responsive layouts

## Run locally

Requirements: Node.js 18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Build and preview production output:

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Vercel

### Option A — GitHub import
1. Create a new GitHub repository (for example, `chess-performance-portfolio`).
2. Upload the contents of this project folder to the repository root.
3. In Vercel, choose **Add New → Project**, import that repository, and keep the detected Vite settings.
4. Build command: `npm run build`; output directory: `dist`.
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm install
npm run build
npx vercel
```

## Updating your profile

Most portfolio content is authored in `src/main.jsx`:
- Update `milestones` for confirmed rating checkpoints.
- Update the four KPI cards when your profile metrics change.
- Update `openings` and `OpeningBars` only when you have a reliable opening/game export.
- Change the snapshot date in the footer and disclaimer when refreshing the data.

**Data integrity note:** the rating chart uses selected values visible in the supplied profile history. It is not presented as a complete daily rating curve. Opening bar lengths are explicitly illustrative and are not counts, percentages, or win rates. Exact W/L/D totals, accuracy, opening win rates, and color performance were not available in the supplied text, so they are not fabricated.

## Visual system

Palette: black, warm white, gold, silver, orange, and avocado green. Base font size is **14px**. Headings use Manrope; metadata uses DM Mono; the reflective statement uses a serif accent. The layout includes a print stylesheet for a clean PDF export.

## Project structure

```text
chess-portfolio/
├── index.html
├── favicon.svg
├── package.json
├── README.md
├── PROMPTS.md
└── src/
    ├── main.jsx
    └── styles.css
```
