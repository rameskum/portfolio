import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getPost, posts } from "@/content/writing";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Ramesh Kumar`,
    description: post.excerpt,
  };
}

export default async function WritingSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Button variant="ghost" size="sm" asChild className="mb-8">
        <Link href="/writing">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Writing
        </Link>
      </Button>

      <article>
        <header className="mb-8">
          <h1 className="font-semibold tracking-tight text-4xl md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <time className="text-sm text-muted-foreground">{post.date}</time>
          </div>
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <Separator className="mb-8" />

        <div className="prose prose-invert max-w-none">
          <p className="lead">{post.excerpt}</p>

          <h2>Introduction</h2>
          <p>
            This is a placeholder article. The full content would be implemented
            using MDX or a CMS integration.
          </p>

          <h2>Key Concepts</h2>
          <p>
            Real articles would contain technical deep-dives on backend
            engineering, data platforms, and distributed systems topics.
          </p>

          <h3>Implementation Details</h3>
          <p>
            Example code snippets, architecture diagrams, and practical lessons
            learned from production systems would appear here.
          </p>

          <h2>Conclusion</h2>
          <p>
            Summary and key takeaways reinforcing backend and data engineering
            expertise.
          </p>
        </div>

        <Separator className="mt-12" />

        <div className="mt-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/writing">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
