import type { MetadataRoute } from 'next';
import { writing } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://rameskum.com';

  const articles = writing
    .filter((article) => article.enabled)
    .map((article) => ({
      url: `${base}/writing/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

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
    {
      url: `${base}/writing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...articles,
  ];
}
