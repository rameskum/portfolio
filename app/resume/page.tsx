import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: "Resume - Ramesh Kumar",
  description: "Resume of Ramesh Kumar - Senior Backend & Data Engineer",
};

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button asChild>
          <a
            href={siteConfig.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex h-[calc(100vh-12rem)] w-full items-center justify-center bg-muted">
          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              PDF viewer placeholder
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              In production, this would display an embedded PDF viewer
              <br />
              (e.g., using react-pdf or an iframe)
            </p>
            <Button asChild>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>
          {siteConfig.name} · {siteConfig.headline}
        </p>
      </div>
    </div>
  );
}
