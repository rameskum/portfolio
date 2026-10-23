import { Separator } from '@/components/ui/separator';
import { caseStudies } from '@/lib/content';
import { CaseVisuals, Motif } from '@/components/illustrations';

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

                    {study.ownershipLine && (
                      <div className="mb-4">
                        <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                          OWNED
                        </p>
                        <p className="text-sm leading-relaxed">{study.ownershipLine}</p>
                      </div>
                    )}

                    {study.teamSize && (
                      <div className="mb-4">
                        <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                          TEAM
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{study.teamSize}</p>
                      </div>
                    )}

                    {study.beforeAfter && (
                      <div className="mb-4">
                        <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                          BEFORE → AFTER
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{study.beforeAfter}</p>
                      </div>
                    )}

                    {study.talkingPoint && (
                      <div className="mb-6">
                        <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                          INTERVIEW
                        </p>
                        <p className="text-sm leading-relaxed italic text-primary">"{study.talkingPoint}"</p>
                      </div>
                    )}

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
