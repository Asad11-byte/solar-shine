# Solar Shine — Frontend

A stunning, mobile-first, bilingual (English / Urdu with full RTL support) marketing
website for a solar panel & inverter company in Pakistan. Pure static HTML/CSS/JS —
no build step, no backend, no database.

## What's inside
- `index.html` — full one-page site: Home, About, Products (Panels / Inverters /
  Batteries / Accessories), Services, How It Works, Solar Savings Calculator,
  Projects, Testimonials, FAQ, Contact.
- `styles.css` — design system (dark "night-to-sunrise" hero, gold/ember accents,
  glass cards, animations).
- `script.js` — scroll reveal, animated counters, tabs, FAQ accordion, live solar
  calculator, contact form → WhatsApp handoff.
- `i18n.js` — English/Urdu dictionary + language switcher (persists choice, flips
  page to RTL and swaps in Noto Nastaliq Urdu automatically).
- `vercel.json` — static deploy config (clean URLs, cache headers).

## Run locally
No build tools needed. Just open `index.html` in a browser, or serve it:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd solar-shine
vercel        # first deploy (follow prompts, framework = "Other")
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In Vercel → **Add New Project** → import the repo.
3. Framework Preset: **Other**. Build Command: *(leave empty)*. Output Directory: *(leave empty / `.`)*.
4. Deploy.

**Option C — Drag & drop**
Go to vercel.com → New Project → drag this folder onto the upload area.

## Editing content
- Replace phone numbers (`+92 300 1234567`) and WhatsApp links (`wa.me/923001234567`)
  in `index.html` (contact section, floating WhatsApp button, mobile bottom bar,
  and the "Send via WhatsApp" logic in `script.js`).
- Product specs/pricing live directly in the `#products` section of `index.html`,
  sourced from the 2026 Pakistan solar market pricing you provided.
- All bilingual copy lives in `i18n.js` — edit both the `en` and `ur` objects to
  keep translations in sync (keys must match exactly).
- Swap the SVG illustrations (hero sun, about diagram, project cards) for real
  photos any time by dropping `<img>` tags in place of the inline `<svg>` blocks.

## Notes
- No authentication, database, or server code — 100% static, deploys instantly.
- The contact form does not submit anywhere; it opens WhatsApp with the message
  pre-filled. Swap in Formspree/Web3Forms later if you want email delivery instead.
- Fonts (Space Grotesk, Inter, JetBrains Mono, Noto Nastaliq Urdu) load from Google
  Fonts at runtime — no local font files needed.
