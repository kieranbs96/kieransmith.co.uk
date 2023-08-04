import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';
import { Badge } from '../ui/badge';

const experiences = [
  {
    jobTitle: 'Frontend Engineer',
    name: 'Global',
    employerLink: 'https://www.globalplayer.com',
    dates: 'Jun 2021 — Present',
    description:
      'Building new features for and maintaining the Global Player web app which is built with Next.js with TypeScript and integration tested with Jest with React Testing Library and Mock Service Worker. Working with a large team of developers and designers to build new features and improve performance. Also had opportunities to work on the backend with Python and GraphQL.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Jest',
      'Storybook',
      'Python',
      'GraphQL',
      'Figma',
    ],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Education First',
    employerLink: 'https://www.ef.com',
    dates: 'July 2019 — June 2021',
    description:
      'Maintaining a large React codebase containing many micro-sites built with a mixture of Next.js and Gatsby including the main EF website. Working with a large team of developers and designers to build new features and improve performance.',
    technologies: ['React', 'Gatsby', 'TypeScript', 'Next.js', 'Storybook'],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Conversion',
    employerLink: 'https://www.conversion.com',
    dates: 'May 2018 — July 2019',
    description:
      'Building features and tracking performance for large clients such as Canon, Dominos & Just Eat using Javascript to test though A/B testing using services like Conversion, Qubit & VWO',
    technologies: ['JavaScript', 'A/B Testing', 'CSS'],
  },
  {
    jobTitle: 'Junior Web Developer',
    name: 'SellerDeck Ltd',
    employerLink: 'https://www.sellerdeck.co.uk',
    dates: 'Aug 2015 — May 2018',
    description:
      "Previously working as a 3rd line support engineer for SellerDeck, I moved into development in 2015 in an in-house role. I worked on a variety of projects for clients using the SellerDeck platform. Most projects involved producing bespoke websites for clients using SellerDeck's templating language similar to PHP. Also worked with Magento and WordPress.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
  },
];

export default function Experience() {
  return (
    <>
      <h2 id="experience" className="sr-only text-2xl font-bold text-slate-50">
        Experience
      </h2>
      <ul className="flex flex-col gap-12">
        {experiences.map((experience) => (
          <li
            key={experience.name}
            className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="July to December 2015"
            >
              {experience.dates}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300"
                    href={experience.employerLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${experience.jobTitle} at ${experience.name}`}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {experience.jobTitle} ·{' '}
                      <span className="inline-block">{experience.name}</span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">{experience.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                {experience.technologies.map((technology) => (
                  <Badge key={technology} className=" bg-sky-400/10 text-sky-300 ">
                    {technology}
                  </Badge>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
