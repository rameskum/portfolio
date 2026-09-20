import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { writing } from '@/lib/content';
import { enabledSorted } from '@/lib/content';

export default function WritingPage() {
  const articles = enabledSorted(writing);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-border bg-background">
        <header className="border-b border-border px-6 md:px-12 py-6">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
            ← RK®
          </Link>
        </header>

        <main className="px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Writing</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Technical articles and thoughts on backend engineering, data platforms, and systems design.
            </p>

            <div className="space-y-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/writing/${article.slug}`}
                  className="block group"
                >
                  <article className="border border-border bg-card p-6 hover:bg-muted transition-colors">
                    <time className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
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
        </main>
      </div>
    </div>
  );
}
