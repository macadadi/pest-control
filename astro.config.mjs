// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Replace with your production domain (required for canonical URLs + sitemap)
const site =
  typeof process.env.PUBLIC_SITE_URL === 'string' && process.env.PUBLIC_SITE_URL.length > 0
    ? process.env.PUBLIC_SITE_URL
    : 'https://example.com';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [sitemap()]
});