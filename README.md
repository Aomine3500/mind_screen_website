# Mind Screen — Marketing Website

A modern, bilingual (EN/FR), light/dark single-page marketing site for the **Mind Screen** app.
Built with zero-build vanilla HTML/CSS/JS so it loads instantly, is SEO-friendly, and gives
pixel-level control over the app's *charte graphique* (brand palette, gradients, Inter typography,
28 px pill buttons — all mirrored from `mind_suite/lib/theme/app_theme.dart`).

## Run it

```bash
cd "mind_screen_website"
node server.js          # http://localhost:5178
```

Any static file server works too (e.g. `npx serve`, `python -m http.server`).

## Structure

```
mind_screen_website/
├── index.html               # single page, all sections
├── server.js                # zero-dependency static server
├── assets/
│   ├── css/styles.css        # brand tokens (light + dark), layout, responsive
│   ├── js/i18n.js            # EN/FR dictionary + tests & FAQ catalogs
│   ├── js/main.js            # theme toggle, language switch, reveal, grids
│   └── img/
│       ├── logo.png          # Mind Screen transparent logo
│       ├── tests/*.png       # 11 clinically-validated assessment icons
│       └── bg/*.png          # meditation hero backgrounds (light/dark × sizes)
```

## Features

- **Bilingual** EN/FR, persisted in `localStorage`, auto-detects browser language.
- **Light / Dark** theme with matching hero backgrounds, persisted; respects `prefers-color-scheme`.
- **Responsive** mobile / tablet / desktop, with size-matched background images.
- **Sections** (skeleton inspired by mind-diagnostics.org/get-the-app): header, hero + store badges,
  clinical-scales trust strip, features, how-it-works, assessment library (11 tests),
  why-voice, privacy, testimonials, CTA, FAQ, footer + 18+ disclaimer.
- Content sourced from the `mind_suite` app (README, test catalog, theme).
