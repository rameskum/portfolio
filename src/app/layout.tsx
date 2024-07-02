import '@/styles/globals.css';

import Header from '@/components/header';
import { JetBrains_Mono } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jet-brains-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ramesh Kumar - Portfolio',
  description:
    "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          jetBrainsMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
