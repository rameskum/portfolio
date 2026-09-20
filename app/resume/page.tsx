'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/content';

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-foreground bg-background">
        <header className="border-b border-foreground px-6 md:px-12 py-6 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
            ← RK®
          </Link>
          <Button asChild>
            <a href={site.resumePath} download="Ramesh-Kumar-Resume.pdf">
              Download PDF
            </a>
          </Button>
        </header>

        <main className="px-6 md:px-12 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Resume</h1>

            {hasError ? (
              <div className="border border-foreground bg-card p-8 text-center">
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
              <div className="border border-foreground bg-card relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                      <p className="text-sm text-muted-foreground">Loading resume...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={site.resumePath}
                  className="w-full h-[calc(100vh-16rem)] min-h-[800px]"
                  title="Resume PDF"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                />
              </div>
            )}

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
