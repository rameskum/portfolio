import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/content/experience";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-16 border-t border-border bg-muted"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mb-8 flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="font-semibold tracking-tight text-2xl md:text-3xl"
          >
            Selected work
          </h2>
          <p className="text-muted-foreground">
            Production systems, not side projects
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className={cn(
                study.featured && "border-l-2 border-l-primary border-primary/30"
              )}
            >
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm">
                      {study.org} · {study.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {study.dateRange}
                  </p>
                </div>
                <CardTitle className="mt-2">{study.title}</CardTitle>
                {study.metrics.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {study.metrics.map((metric, idx) => (
                      <Badge key={idx} variant="secondary">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {study.summary}
                </p>
                {study.bullets && (
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {study.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {study.link && (
                  <Button variant="link" asChild className="w-fit px-0">
                    <Link href={study.link}>Read more →</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
