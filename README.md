# Solar Shine — Frontend

A stunning, mobile-first, bilingual (English / Urdu, full RTL) marketing website
for a solar panel & inverter company in Pakistan. Pure static HTML/CSS/JS —
**no build step, no framework, no backend, no database.** Open `index.html` and
it works; deploy the folder as-is to Vercel and it works there too.

---

## 1. File structure

```
solar-shine/
├── index.html      # every section of the site, in document order
├── styles.css       # design tokens + all styling + responsive breakpoints
├── i18n.js           # English/Urdu dictionary + language-switching logic
├── script.js         # all interactivity (nav, tabs, FAQ, calculator, etc.)
├── favicon.svg       # sun-mark icon
├── vercel.json        # static hosting config (clean URLs, cache headers)
└── README.md           # this file
```

There is deliberately no `package.json`, no bundler, no `node_modules`. The
browser loads three files (`styles.css`, `i18n.js`, `script.js`) directly —
that's the entire "build."

---

## 2. How the page is put together (`index.html`)

It's a **single scrolling page** (not multiple routed pages). The nav bar
links (`#about`, `#products`, etc.) are anchor jumps to `<section id="...">`
blocks lower in the same file. This is why `scroll-behavior: smooth` is set
on `<html>` in `styles.css` — clicking a nav link glides to the section
instead of jumping instantly.

Sections, top to bottom:

| Section | Purpose |
|---|---|
| `#site-header` (fixed) | Logo, nav links, language toggle, "Get Free Quote" button, hamburger (mobile) |
| `.mobile-nav` (hidden by default) | Full-screen menu that slides down on mobile when the hamburger is tapped |
| `#home` (`.hero`) | Headline, stats, the animated "sun-gauge" SVG |
| `.marquee-wrap` | Auto-scrolling strip of brand names |
| `#about` | Company story + "why choose us" grid |
| `#products` | Tabbed catalogue: Panels / Inverters / Batteries / Accessories, plus the LFP-vs-lead-acid comparison table |
| `#services` | 8 service cards |
| `.process` (dark section) | 5-step "how it works" timeline |
| `#calculator` | The interactive bill → system size estimator, plus a static system-bundle pricing table |
| `#projects` | 6 project cards with inline SVG illustrations (no external images) |
| Testimonials (no id) | 3 customer quote cards |
| `#faq` | Accordion of 6 questions |
| `#contact` | Contact info panel + lead-capture form |
| `<footer>` | Sitemap links, service areas, social icons |
| `.wa-float` / `.mobile-bar` | Floating WhatsApp button (all screens) and a sticky Call/WhatsApp/Quote bar (mobile only) |

**Every piece of illustration art (the sun, the solar panel icons, the
project thumbnails) is inline `<svg>`, not `<img>` tags pointing at external
files.** That's intentional: nothing to upload, nothing that can 404, and it
recolors instantly if you change the CSS variables. See §6 if you want to
swap any of these for real photos.

---

## 3. How the visual design works (`styles.css`)

### Design tokens
Everything — color, spacing, fonts, shadows — is defined once at the top as
CSS custom properties on `:root`:

```css
--ink: #0B1120;      /* near-black navy, "night grid" */
--gold: #F5A623;      /* solar gold accent */
--ember: #FF6B35;      /* warm accent for CTAs/energy */
--sand: #FDF6EC;        /* light section background */
```

Change a token once, and it updates everywhere that references
`var(--gold)`, etc. — this is the fastest way to re-theme the whole site
(see §6, "Change the color palette").

### The concept
Dark, star-flecked "night" hero (representing load-shedding) resolves into
gold/ember tones as you scroll (representing solar power). The recurring
**sun-arc** motif — a rising semicircle with a glowing dot — appears behind
the hero and again as the results gauge in the calculator, tying the brand
name ("Shine") to the page's visual logic.

### Layout system
Plain CSS Grid and Flexbox — no CSS framework (no Bootstrap/Tailwind).
Section widths are capped by `.container { max-width: var(--container) }`
(1200px) and centered.

### Animation
- `.reveal` / `.reveal-scale` — elements start invisible/offset, and
  `script.js` uses an `IntersectionObserver` to add the `.in` class the
  first time they scroll into view, which triggers the CSS transition.
- `.counter` — the hero stat numbers count up from 0 the first time they
  scroll into view (also via `IntersectionObserver`, animated in
  `script.js` using `requestAnimationFrame`).
- `prefers-reduced-motion: reduce` is respected — all of the above
  animations are disabled for users who've asked their OS for less motion.

### Responsive breakpoints
Three breakpoints, mobile-first in spirit but written as max-width
overrides for simplicity:
- **≤1080px** — desktop grids collapse from 3–4 columns down to 1–2;
  hero/about visuals move above their text; multi-step process timeline
  drops its connecting line.
- **≤780px** — this is the real "mobile" switch: top nav hides in favor of
  the hamburger menu, all product/service/project grids go to a single
  column, and the fixed bottom `.mobile-bar` (Call / WhatsApp / Quote)
  appears with `body { padding-bottom }` added so it never covers content.
- **≤480px** — small-phone tweaks: hero buttons stack full-width, footer
  collapses to one column, badges re-center.

### RTL / Urdu support
Two mechanisms work together:
1. `html[dir="rtl"]` selectors throughout the CSS adjust things that don't
   auto-flip (letter-spacing on headings, text-transform on labels, etc.)
2. Logical CSS properties are used instead of physical ones wherever
   direction matters — e.g. `inset-inline-end` instead of `right`,
   `margin-inline-start` instead of `margin-left`. These automatically flip
   sides when `dir="rtl"` is set on `<html>`, without any extra RTL-specific
   rule needed.

When Urdu is active, `html[lang="ur"]` also swaps the `--font-display` and
`--font-body` custom properties to lead with **Noto Nastaliq Urdu** instead
of Space Grotesk/Inter — so headings and body text both render in a proper
Nastaliq typeface.

---

## 4. How the bilingual system works (`i18n.js`)

This is a from-scratch, dependency-free i18n implementation — no i18next,
no framework. Three ingredients:

1. **A dictionary** — `translations = { en: {...}, ur: {...} }`. Every
   translatable string has a dotted key, e.g. `"hero.title"`,
   `"faq.q1"`, `"contact.fSubmit"`. Both objects must contain the exact
   same set of keys (this repo currently ships **225 matched keys**).

2. **Markup hooks in `index.html`** — any element that should be
   translated carries `data-i18n="key.name"` (for its inner content) or
   `data-i18n-ph="key.name"` (for an `<input>`/`<textarea>` placeholder).
   Example:
   ```html
   <h1 data-i18n="hero.title">Turn load-shedding into <em>daylight</em>...</h1>
   ```
   The English text hard-coded inside the tag is just a fallback / what you
   see before JS runs — `applyLanguage()` immediately overwrites it.

3. **`applyLanguage(lang)`** — on page load (and every time a language
   button is clicked) this function:
   - Sets `document.documentElement.lang` and `.dir` (`rtl` for Urdu,
     `ltr` for English) — this is what triggers all the RTL CSS in §3.
   - Loops every `[data-i18n]` element and replaces its `innerHTML` with
     the matching dictionary string (note: `innerHTML`, not `textContent`,
     because a few strings contain an `<em>` tag for the gold headline
     word — keep that in mind if you ever add a translation containing
     user-supplied text, to avoid HTML injection).
   - Loops every `[data-i18n-ph]` element and sets its `placeholder`
     attribute the same way.
   - Toggles the `.active` class on the EN/اردو buttons in the header.
   - Saves the choice to `localStorage` (`solarshine-lang`) so it's
     remembered on the visitor's next visit — **this is browser-side
     storage only, nothing is sent to a server.**

### Adding a new translatable string
1. Add `data-i18n="section.newKey"` to the element in `index.html`.
2. Add `"section.newKey": "English text"` to `translations.en` in
   `i18n.js`.
3. Add `"section.newKey": "اردو متن"` to `translations.ur` in the same
   file.

If a key is missing from a dictionary, `applyLanguage()` simply leaves the
element's existing text alone — it won't crash, but you'll see English
leak into the Urdu view (or vice versa), so keep both objects in sync.

---

## 5. How the interactive features work (`script.js`)

Everything is wrapped in a single `DOMContentLoaded` listener with no
external dependencies (no jQuery, no build tooling) — just vanilla
`querySelector`/`addEventListener`.

| Feature | How it works |
|---|---|
| **Sticky header shrink** | A `scroll` listener toggles `.scrolled` on `#site-header` past 40px of scroll, which triggers the smaller-padding/blurred-background CSS state. |
| **Mobile menu** | `hamburger` click adds `.open` to `.mobile-nav` (slides down via CSS transform) and locks body scroll; the close button / any nav link removes it again. |
| **Scroll reveal** | Every `.reveal`/`.reveal-scale` element is registered with one shared `IntersectionObserver`; each one gets `.in` added (and then is unobserved) the first time 12% of it is visible. |
| **Animated counters** | Same observer pattern, but on trigger it runs a `requestAnimationFrame` loop that eases the number from 0 to its `data-target` value over 1.4s. |
| **Product tabs** | Clicking a `.tab-btn` toggles `.active` on itself (and removes it from siblings), then shows the matching `#panel-<tab>` and hides the rest — pure class toggling, no routing. |
| **FAQ accordion** | Clicking a question closes whichever FAQ item is currently open (collapses its `max-height` back to 0) and, if the clicked one wasn't already open, expands it by setting `max-height` to its measured `scrollHeight` — this is what makes the CSS `transition: max-height` animate smoothly instead of snapping. |
| **Solar calculator** | Purely client-side arithmetic, no API call. See §5a below for the exact formula. |
| **Contact form** | On submit, it **does not POST anywhere.** It reads the four field values, builds a plain-text message, URL-encodes it, and opens `https://wa.me/<number>?text=<message>` in a new tab — handing the lead straight to WhatsApp. See §6 for how to wire this to a real backend/email instead. |

### 5a. Calculator formula (approximate, not a quote engine)

The slider represents "average monthly bill in PKR" (5,000–150,000). On
every `input` event, `updateCalculator()` in `script.js` runs:

```
kw = (bill / 45000) * 5 * propertyMultiplier      // clamped to 2.5–32 kW
panelCount = round(kw * 1000 / 585)                // assumes 585W panels
costPerWattRange = hasBattery ? [95, 125] : [68, 85]   // PKR/watt, turnkey
costRange = kw * 1000 * costPerWattRange
paybackYears = hasBattery
  ? 5.5 - min(kw / 20, 1.5)
  : 3.8 - min(kw / 25, 1.2)
```

- **Property type** (`Home` / `Villa` / `Commercial` chips) sets
  `propertyMultiplier` to `1`, `1.15`, or `1.3` — bigger properties are
  assumed to need a proportionally bigger system for the same bill.
- **Battery toggle** swaps which cost-per-watt band and payback curve is
  used — hybrid+battery systems cost more upfront but the model shortens
  payback slightly as size increases (rough approximation, not physics).
- The gauge SVG's `stroke-dashoffset` is remapped from the resulting `kw`
  value (2.5–32 → dash-offset 270–0) so the arc visually fills as the
  estimate grows.

**This is a rough lead-generation tool, not a certified sizing
calculator** — the copy already says "estimate only," and the CTA below
the result pushes toward booking the free, accurate, human site survey.
If you get real historical quote data, replacing the formula above with a
lookup table (or small regression) is a contained change — everything it
touches lives inside `updateCalculator()`.

---

## 6. Common edits

### Change the phone / WhatsApp number
It's repeated in a few places — search-and-replace `923001234567` /
`+92 300 1234567` across:
- `index.html` (floating WhatsApp button, mobile bottom bar, Contact
  section)
- `script.js` (the `wa.me` URL built in the contact-form submit handler)

### Change the color palette
Edit the custom properties at the top of `styles.css` (`:root { ... }`).
Because almost every color in the file is `var(--something)`, changing
`--gold`/`--ember`/`--ink` there re-themes the whole site without hunting
through individual rules.

### Add/edit a product card, price, or spec
Product cards live directly in the `#products` section of `index.html` —
there's no separate data file (see the note in §8 about why, and the
suggested next step if you want one). Copy an existing `.product-card`
block, edit the brand/model/specs/price, and give any new translatable
text a fresh `data-i18n` key (then add it to **both** language blocks in
`i18n.js` — see §4).

### Add/edit bilingual copy
See §4 — always update `translations.en` and `translations.ur` together.

### Swap an inline SVG illustration for a real photo
Replace the `<svg>...</svg>` block with an `<img src="..." alt="...">`.
Nothing else needs to change — surrounding containers (`.product-card
.swatch`, `.project-card`, `.about-photo`) already use `display:flex` /
`position:absolute` layouts that work with either.

### Wire the contact form to email instead of WhatsApp
The form has no backend today (see §5, "Contact form"). The fastest
no-database options:
- **Formspree** or **Web3Forms** — add their endpoint as the form's
  `action` and swap `event.preventDefault()` out of the submit handler in
  `script.js`, or keep it and `fetch()` the endpoint manually. Both are
  free-tier services that just email you the submission — no server code
  needed on your side.

---

## 7. Running it locally

No build tools required:

```bash
# either
npx serve .
# or
python3 -m http.server 8080
```

Then open the printed local URL. Opening `index.html` directly via
`file://` also mostly works, but a local server is safer (some browsers
restrict `fetch`/module behavior on `file://`).

---

## 8. Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd solar-shine
vercel        # first deploy — choose "Other" as the framework preset
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. In Vercel → **Add New Project** → import the repo.
3. Framework Preset: **Other**. Build Command: *(leave empty)*. Output
   Directory: *(leave empty / `.`)*.
4. Deploy.

**Option C — Drag & drop**
Go to vercel.com → New Project → drag this folder onto the upload area.

`vercel.json` is already set up for clean URLs and long-term caching of
`.css`/`.js`/`.svg` — no further config needed.

---

## 9. What this app intentionally does *not* have

- **No database, no auth, no server code.** Every "dynamic" thing you see
  (the calculator result, the language switch, the scroll animations) runs
  entirely in the visitor's browser.
- **No CMS.** Content lives directly in `index.html`/`i18n.js`. If you
  want a form-based editing experience instead of hand-editing files, the
  natural next step (not included here) is adding a git-based headless CMS
  like Decap CMS pointed at this repo, and/or moving the product/pricing
  data out of `index.html` into a small `data.json` the page fetches at
  load — that keeps the site static while making routine content edits
  (prices, specs, copy) a form-filling exercise instead of an HTML edit.
- **No image assets.** All illustrations are inline SVG for reliability
  and instant re-theming (see §6 if you'd rather use photos).
- **No analytics/tracking** wired in — add Google Analytics/Plausible/etc.
  by dropping their script tag before `</head>` if/when you want it.
