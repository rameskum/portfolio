import type { Metadata } from 'next';
import { profile } from './profile';

// Shared SEO building blocks. Next.js merges metadata shallowly at the
// `openGraph`/`twitter` keys, so every page must declare a complete block
// (including images and card type). `pageMetadata` does that, so a page
// cannot ship a partial one.
//
// Server-only: this imports the profile, which reads from disk.

export const SITE_URL = 'https://rameskum.com';
export const SITE_NAME = profile.name;

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
} as const;

const OG_BASE = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: SITE_NAME,
};

const TWITTER_CARD = {
  card: 'summary_large_image' as const,
  images: [OG_IMAGE.url],
};

// Complete metadata for one route. `path` is relative to the site root
// (e.g. '/resume'); `title` is the full document title.
export function pageMetadata({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      ...OG_BASE,
      title,
      description,
      url: path,
      images: [{ ...OG_IMAGE, alt: title }],
    },
    twitter: {
      ...TWITTER_CARD,
      title,
      description,
    },
  };
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.jobTitle,
    description: profile.metaDescription,
    knowsAbout: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Docker',
      'Kubernetes',
      'Apache Iceberg',
      'Data Engineering',
    ],
  };
}
