import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { caseStudies } from '@/lib/content';
import { PipelineFlow, RecoveryLoop, HomelabRack } from '@/components/svg-motifs';

const motifs = {
  PipelineFlow,
  RecoveryLoop,
  HomelabRack,
};

export function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-16 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.16em] uppercase text-muted-foreground mb-12">
          Case Studies
        </h2>

        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const MotifComponent = study.motif && motifs[study.motif as keyof typeof motifs];
            
            return (
              <div key={study.id}>
                <div className="grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-1 text-6xl font-bold text-muted/40">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="md:col-span-11">
                    <div className="flex flex-wrap items-baseline gap-3 mb-4">
                      <h3 className="text-xl font-bold">{study.org}</h3>
                      <span className="text-sm text-muted-foreground">
                        {study.role}
                      </span>
                      {study.location && (
                        <span className="text-sm text-muted-foreground">
                          · {study.location}
                        </span>
                      )}
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold mb-4">
                      {study.title}
                    </h4>

                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {study.summary}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {study.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-3">
                          <span className="text-primary mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {study.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-6 mb-6">
                        {study.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-xl font-semibold tabular-nums">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {study.stack.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {MotifComponent && (
                      <div className="mt-8 w-48 h-48 opacity-20">
                        <MotifComponent className="w-full h-full" />
                      </div>
                    )}
                  </div>
                </div>

                {index < caseStudies.length - 1 && (
                  <Separator className="mt-16" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
