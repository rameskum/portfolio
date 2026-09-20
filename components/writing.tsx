import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { featuredWriting } from '@/lib/content';

export function Writing() {
  return (
    <section id="writing" className="px-6 md:px-12 py-16 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm hover:text-primary transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredWriting.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/writing/${article.slug}`}
              className="group"
            >
              <article className="border border-border bg-card p-6 hover:bg-muted transition-colors">
                <time className="text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
