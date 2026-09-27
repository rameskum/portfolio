import { z } from 'zod';

// Shape of https://blogs.rameskum.com/posts.json — a Hugo-generated feed of
// all blog posts. The portfolio renders the latest entries in the Writing
// section instead of a hand-maintained list.
const BlogPostSchema = z.object({
  title: z.string(),
  date: z.string(),
  summary: z.string(),
  url: z.string().url(),
  tags: z.array(z.string()),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;

const BLOG_FEED_URL = 'https://blogs.rameskum.com/posts.json';
export const BLOG_URL = 'https://blogs.rameskum.com';

const htmlEntityMap: Record<string, string> = {
  '&rsquo;': "'",
  '&#8217;': "'",
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&#8220;': '"',
  '&#8221;': '"',
  '&mdash;': '—',
  '&ndash;': '–',
  '&amp;': '&',
  '&hellip;': '…',
};

export function decodeHtmlEntities(text: string): string {
  let decoded = text;
  for (const [entity, char] of Object.entries(htmlEntityMap)) {
    decoded = decoded.replace(new RegExp(entity, 'g'), char);
  }
  return decoded;
}

// Fetched once at build time so the homepage is fully static and served from
// the CDN edge (no serverless/ISR hop on the critical path). A feed outage
// never breaks the portfolio build — it degrades to an empty list.
// Trade-off: new posts appear after the next deploy; a daily Netlify build
// hook keeps the Writing section fresh without manual redeploys.
export async function getLatestPosts(count = 3): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_FEED_URL, { cache: 'force-cache' });
    if (!res.ok) throw new Error(`feed responded ${res.status}`);
    const posts = z.array(BlogPostSchema).parse(await res.json());
    return posts.slice(0, count).map(post => ({
      ...post,
      title: decodeHtmlEntities(post.title),
      summary: decodeHtmlEntities(post.summary),
      tags: post.tags.map(decodeHtmlEntities),
    }));
  } catch (err) {
    console.warn('[blog feed] falling back to empty list:', err);
    return [];
  }
}
