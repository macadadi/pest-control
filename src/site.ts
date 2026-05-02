/** Replace with real business details for NAP consistency (GBP, footer, Contact). */

export const siteName = 'Kenya Pest Control';

export const siteTagline =
  'Reliable pest control and fumigation services in Kenya for homes, hospitality, logistics, farming, and food manufacturing; inspection-led treatment, documented programmes, and crews who plan for local climate and pest behaviour.';

export const siteUrl =
  typeof import.meta.env.PUBLIC_SITE_URL === 'string' && import.meta.env.PUBLIC_SITE_URL
    ? import.meta.env.PUBLIC_SITE_URL.replace(/\/$/, '')
    : typeof import.meta.env.SITE === 'string' && import.meta.env.SITE
      ? String(import.meta.env.SITE).replace(/\/$/, '')
      : 'https://example.com';

/** Display, E.164 `tel:`, and digits for `wa.me` (no +), one entry per line. */
export const businessPhones = [
  { display: '0710770278', whatsappDigits: '254710770278' }
] as const;

export const business = {
  name: siteName,
  phones: businessPhones,
  phoneDisplay: businessPhones[0].display,
  phoneTel: businessPhones[0].tel,
  email: 'info@kenyapestcontrol.co.ke',
  address: {
    /** Shown on Contact; keep aligned with Google Business Profile. */
    label: 'Registered office',
    street: 'Industrial Area, Nairobi',
    region: 'Kenya'
  },
  openingHours: 'Mo-Sa 08:00-18:00'
} as const;
