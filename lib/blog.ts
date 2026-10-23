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

// Hugo emits named and numeric HTML entities in the feed's text fields.
// Curly quotes are normalised to straight ones to match the site's typography.
const NAMED_ENTITIES: Record<string, string> = {
  quot: '"',
  amp: '&',
  lt: '<',
  gt: '>',
  apos: "'",
  nbsp: '\u00a0',
  lsquo: "'",
  rsquo: "'",
  ldquo: '"',
  rdquo: '"',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
};

const CURLY_QUOTES: Record<number, string> = {
  0x2018: "'",
  0x2019: "'",
  0x201c: '"',
  0x201d: '"',
};

// Single pass, so `&amp;lt;` decodes to the literal text `&lt;` and not `<`.
// Unknown or invalid entities are left untouched.
function decodeHtmlEntities(text: string): string {
  return text.replace(/&(?:#(\d+)|#x([0-9a-fA-F]+)|([a-zA-Z]+));/g, (match, dec, hex, name) => {
    if (name) return Object.hasOwn(NAMED_ENTITIES, name) ? NAMED_ENTITIES[name] : match;
    const code = dec ? parseInt(dec, 10) : parseInt(hex, 16);
    if (CURLY_QUOTES[code]) return CURLY_QUOTES[code];
    const valid = code > 0 && code <= 0x10ffff && !(code >= 0xd800 && code <= 0xdfff);
    return valid ? String.fromCodePoint(code) : match;
  });
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
