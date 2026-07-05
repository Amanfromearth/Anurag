/** Site-wide constants reused across SEO tags and structured data. */
export const SITE = {
  url: 'https://anurag.be',
  title: "Anurag's Portfolio",
  author: 'Anurag Bevinal',
  jobTitle: 'Full-Stack Developer',
  email: 'anurag3b@gmail.com',
  description:
    'Full-stack developer portfolio showcasing projects and skills',
  keywords:
    "full-stack developer, Anurag bevinal's portfolio, web applications, portfolio, front-end developer",
  ogImage: '/header.webp',
  ogImageWidth: 1920,
  ogImageHeight: 913,
  ogImageAlt: "Anurag Bevinal's developer portfolio",
  locale: 'en_US',
  twitter: '@amanfromearth_',
  gaId: 'G-E0FKVBGVHZ',
  themeColor: '#0c0d11',
  /** Profiles linked via schema.org `sameAs` so search engines connect them. */
  socials: {
    github: 'https://github.com/Amanfromearth',
    linkedin: 'https://www.linkedin.com/in/anuragbevinal/',
    twitter: 'https://twitter.com/amanfromearth_',
  },
} as const;

/** Absolute-URL helper for building canonical and og:image links. */
export const absoluteUrl = (path: string) => new URL(path, SITE.url).href;

/**
 * Person + WebSite JSON-LD. Emitted on every page so search engines have a
 * consistent identity for the site owner and can surface rich results.
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: SITE.author,
  url: SITE.url,
  image: absoluteUrl(SITE.ogImage),
  jobTitle: SITE.jobTitle,
  email: `mailto:${SITE.email}`,
  sameAs: Object.values(SITE.socials),
} as const;

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.title,
  description: SITE.description,
  inLanguage: 'en',
  author: { '@id': `${SITE.url}/#person` },
} as const;
