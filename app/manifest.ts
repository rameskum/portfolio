import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ramesh Kumar - Senior Backend & Data Engineer',
    short_name: 'Ramesh Kumar',
    description: 'Senior Backend & Data Engineer specializing in Java, Data Platforms & Cloud Modernization',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0F0E',
    theme_color: '#14B8A6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
