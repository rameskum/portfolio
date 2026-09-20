import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/content';

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-foreground bg-background">
        <header className="border-b border-foreground px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
            ← RK®
          </Link>
          <Button asChild>
            <a href={site.resumePath} download>
              Download PDF
            </a>
          </Button>
        </header>

        <main className="px-6 md:px-12 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Resume</h1>

            <div className="border border-foreground bg-card">
              <div className="aspect-[8.5/11] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-lg text-muted-foreground mb-4">
                    PDF viewer will be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Place your resume.pdf in the /public directory
                  </p>
                  <Button asChild variant="outline">
                    <a href={site.resumePath} download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                For the best experience, download the PDF or view it in a dedicated PDF reader.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
