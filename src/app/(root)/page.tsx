import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Photo from '@/components/photo';
import Social from '@/components/social';

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-24 xl:pt-8">
          {/* text */}
          <div className="order-2 text-center xl:order-none xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{' '}
              <span className="text-primary">Ramesh Kumar</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-muted-foreground">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* buttons and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download Resume</span>

                <Download className="size-4" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-6 rounded-full flex items-center justify-center text-base hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
