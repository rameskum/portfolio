import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { featuredProjects } from '@/lib/content';
import { HomelabRack } from '@/components/svg-motifs';

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.16em] uppercase text-muted-foreground mb-12">
          Selected Builds
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={`group border border-foreground bg-card overflow-hidden ${
                project.highlight ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative aspect-video bg-muted flex items-center justify-center border-b border-foreground">
                {project.motif === 'HomelabRack' && (
                  <HomelabRack className="w-1/2 h-1/2 text-foreground opacity-40" />
                )}
                {!project.motif && (
                  <div className="text-sm text-muted-foreground">Preview</div>
                )}
                
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                {project.highlight && (
                  <div className="absolute top-0 right-0 w-2 h-full bg-accent-secondary" />
                )}
              </div>

              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
