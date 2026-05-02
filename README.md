# Kenya Pest Control: Astro marketing site

SEO-first static site: **17 pest landing pages**, services, **Nairobi / Mombasa / Kisumu / Nakuru** locality pages, guides, FAQ (`FAQPage` schema), **`PestControlService` JSON-LD** on home, sitemap, robots.

**Imagery:** downloadable hero + cover art live in `public/images/covers/`, a mix of **Unsplash** photos and **Picsum** placeholders flagged in the footer. Swap in your own technician, van, and licence shots before serious ad spend; placeholders read fine for dev but never beat real trust photos.

Placeholder **NAP** (name, phone, email) lives in [`src/site.ts`](src/site.ts), replace before running ads or Google Business Profile workflows.

## Go-live checklist

1. Set production URL for canonicals + sitemap: `export PUBLIC_SITE_URL=https://your-domain.co.ke` then `npm run build`  
   Alternatively edit [`astro.config.mjs`](astro.config.mjs) `site` fallback (currently mirrors `PUBLIC_SITE_URL` or `https://example.com`).
2. Update **`public/robots.txt`** `Sitemap:` line to the same origin.
3. Replace phone, email, WhatsApp digits, and address in [`src/site.ts`](src/site.ts).
4. Submit `sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console) after DNS is stable.
5. Align Google Business Profile categories (e.g. “Pest control service”) with the same phone/address.

## Commands

| Command           | Action                    |
| :---------------- | :------------------------ |
| `npm install`     | Install dependencies       |
| `npm run dev`     | Dev server (`localhost:4321`) |
| `npm run build`   | Output to `dist/`         |
| `npm run preview` | Preview production build  |

Content lives in **`src/content/{pests,services,cities,blog}`**. Edit Markdown frontmatter (`title`, `description`, dates) plus body copy.
