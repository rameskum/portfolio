'use client';

import Link from 'next/link';
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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={cn(
            'font-medium capitalize transition-all hover:text-primary',
            {
              'border-b-2 border-primary text-primary': pathname === link.href,
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
