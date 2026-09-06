# Yojana Setu — Government Scheme Eligibility Checker

A CS002 community-service project (Theme: Digital & Financial Inclusion — SDG 1, SDG 10).

Live concept: a citizen answers five quick questions and instantly sees which of 22 major
Indian government welfare schemes they're likely eligible for — no sign-up, no backend,
no AI, nothing sent anywhere.

## Pages

| Page | What it does |
|---|---|
| `index.html` | Landing page — hero, stats, how-it-works, category shortcuts, featured schemes |
| `checker.html` | The eligibility checker — the core tool |
| `schemes.html` | Full directory: search, category filters, bookmarking, detail modal |
| `about.html` | Problem statement, SDG mapping, methodology, tech stack, author credit |
| `contact.html` | Feedback form with a star rating and a local (on-device) feedback log |

## Folder structure

```
yojana-setu/
├── index.html
├── checker.html
├── schemes.html
├── about.html
├── contact.html
├── css/
│   └── style.css        # every style on the site, single file
├── js/
│   ├── schemes.js         # the "database" — 22 schemes + rule engine helper
│   ├── icons.js            # hand-drawn inline SVG icon set (no image files)
│   ├── checker.js           # eligibility-checker page logic
│   ├── directory.js          # search/filter/bookmark/modal logic for schemes.html
│   ├── feedback.js            # star rating + local feedback log for contact.html
│   └── nav.js                  # shared mobile-menu toggle
└── README.md
```

Everything is plain HTML/CSS/JS — no npm, no build step, no framework.

## How to run it

**Option A — VS Code Live Server (recommended)**
1. Open the `yojana-setu` folder in VS Code.
2. Install the "Live Server" extension if you don't have it (Ritwick Dey).
3. Right-click `index.html` → "Open with Live Server".
4. Click around — all five pages are linked from the nav bar.

**Option B — just double-click**
Double-click `index.html`. Everything works from `file://` too, since nothing
depends on a server — bookmarks and feedback just use `localStorage`.

## Features

- **Eligibility checker** — rule-based JS matching engine (age, income, occupation,
  gender, state, land ownership) against 22 real scheme rule sets.
- **Searchable directory** — live search plus category filter chips, with a
  scheme-detail modal (benefit, description, eligibility summary, tags).
- **Bookmarking** — heart-icon "save for later" using `localStorage`, with a
  dedicated "Saved" filter chip.
- **Feedback page** — a star rating and message form; submissions render live in
  an on-device log, so you can demo the interaction without a backend.
- **Custom SVG icon system and hero illustration** — no external images, so
  nothing can 404 or slow-load during a demo.
- **Fully responsive** — nav collapses to a mobile menu under 860px; all grids
  reflow to one column on small screens.

## How to deploy it (for the CS002 "working, demonstrable artefact" requirement)

Since it's all static files, any of these take under two minutes:

- **Vercel**: `vercel` from this folder, or drag-and-drop at vercel.com/new
- **Netlify**: drag the folder onto app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages on the `main` branch, root folder

## Editing the scheme data

Open `js/schemes.js`. Each entry has a `rules` object used by the checker, plus
`details`, `tags`, `ministry` and `benefit` fields used by the directory and its
modal. Add or remove scheme objects freely — every page (checker, directory,
homepage featured cards, category counts) reads from this one array, so nothing
else needs to change.

## Note for your report / proposal

Eligibility rules here are simplified for demonstration (income thresholds, age
bands) and are not a substitute for each scheme's official notification. For the
CS002 field-testing requirement, test this with a few real users (family, local
shop owners, etc.), collect their feedback through the in-app feedback page or in
person, and note that in your final report per Section 6.2 of the SOP (permitted
setting: college campus, local shops, residential colonies — no restricted-site
access needed for this build).