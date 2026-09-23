import Link from 'next/link';
import { site } from '@/lib/content';

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '/resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

// Server component: the mobile menu is CSS-only, driven by the :target
// pseudo-class, so the homepage ships no client JavaScript at all.
// Opening sets the #mobile-nav fragment; tapping any nav link, the backdrop,
// or the close button changes the fragment, which closes the panel.
export function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-6 md:px-12">
      <div className="text-lg font-bold tracking-tight">{site.wordmark}</div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-bold tracking-[0.16em] uppercase hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <a href="#mobile-nav" className="md:hidden p-2" aria-label="Open menu">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
      <div
        id="mobile-nav"
        className="fixed inset-0 z-50 hidden target:block md:hidden md:target:hidden"
      >
        <a
          href="#nav-closed"
          aria-label="Close menu"
          className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        />
        <nav className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-background border-l border-foreground shadow-lg animate-[sheet-in_0.3s_ease-out]">
          <div className="flex flex-col gap-6 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-bold">{site.wordmark}</div>
              <a href="#nav-closed" className="p-2" aria-label="Close menu">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-bold tracking-[0.08em] uppercase hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground">
                {site.location}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hidden md:block text-xs font-mono tracking-[0.16em] uppercase text-muted-foreground">
        {site.location}
      </div>
    </header>
  );
}
