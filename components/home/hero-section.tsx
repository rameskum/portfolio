import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const metrics = [
    {
      numeral: "20→<2 min",
      label: "upload time",
      context: "platform optimization",
    },
    {
      numeral: "Weeks→days",
      label: "development cycles",
      context: "API Source Loader",
    },
    {
      numeral: "−25%",
      label: "recovery overhead",
      context: "automated recovery toolkit",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="flex flex-col gap-6">
        {/* Overline */}
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {siteConfig.location}
        </p>

        {/* Name */}
        <h1 className="font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl">
          {siteConfig.name}
        </h1>

        {/* Headline */}
        <p className="text-base text-muted-foreground md:text-lg">
          {siteConfig.headline}
        </p>

        {/* Value prop */}
        <p className="max-w-2xl text-base leading-relaxed">
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="#experience">See selected work</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download resume
            </a>
          </Button>
        </div>

        {/* Impact metrics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p className="font-semibold tabular-nums text-3xl text-primary md:text-4xl">
                  {metric.numeral}
                </p>
                <p className="mt-1 text-base leading-relaxed">{metric.label}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {metric.context}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
