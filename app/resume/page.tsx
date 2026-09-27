'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/content';

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-8">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-tight hover:text-primary transition-colors">
            ← Back
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <a href={site.resumePath} download="Ramesh-Kumar-Resume.pdf">
              Download PDF
            </a>
          </Button>
        </header>

        <main>
          <h1 className="text-3xl font-bold mb-8">Resume</h1>

          {hasError ? (
            <div className="border border-border bg-card p-8 text-center rounded">
              <div className="text-lg font-semibold mb-4">Unable to load PDF</div>
              <p className="text-sm text-muted-foreground mb-6">
                The resume PDF could not be displayed in your browser.
              </p>
              <Button asChild>
                <a href={site.resumePath} download="Ramesh-Kumar-Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          ) : (
            <div className="border border-border bg-card relative rounded overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-card">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin mb-3 mx-auto"></div>
                    <p className="text-sm text-muted-foreground">Loading resume...</p>
                  </div>
                </div>
              )}
              <iframe
                src={site.resumePath}
                className="w-full h-[calc(100vh-12rem)] min-h-[800px]"
                title="Resume PDF"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
              />
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              For the best experience, download the PDF or view it in a dedicated PDF reader.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
