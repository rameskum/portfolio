import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { writing } from '@/lib/content';

export async function generateStaticParams() {
  return writing
    .filter((article) => article.enabled)
    .map((article) => ({
      slug: article.slug,
    }));
}

export default async function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const article = writing.find((a) => a.slug === slug && a.enabled);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-foreground bg-background">
        <header className="border-b border-foreground px-6 md:px-12 py-6">
          <Link href="/writing" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
            ← Writing
          </Link>
        </header>

        <main className="px-6 md:px-12 py-16">
          <article className="max-w-3xl mx-auto">
            <header className="mb-12">
              <time className="text-sm text-muted-foreground">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                {article.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>

              <div className="mt-12 p-8 border border-muted bg-card rounded">
                <p className="text-sm text-muted-foreground m-0">
                  <strong>Note:</strong> This is a placeholder article page. Full article content
                  will be added from the rameskum-blogs repository.
                </p>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
