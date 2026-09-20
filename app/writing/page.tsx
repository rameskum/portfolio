import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { posts } from "@/content/writing";

export default function WritingPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mb-12">
        <h1 className="font-semibold tracking-tight text-4xl md:text-5xl">
          Writing
        </h1>
        <p className="mt-4 text-muted-foreground">
          Thoughts on backend engineering, data platforms, and distributed systems
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={post.slug}>
            {index > 0 && <Separator className="mb-8" />}
            <Link
              href={`/writing/${post.slug}`}
              className="group block rounded-lg p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <time className="text-sm text-muted-foreground sm:w-32 sm:flex-shrink-0">
                  {post.date}
                </time>
                <div className="flex-1">
                  <h2 className="font-semibold text-xl transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
