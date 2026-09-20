// Shared SEO building blocks. Next.js merges metadata shallowly at the
// `openGraph`/`twitter` keys, so every page must declare a complete block
// (including images and card type) rather than relying on the root layout.

export const SITE_URL = 'https://rameskum.com';
export const SITE_NAME = 'Ramesh Kumar';

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
} as const;

export function ogImages(alt: string) {
  return [{ ...OG_IMAGE, alt }];
}

export const TWITTER_CARD = {
  card: 'summary_large_image' as const,
  images: ['/og-image.png'],
};

export const OG_BASE = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: SITE_NAME,
};
