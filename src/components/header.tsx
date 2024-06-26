import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Nav from '@/components/nav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ramesh <span className="text-primary">.</span>
          </h1>
        </Link>

        {/* desktop navigation & contact button */}
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/hire">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
