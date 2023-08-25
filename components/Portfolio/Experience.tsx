import React from 'react';
import { Badge } from '../ui/badge';
import { Link } from 'lucide-react';

const experiences = [
  {
    jobTitle: 'Frontend Engineer',
    name: 'Global',
    employerLink: 'https://www.globalplayer.com',
    linkDisplay: 'www.globalplayer.com',
    from: 'Jun 2021',
    to: 'Present',
    description:
      'Developing and enhancing features for the Global Player web application, constructed using Next.js and TypeScript. Proficiently conducting integration tests employing Jest, React Testing Library, and Mock Service Worker. Collaborating seamlessly within an extensive team of developers and designers to deliver novel functionalities and optimize overall performance. Additionally, gained valuable exposure to backend operations involving Python and GraphQL.',
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
    linkDisplay: 'www.ef.com',
    from: 'July 2019',
    to: 'June 2021',
    description:
      'Proficiently managing an extensive React codebase, encompassing numerous micro-sites developed using a combination of Next.js and Gatsby, including the primary EF website. Collaborating seamlessly within a sizable team of developers and designers to drive the creation of various functionalities and enhancements in performance.',
    technologies: ['React', 'Gatsby', 'TypeScript', 'Next.js', 'Storybook'],
  },
  {
    jobTitle: 'Frontend Engineer',
    name: 'Conversion',
    employerLink: 'https://www.conversion.com',
    linkDisplay: 'www.conversion.com',
    from: 'May 2018',
    to: 'July 2019',
    description:
      "Developing functionalities and performance monitoring for prominent clients including Canon, Domino's, and Just Eat. Leveraging JavaScript expertise to execute A/B testing through platforms such as Conversion, Qubit, and VWO.",
    technologies: ['JavaScript', 'A/B Testing', 'CSS'],
  },
  {
    jobTitle: 'Junior Web Developer',
    name: 'SellerDeck Ltd',
    employerLink: 'https://www.sellerdeck.co.uk',
    linkDisplay: 'www.sellerdeck.co.uk',
    from: 'Aug 2015',
    to: 'May 2018',
    description:
      "Transitioned from a role as a 3rd line support engineer at SellerDeck to pursue a development career in 2015, assuming an in-house position. Focused on diverse client projects utilizing the SellerDeck platform. Proficiently delivered customized websites employing SellerDeck's templating language, similar to PHP, in addition to collaborating with Magento and WordPress.",
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
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 sm:col-span-2"
              aria-label="July to December 2015"
            >
              {experience.from}
              <br />— {experience.to}
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
              <div className="mt-1 flex  items-center gap-2 text-sm leading-normal text-slate-200 group-hover:text-sky-300">
                <Link size={16} /> {experience.linkDisplay}
              </div>
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
