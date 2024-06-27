import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-4xl font-semibold">
        Ramesh <span className="text-primary">.</span>
      </h1>
    </Link>
  );
};

export default Logo;
