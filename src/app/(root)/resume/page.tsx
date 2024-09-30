'use client';

import {
  FaAngular,
  FaAws,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
  title: 'About Me',
  Description:
    "I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ramesh Kumar',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1 437) 518 7719',
    },
    {
      fieldName: 'Experience',
      fieldValue: '~8 Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'rameskum.ms',
    },
    {
      fieldName: 'Email',
      fieldValue: 'rameskum.corp@outlook.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Hindi',
    },
  ],
};

// experience
const experience = {
  icon: '/assets/icons/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, alias.',
  items: [
    {
      company: 'Amdocs Canada',
      position: 'Software Developer',
      duration: 'Jan 2022 - Present',
    },
    {
      company: 'Betsol',
      position: 'Senior Applications Engineer',
      duration: 'Sep 2021 - Jan 2022',
    },
    {
      company: 'Oracle India Private Limited, IDC',
      position: 'Senior Applications Engineer',
      duration: 'Mar 2021 - Sep 2021',
    },
    {
      company: 'Amdocs Development Centre India',
      position: 'Software Developer',
      duration: 'Aug 2016 - Feb 2021',
    },
  ],
};

const education = [
  {
    icon: '/assets/icons/cap.svg',
    title: 'My Education',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, alias.',
    items: [
      {
        institution: 'NIT Rourkela',
        degree: 'Master of Technology, Computer Science',
        duration: '2014 - 2016',
      },
      {
        institution: 'Uttar Pradesh Technical University',
        degree: 'Bachelors of Technology, Computer Science',
        duration: '2009 - 2013',
      },
    ],
  },
];

const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, alias.',
  items: [
    {
      name: 'ReactJS',
      icon: <FaReact />,
    },
    {
      name: 'NextJS',
      icon: <SiNextdotjs />,
    },
    {
      name: 'TailwindCSS',
      icon: <SiTailwindcss />,
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
    },
    {
      name: 'NodeJS',
      icon: <FaNode />,
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS3',
      icon: <FaCss3 />,
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
    },
    {
      name: 'AWS',
      icon: <FaAws />,
    },
    {
      name: 'Angular',
      icon: <FaAngular />,
    },
    {
      name: 'Spring Boot',
      icon: <SiSpring />,
    },
  ],
};

const ResumePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn' } }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-foreground/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-secondary/50 px-10 py-6 lg:items-start"
                      >
                        <span className="text-primary">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="h-[6px] w-[6px] rounded-full bg-primary"></span>
                          <p className="text-foreground/80">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
