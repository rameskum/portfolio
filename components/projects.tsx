import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { featuredProjects } from '@/lib/content';
import { HomelabRack, HomelabTopology, PipelineFlow, RecoveryLoop } from '@/components/svg-motifs';

const motifs = {
  HomelabRack,
  HomelabTopology,
  PipelineFlow,
  RecoveryLoop,
};

export function Projects() {
  const selectedBuilds = featuredProjects.filter(p => p.section === 'selected-builds');
  const alsoShipsUI = featuredProjects.filter(p => p.section === 'also-ships-ui');

  const renderProjectCard = (project: typeof featuredProjects[0]) => {
    const isSecondary = project.tier === 'secondary';
    const MotifComponent = project.motif && motifs[project.motif as keyof typeof motifs];
    
    return (
      <div
        key={project.id}
        className={`group border border-border bg-card overflow-hidden ${
          project.highlight ? 'md:col-span-2' : ''
        } ${isSecondary ? 'opacity-90' : ''}`}
      >
        <div className="relative aspect-video bg-[#201e1b] isolate flex items-center justify-center border-b border-border">
          {project.image && (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-[#daa189] mix-blend-multiply opacity-50 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#201e1b]/70 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
            </>
          )}
          {!project.image && MotifComponent && (
            <MotifComponent className="w-full h-full p-8 text-[#e8855a] opacity-80" />
          )}
          {!project.image && !project.motif && (
            <div className="text-sm text-[#f5f4ec]/50">Preview</div>
          )}
          
          <div className={`absolute top-0 left-0 w-2 h-full ${isSecondary ? 'bg-muted' : 'bg-accent'}`} />
          {project.highlight && (
            <div className="absolute top-0 right-0 w-2 h-full bg-accent-secondary" />
          )}
        </div>

        <div className="p-6 bg-card">
          {project.eyebrow && (
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
              {project.eyebrow}
            </p>
          )}
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          {!isSecondary && project.ownershipLine && (
            <div className="mb-3 pb-3 border-b border-border/50">
              <p className="text-sm leading-relaxed">{project.ownershipLine}</p>
            </div>
          )}

          {!isSecondary && project.beforeAfter && (
            <div className="mb-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                BEFORE → AFTER
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.beforeAfter}</p>
            </div>
          )}

          {!isSecondary && project.talkingPoint && (
            <div className="mb-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1">
                TALKING POINT
              </p>
              <p className="text-sm leading-relaxed text-primary italic">"{project.talkingPoint}"</p>
            </div>
          )}

          {project.bullets && project.bullets.length > 0 && (
            <ul className="space-y-2 mb-4">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.stack.slice(0, project.tier === 'secondary' ? 4 : 8).map((tech) => (
              <Badge key={tech} variant={isSecondary ? 'outline' : 'default'} className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <div className="flex gap-3">
              {project.liveUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live →
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code →
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-12">
            Selected Builds
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedBuilds.map(renderProjectCard)}
          </div>
        </div>
      </section>

      {alsoShipsUI.length > 0 && (
        <section id="also-ships-ui" className="px-6 md:px-12 py-16 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-4">
              Also ships UI
            </h2>
            <p className="text-sm text-muted-foreground mb-12">
              Full-stack product surfaces — secondary to platform work above.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {alsoShipsUI.map(renderProjectCard)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
