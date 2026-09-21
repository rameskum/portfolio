import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rameskum.com';

  // Note: /writing and /writing/* 301-redirect to https://blogs.rameskum.com
  // (see next.config.ts), so article URLs are intentionally absent here.
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${base}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];
}
