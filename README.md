# Miki — Energy · Awareness · Healing

Marketing site for a Reiki practice. Next.js 16 (App Router) + Tailwind 4,
deployed on Vercel.

---

## The one file you edit

**[`src/content/site.ts`](src/content/site.ts)** holds every word, price, phone
number and link on the site. Change a value there and the whole site updates.
You never need to open another file to change wording.

Anything marked `TODO:CONFIRM` in that file is a placeholder draft that must be
replaced before launch.

---

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints. `npm run build` produces the production build,
`npm run lint` checks the code.

---

## Before it goes live

1. **Replace every `TODO:CONFIRM`** in `src/content/site.ts` — name, business
   name, domain, city, phone, email, prices, biography.
2. **Check the photo choices.** The supplied photographs are placed in
   `src/content/site.ts` under `photos`, with alt text written for each. One
   image, `/photos/miki-with-client.jpg`, is not yet used anywhere — swap it in
   if it suits a section better.
3. **Collect real testimonials.** `testimonials` in `src/content/site.ts` is
   deliberately empty, and the section stays hidden while it is. Add real
   quotes with permission. Do not invent them.
4. **Have the legal pages checked.** `/privacy` and `/terms` are plain language
   starting points written for a Reiki practice, not legal advice.
5. **Set up the scheduler** (below) and the **contact email** (below).

---

## Setting up booking

The booking page shows a real scheduler as soon as one exists. Until then it
shows a "book by message or phone" panel, so the page is never broken.

1. Create a free account with Calendly, Acuity, or Cal.com.
2. Create an event type for each session length.
3. Copy the public booking link.
4. Paste it into `site.scheduler.embedUrl` in `src/content/site.ts`:

```ts
scheduler: {
  provider: "Calendly",
  embedUrl: "https://calendly.com/miki-healing/60min",
},
```

---

## Setting up the contact form

The form posts to `/api/contact`, which sends the message on using
[Resend](https://resend.com) (free tier covers a practice this size).

Without the keys set the form still validates and still tells the visitor to
call or email instead — it degrades cleanly rather than failing silently.

1. Create a Resend account and verify the domain there.
2. Create an API key.
3. Copy `.env.example` to `.env.local` and fill in the three values.
4. Add the same three values in Vercel under **Settings → Environment
   Variables**, then redeploy.

---

## Deploying to Vercel

**First deploy**

1. Push this folder to the GitHub repository.
2. At [vercel.com/new](https://vercel.com/new), import that repository. Vercel
   detects Next.js on its own — no build settings to change.
3. Add the environment variables from `.env.example`.
4. Deploy. Every later push to `main` redeploys automatically.

**Pointing miki4.com at it**

The domain is registered at Wix, and its DNS today still points at Wix hosting:

| Type | Host | Current value |
|---|---|---|
| A | miki4.com | 185.230.63.107 |
| A | miki4.com | 185.230.63.186 |
| A | miki4.com | 185.230.63.171 |
| CNAME | www.miki4.com | cdn1.wixdns.net |

To move it to Vercel:

1. In the Vercel project: **Settings → Domains → Add**, enter `miki4.com`, and
   add `www.miki4.com` as well.
2. Vercel then shows the exact records to create. **Use the values Vercel gives
   you** rather than any copied from a guide, since they change over time. The
   usual shape is one A record on the apex and a CNAME on `www` pointing at
   `cname.vercel-dns.com`.
3. In Wix, under **Domains → Manage DNS Records**, replace the three A records
   above with the single A record Vercel gives you, and repoint the `www` CNAME
   from `cdn1.wixdns.net` to Vercel's value.
4. Wait for propagation. Usually minutes, occasionally a few hours. Vercel
   issues the HTTPS certificate on its own once the records resolve.

**Two warnings before touching those records**

- Changing the A records takes `miki4.com` off Wix hosting. If anything is
  currently published there, it stops resolving the moment this cuts over.
- **Do not delete MX records.** If email is set up on this domain through Wix
  Business Email, the MX records are what make it work, and they are unrelated
  to website hosting. Change only the A records and the `www` CNAME.

---

## What is in here

| Path | What it is |
|---|---|
| `src/content/site.ts` | All copy, prices and contact details |
| `src/app/page.tsx` | Home page |
| `src/app/services/` | Sessions and pricing |
| `src/app/about/` | Biography and credentials |
| `src/app/book/` | Scheduler and contact form |
| `src/app/privacy/`, `src/app/terms/` | Legal pages |
| `src/app/api/contact/` | Form handler, validation, rate limiting, email |
| `src/components/` | Header, footer, form, scroll reveals |
| `src/app/globals.css` | Colour palette and motion tokens |
| `public/logo/`, `public/photos/` | Brand marks and photography |

Search, social previews and structured data (`LocalBusiness`, `FAQPage`),
`sitemap.xml`, `robots.txt` and a custom 404 are all already wired up.
