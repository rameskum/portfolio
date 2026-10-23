import { Separator } from '@/components/ui/separator';
import { caseStudies } from '@/lib/content';
import { CaseVisuals, Motif } from '@/components/illustrations';
import { ProofPoints } from '@/components/proof-points';

export function Work() {
  return (
    <section id="work" className="px-6 md:px-12 py-16 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-12">
          Case Studies
        </h2>

        <div className="space-y-16">
          {caseStudies.map((study, index) => {
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

                    <ProofPoints {...study} className="mb-6" />

                    <p className="text-xs font-mono text-muted-foreground">
                      {study.stack.join(' · ')}
                    </p>

                    {study.visuals && study.visuals.length > 0 ? (
                      <CaseVisuals keys={study.visuals} />
                    ) : (
                      study.motif && (
                        <div className="mt-8 w-48 h-48 opacity-20">
                          <Motif name={study.motif} className="w-full h-full" />
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
