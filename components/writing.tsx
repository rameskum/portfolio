import { Badge } from '@/components/ui/badge';
import { BLOG_URL, getLatestPosts } from '@/lib/blog';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function Writing() {
  const posts = await getLatestPosts(4);

  return (
    <section id="writing" className="px-6 md:px-12 py-16 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground">
            Writing
          </h2>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-primary transition-colors"
          >
            View all →
          </a>
        </div>

        {posts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {posts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <article className="border border-border bg-card p-6 hover:bg-muted transition-colors h-full">
                  <time className="text-xs text-muted-foreground">
                    {formatDate(post.date)}
                  </time>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-3 break-words">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </article>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Latest posts live on the blog —{' '}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline"
            >
              read them here →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
