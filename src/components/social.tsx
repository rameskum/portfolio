import { Github, Linkedin } from 'lucide-react';

import Link from 'next/link';
import React from 'react';

const socials = [
  { icon: <Github />, href: 'https://github.com/rameskum' },
  { icon: <Linkedin />, href: 'https://www.linkedin.com/in/rameskum' },
];

const Social = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string;
  iconStyles?: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, href }, index) => (
        <Link key={index} href={href} target="_blank">
          <div className={iconStyles}>{icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Social;
