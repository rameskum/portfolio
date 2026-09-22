import { Separator } from '@/components/ui/separator';
import { caseStudies } from '@/lib/content';
import { PipelineFlow, RecoveryLoop, HomelabRack } from '@/components/svg-motifs';
import { caseVisuals } from '@/components/case-visuals';

const motifs = {
  PipelineFlow,
  RecoveryLoop,
  HomelabRack,
};

const visualSizing: Record<string, string> = {
  'td-architecture': 'mx-auto w-full max-w-[300px]',
  'td-before-after': 'w-full',
};

export function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-16 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-12">
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
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{study.org}</h3>
                      <p className="mt-1 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                        {study.role}
                        {study.location && ` · ${study.location}`}
                      </p>
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

                    <p className="text-xs font-mono text-muted-foreground">
                      {study.stack.join(' · ')}
                    </p>

                    {study.visuals && study.visuals.length > 0 ? (
                      <div className="mt-8 mb-6 space-y-6">
                        {study.visuals.map((key) => {
                          const Visual = caseVisuals[key];
                          if (!Visual) return null;
                          return (
                            <div
                              key={key}
                              className="overflow-hidden rounded-2xl bg-[#201e1b] p-6 md:p-8"
                            >
                              <Visual
                                className={`${visualSizing[key] ?? 'w-full'} h-auto text-primary`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      MotifComponent && (
                        <div className="mt-8 w-48 h-48 opacity-20">
                          <MotifComponent className="w-full h-full" />
                        </div>
                      )
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
