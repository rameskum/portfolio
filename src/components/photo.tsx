'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.4, ease: 'easeIn' }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeInOut' }}
          className="absolute size-[298px] dark:mix-blend-lighten xl:size-[498px]"
        >
          <div className="absolute inset-0 hidden bg-gradient-to-b from-black from-[0%] opacity-40 dark:block" />
          <Image
            src="/assets/img/profile.png"
            alt="photo"
            priority
            fill
            // layout="fill"
            // objectFit="cover"
            quality={100}
            // dark:brightness-50 dark:invert
            className="rounded-full object-contain brightness-[85%]"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-t from-black from-[0%] to-[50%] dark:block" />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="size-[300px] xl:size-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 130 25 25', '16 25 92 72'],
              rotate: [120, 150],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            className="opacity-20"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
