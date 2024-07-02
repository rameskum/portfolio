import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/logo';
import MobileNav from '@/components/mobile-nav';
import Nav from '@/components/nav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* desktop navigation & contact button */}
        <div className="hidden items-center gap-4 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
