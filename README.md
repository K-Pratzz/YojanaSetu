# Yojana Setu — Government Scheme Eligibility Checker

A CS002 community-service project (Theme: Digital & Financial Inclusion — SDG 1, SDG 10).

## What it is
A pure client-side web app. A user enters age, income, occupation, gender and state;
a rule-based JS engine checks their details against a hardcoded dataset of 18 major
Indian government schemes and lists the ones they likely qualify for, with a one-line
explainer for each.

No backend, no database, no external API, no AI/ML — everything runs in the browser.
This means: nothing to deploy, nothing to go down during your demo, and no server cost.

## Folder structure
```
scheme-checker/
├── index.html      # markup + form + results container
├── style.css        # all styling (single stylesheet, no framework)
├── schemes.js        # the "database" — 18 schemes with eligibility rules
├── script.js         # matching engine + form/results logic
└── README.md
```

## How to run it

**Option A — VS Code Live Server (recommended, what you asked for)**
1. Open the `scheme-checker` folder in VS Code.
2. Install the "Live Server" extension if you don't have it (Ritwick Dey).
3. Right-click `index.html` → "Open with Live Server".
4. It opens at something like `http://127.0.0.1:5500/index.html`.

**Option B — just double-click**
Double-click `index.html` and it opens directly in your browser. Works fine since
there's no server-only code — Live Server just gives you auto-reload while you edit.

## How to deploy it (for your CS002 "working, demonstrable artefact" requirement)
Since it's static files, any of these take under 2 minutes:
- **Vercel**: `vercel` in this folder (or drag-and-drop the folder at vercel.com/new)
- **Netlify**: drag the folder onto app.netlify.com/drop
- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch

## Editing the scheme data
Open `schemes.js`. Each scheme is one object with a `rules` object. Supported rule
keys: `minAge`, `maxAge`, `minIncome`, `maxIncome`, `occupations` (array), `gender`
(array), `states` (array or `["all"]`), `requiresLand` (boolean). Omit a key to mean
"no restriction on this field." Add or remove scheme objects freely — the UI and
matching logic adapt automatically, no other file needs to change.

## Note for your report / proposal
Eligibility rules here are simplified for demonstration (income thresholds, age
bands) and are not a substitute for each scheme's official notification. For the
CS002 field-testing requirement, test this with a few real users (family, local shop
owners, etc.), collect their feedback on accuracy and clarity, and note that in your
final report per Section 6.2 of the SOP (permitted setting: college campus, local
shops, residential colonies — no restricted-site access needed for this build).
