/** Breadcrumb structured data helpers */

export type Crumb = { name: string; path: string };

export function breadcrumbsJsonLd(siteOrigin: string, chain: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: chain.map((c, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: c.name,
      item: `${siteOrigin}${c.path.startsWith('/') ? c.path : '/' + c.path}`
    }))
  };
}

export function faqPageJsonLd(
  pairs: readonly { question: string; answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: p.answer
      }
    }))
  };
}
