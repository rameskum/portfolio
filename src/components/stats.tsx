'use client';

import NumberTicker from '@/components/magicui/number-ticker';
import React from 'react';
import { cn } from '@/lib/utils';

const stats = [
  {
    num: 8,
    text: 'years of experience',
  },
  {
    num: 26,
    text: 'Project completed',
  },
  {
    num: 8,
    text: 'Technologies used',
  },
  {
    num: 1000,
    text: 'Code Commits',
  },
];

const Stats = () => {
  return (
    <section className="pb-12 pt-4 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
            >
              <NumberTicker
                value={stat.num}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={cn(
                  stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]',
                  'leading-snug text-foreground/80',
                )}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
