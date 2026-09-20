import Link from 'next/link';
import { site } from '@/lib/content';

export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-12 border-b border-border">
      <div className="text-lg font-bold tracking-tight">{site.wordmark}</div>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="#work"
          className="text-xs tracking-[0.16em] uppercase hover:text-primary transition-colors"
        >
          Work
        </Link>
        <Link
          href="#projects"
          className="text-xs tracking-[0.16em] uppercase hover:text-primary transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#writing"
          className="text-xs tracking-[0.16em] uppercase hover:text-primary transition-colors"
        >
          Writing
        </Link>
        <Link
          href="/resume"
          className="text-xs tracking-[0.16em] uppercase hover:text-primary transition-colors"
        >
          Resume
        </Link>
        <Link
          href="#contact"
          className="text-xs tracking-[0.16em] uppercase hover:text-primary transition-colors"
        >
          Contact
        </Link>
      </nav>

      <div className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
        {site.location}
      </div>
    </header>
  );
}
