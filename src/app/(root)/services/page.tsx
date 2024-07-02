'use client';

import { ArrowDown, ArrowDownRight } from 'lucide-react';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
    href: '',
  },
  {
    num: '03',
    title: 'Logo Design',
    description:
      "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
    href: '',
  },
  {
    num: '04',
    title: 'SEO',
    description:
      "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
    href: '',
  },
];

const ServicesPage = () => {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-1 flex-col justify-center gap-6"
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-outline group-hover:text-outline-hover text-5xl font-extrabold text-transparent transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="flex size-[70px] items-center justify-center rounded-full bg-secondary transition-all duration-500 hover:-rotate-45 group-hover:bg-primary"
                >
                  <ArrowDownRight className="text-3xl text-primary group-hover:text-secondary" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-[42px] font-bold leading-none transition-all duration-500 group-hover:text-primary">
                {service.title}
              </h2>
              {/* description */}
              <p className="text-foreground/60">{service.description}</p>
              {/* border */}
              <div className="w-full border-b border-muted"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
