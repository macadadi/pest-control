// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Production canonical. Override per environment with PUBLIC_SITE_URL.
const FALLBACK_SITE = 'https://www.kenyapestcontrol.co.ke';
const site =
  typeof process.env.PUBLIC_SITE_URL === 'string' && process.env.PUBLIC_SITE_URL.length > 0
    ? process.env.PUBLIC_SITE_URL
    : FALLBACK_SITE;

// Stamped once per build so Google sees a consistent lastmod per deploy.
const BUILD_LASTMOD = new Date().toISOString();

/** @param {string} pathname */
function priorityFor(pathname) {
  if (pathname === '/') return 1.0;
  if (/^\/(services|pests)\/?$/.test(pathname)) return 0.9;
  if (/^\/(services|pests)\/[^/]+\/?$/.test(pathname)) return 0.8;
  if (/^\/locations\/?$/.test(pathname)) return 0.8;
  if (/^\/locations\/[^/]+\/?$/.test(pathname)) return 0.7;
  if (pathname === '/contact/') return 0.7;
  if (pathname === '/faq/') return 0.6;
  if (pathname === '/blog/') return 0.6;
  if (/^\/blog\/[^/]+\/?$/.test(pathname)) return 0.5;
  if (pathname === '/terms/') return 0.3;
  return 0.5;
}

/** @param {string} pathname */
function changefreqFor(pathname) {
  if (pathname === '/' || pathname === '/blog/') return 'weekly';
  if (pathname === '/terms/') return 'yearly';
  if (/^\/blog\/[^/]+\/?$/.test(pathname)) return 'monthly';
  return 'monthly';
}

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap({
      // Drop error pages and any future preview/draft routes from the index.
      filter: (page) => !/\/404\/?$/.test(page),
      serialize(item) {
        try {
          const { pathname } = new URL(item.url);
          item.priority = priorityFor(pathname);
          item.changefreq =
            /** @type {import('@astrojs/sitemap').SitemapOptions['changefreq']} */ (
              changefreqFor(pathname)
            );
          item.lastmod = BUILD_LASTMOD;
        } catch {
          // If the URL fails to parse, fall back to the integration defaults.
        }
        return item;
      }
    })
  ]
});
