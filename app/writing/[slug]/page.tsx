import Link from 'next/link';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Badge } from '@/components/ui/badge';
import { writing } from '@/lib/content';

export async function generateStaticParams() {
  return writing
    .filter((article) => article.enabled)
    .map((article) => ({
      slug: article.slug,
    }));
}

async function getArticleContent(bodyPath: string | null | undefined): Promise<string | null> {
  if (!bodyPath) return null;
  
  try {
    const fullPath = path.join(process.cwd(), bodyPath);
    const content = await fs.readFile(fullPath, 'utf-8');
    return content;
  } catch {
    return null;
  }
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

  const content = await getArticleContent(article.bodyPath);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-border bg-background">
        <header className="border-b border-border px-6 md:px-12 py-6">
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

            {content ? (
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <div className="mt-12 p-8 border border-muted bg-card rounded">
                  <p className="text-sm text-muted-foreground m-0">
                    <strong>Note:</strong> Full article content is being prepared.
                  </p>
                </div>
              </div>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
