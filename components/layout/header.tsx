import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/#experience", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/80 backdrop-blur-md md:h-16">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left - Wordmark */}
        <Link
          href="/"
          className="text-sm font-semibold transition-colors hover:text-primary"
        >
          ramesh
        </Link>

        {/* Mid - Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right - CTAs */}
        <div className="flex items-center gap-2">
          <Button size="sm" asChild className="hidden sm:flex">
            <Link href="/resume">Resume</Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden sm:flex"
          >
            <Link href="/#contact">Contact</Link>
          </Button>

          {/* Mobile Menu */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
