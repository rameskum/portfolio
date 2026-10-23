import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getLatestPosts } from './blog';

const post = (over: Record<string, unknown> = {}) => ({
  title: 'T',
  date: '2026-01-01',
  summary: 'S',
  url: 'https://blogs.rameskum.com/p/',
  tags: [],
  ...over,
});

function feed(body: unknown, init: { ok?: boolean; status?: number } = {}) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok: init.ok ?? true,
      status: init.status ?? 200,
      json: async () => body,
    })
  );
}

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe('getLatestPosts', () => {
  it('returns the first N posts', async () => {
    feed([post({ title: 'a' }), post({ title: 'b' }), post({ title: 'c' })]);
    const posts = await getLatestPosts(2);
    expect(posts.map((p) => p.title)).toEqual(['a', 'b']);
  });

  it('decodes entities in title, summary and tags', async () => {
    feed([
      post({
        title: 'Say &quot;hi&quot; &amp; bye',
        summary: 'a &lt; b &gt; c &#34;d&#34; &rsquo;e&rsquo; &ldquo;f&rdquo; &#x2019;',
        tags: ['R&amp;D'],
      }),
    ]);
    const [p] = await getLatestPosts(1);
    expect(p.title).toBe('Say "hi" & bye');
    expect(p.summary).toBe('a < b > c "d" \'e\' "f" \'');
    expect(p.tags).toEqual(['R&D']);
  });

  it('decodes in a single pass and leaves unknown entities alone', async () => {
    feed([post({ title: '&amp;lt; &bogus; &#0; &#99999999;' })]);
    const [p] = await getLatestPosts(1);
    expect(p.title).toBe('&lt; &bogus; &#0; &#99999999;');
  });

  it('degrades to an empty list when the feed is down', async () => {
    feed([], { ok: false, status: 503 });
    expect(await getLatestPosts(3)).toEqual([]);
  });

  it('degrades to an empty list when the feed shape is wrong', async () => {
    feed([{ title: 'no url' }]);
    expect(await getLatestPosts(3)).toEqual([]);
  });

  it('degrades to an empty list when the request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    expect(await getLatestPosts(3)).toEqual([]);
  });
});
