import type { NextConfig } from 'next';

const BLOG_URL = 'https://blogs.rameskum.com';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Writing moved to the blog: /writing/* now lives on blogs.rameskum.com.
    // Old article slugs don't map 1:1 to blog slugs, so everything lands on the blog home.
    return [
      {
        source: '/writing',
        destination: BLOG_URL,
        permanent: true,
      },
      {
        source: '/writing/:slug*',
        destination: BLOG_URL,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
