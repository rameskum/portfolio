import { Button } from '@/components/ui/button';
import { site, education } from '@/lib/content';

export function Contact() {
  const enabledSocials = site.socials.filter(s => s.enabled).sort((a, b) => a.order - b.order);

  return (
    <section id="contact" className="px-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-6">
              Contact
            </h2>
            <h3 className="text-3xl font-bold mb-6">Let's connect</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Open to backend engineering roles, data platform projects, and technical consulting.
            </p>

            <div className="space-y-4">
              <Button asChild>
                <a href={`mailto:${site.email}`}>Email me</a>
              </Button>

              <div className="flex gap-4">
                {enabledSocials.map((social) => (
                  <Button key={social.id} variant="outline" asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {education.length > 0 && (
            <div>
              <h2 className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground mb-6">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((entry) => (
                  <div key={entry.id} className="border border-border bg-card p-6">
                    <div className="text-lg font-bold mb-2">{entry.degree}</div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {entry.school}
                    </div>
                    <div className="text-sm text-muted-foreground">{entry.years}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
