import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Work } from '@/components/work';
import { Projects } from '@/components/projects';
import { Writing } from '@/components/writing';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto border-x border-foreground bg-background">
        <Header />
        <main>
          <Hero />
          <Work />
          <Projects />
          <Writing />
          <Contact />
        </main>
        <footer className="border-t border-foreground px-6 md:px-12 py-8">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Ramesh Kumar. Built with Next.js.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
