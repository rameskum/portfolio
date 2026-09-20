"use client";

import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert } from "@/components/ui/alert";
import { siteConfig } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <Card className="mx-auto max-w-xl border bg-muted/50">
          <CardContent className="p-8 text-center md:p-10">
            <h2
              id="contact-heading"
              className="font-semibold tracking-tight text-2xl md:text-3xl"
            >
              Let&apos;s talk
            </h2>
            <p className="mt-2 text-muted-foreground">
              Toronto · Senior Backend & Data roles
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild>
                <a href={siteConfig.socials.email}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </Button>
            </div>

            <Separator className="my-8" />

            <Alert className="text-left">
              <p className="text-sm">
                <strong>Contact form not wired yet.</strong> This is a UI scaffold — form submission is not implemented. Please use the Email button above to reach out directly.
              </p>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
