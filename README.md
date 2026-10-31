# Atelier Beauté — React salon concept

An original, responsive beauty-salon portfolio demo inspired by editorial beauty and art-direction trends. This is not a copy of any particular Dribbble project.

## Run it

Prerequisites: **Node.js 20.19+ or 22.12+** (modern Vite).

```bash
npm install
npm run dev
```

Open the Vite URL printed in your terminal (normally http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Pages

- `/` — Editorial homepage, animated banner, service cards, moodboard, studio philosophy, FAQ, CTA
- `/services` — Makeup, hair, nails, skincare menu, durations and demo prices, individual service inquiry buttons
- `/gallery` — Filterable beauty lookbook; an interactive **illustrative** before/after color-grading slider
- `/studio` — Studio concept, values, brand story
- `/contact` — Contact form and location overview
- `*` — Custom 404 page

Navigation works on desktop and mobile. All booking buttons launch a real inquiry form.

## WhatsApp setup

1. Copy `.env.example` to `.env`.
2. Enter the actual client's WhatsApp number (international format, digits only):

```dotenv
VITE_WHATSAPP_NUMBER=2126XXXXXXXX
```

3. Restart the Vite dev server (`npm run dev`).

The booking form captures name, phone, chosen treatment, preferred date, general time preference and optional notes. It verifies a valid future date and opens WhatsApp with a formatted, prefilled inquiry.

**Important:** If no WhatsApp number is supplied, the form **copies the inquiry to the clipboard** rather than opening a fake contact number. Requests are NOT confirmed appointments. There is no backend, real appointment calendar, stock check or online payment.

## Customize

- Change service names, durations, demo prices and descriptions in `src/data/site.js`.
- Change the gallery images and labels in `src/data/site.js`.
- Change brand colors, type scale, and layout in `src/styles.css`.
- Change navigation and footer in `src/components/Header.jsx` and `src/components/Footer.jsx`.
- Hero copy and sections are in `src/pages/Home.jsx`.
- WhatsApp functionality is in `src/utils/booking.js`.
- Favicon: `public/favicon.svg`.

## Images and licensing

The demo uses remote Unsplash image URLs for visual inspiration. Browsers require internet to display those. If an image fails, a bundled original SVG illustration from `public/art` appears instead, keeping the composition intact.

Use real photographs only after the business has approved them and you have verified usage rights. The portfolio images are illustrative; **do not present them as previous clients, client transformations, team portraits, or a physical salon**.

The 'before/after' control on Gallery is a comparison of photo effects on the **same vector illustration**; it is not a treatment result.

## Before publishing for a real business

- Replace fictional brand descriptions, services and prices with current owner-approved information.
- Replace remote demo photos with licensed or client-owned media, preferably served locally.
- Add verified salon address, opening hours, phone, social links and a real business WhatsApp number.
- Review form consent/privacy needs and mobile accessibility.
- Clearly tell customers that appointments are confirmed only when the business replies.

## Deployment

Push to GitHub and import the repository in Vercel. Framework: **Vite**; build: `npm run build`; output: `dist`.

In Vercel project settings, add `VITE_WHATSAPP_NUMBER` (real number only). Redeploy after setting it. `vercel.json` already includes a client-side route rewrite for direct `/services`, `/gallery`, etc. loads.

## Stack

React 19, Vite 7, React Router DOM 7, handcrafted CSS. No CSS framework or UI component library, no localStorage, no mock booking confirmation, no fake reviews.
# atelierbeauty
