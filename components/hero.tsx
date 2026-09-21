import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { site, metrics, stack } from '@/lib/content';
import { profile } from '@/lib/profile';

export function Hero() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-success" />
          <span className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground">
            {profile.statusLabel}
          </span>
        </div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              {site.statement.leading}{' '}
              <span className="font-serif italic text-primary">
                {site.statement.accent}
              </span>{' '}
              {site.statement.trailing}
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild>
                <a href="#work">Selected work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume">Resume</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 md:hidden">
              {metrics.map((metric) => (
                <div key={metric.id}>
                  <div className="text-2xl font-semibold tabular-nums mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card border border-border rounded-t-full overflow-hidden">
              <Image
                src="/images/hero-arches.png"
                alt="Layered arches in charcoal, terracotta and orange with a circuit motif"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stack.map((item, index) => (
            <div key={item.id}>
              <div className="text-[11px] md:text-xs font-mono tracking-wider uppercase text-center py-4">
                {item.label}
              </div>
              {index < stack.length - 1 && (
                <Separator orientation="vertical" className="hidden md:block absolute right-0 top-0 h-full" />
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8 mt-12">
          {metrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="text-3xl font-semibold tabular-nums mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
