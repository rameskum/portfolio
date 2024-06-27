'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import Link from 'next/link';
import Logo from '@/components/logo';
import { Menu } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <Menu className="text-[32px] text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 text-center text-2xl">
          <Logo />
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                'text-xl font-medium capitalize transition-all hover:text-primary',
                {
                  'border-b-2 border-primary text-primary':
                    pathname === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
