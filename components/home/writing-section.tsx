import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedPosts } from "@/content/writing";

export function WritingSection() {
  const posts = getFeaturedPosts(3);

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="scroll-mt-16 border-t border-border bg-muted"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Writing
            </p>
            <h2
              id="writing-heading"
              className="font-semibold tracking-tight text-2xl md:text-3xl"
            >
              Latest posts
            </h2>
          </div>
          <Button variant="link" asChild>
            <Link href="/writing">
              All posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/writing/${post.slug}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground text-sm">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
