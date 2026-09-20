'use client';

import Link from 'next/link';
import { useState } from 'react';
import { site } from '@/lib/content';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#projects', label: 'Projects' },
    { href: '#writing', label: 'Writing' },
    { href: '/resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

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

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="md:hidden p-2" aria-label="Menu">
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
          </button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 p-6">
            <div className="text-lg font-bold mb-4">{site.wordmark}</div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-bold tracking-[0.08em] uppercase hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
                {site.location}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="hidden md:block text-xs tracking-[0.16em] uppercase text-muted-foreground">
        {site.location}
      </div>
    </header>
  );
}
