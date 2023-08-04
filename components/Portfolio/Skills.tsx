import Image from 'next/image';
import React from 'react';

const skills = [
  {
    name: 'React',
    icon: '/react.svg',
    description: '~5 years',
  },
  {
    name: 'Next.js',
    icon: '/nextjs.svg',
    description: '~3 years',
  },
  {
    name: 'Tailwind CSS',
    icon: '/tailwind.svg',
    description: '~1 year',
  },
  {
    name: 'TypeScript',
    icon: '/typescript.svg',
    description: '~2 years',
  },
  {
    name: 'Jest',
    icon: '/jest.svg',
    description: '~3 years',
  },
  {
    name: 'Node.js',
    icon: '/nodejs.svg',
    description: '~3 years',
  },
  {
    name: 'GraphQL',
    icon: '/graphql.svg',
    description: '~2 years',
  },
  {
    name: 'Apollo',
    icon: '/apollo.svg',
    description: '~1 year',
  },
  {
    name: 'Storybook',
    icon: '/storybook.svg',
    description: '~3 years',
  },
  {
    name: 'Drizzle',
    icon: '/drizzle.svg',
    description: '~1 year',
  },
  {
    name: 'SQL',
    icon: '/sql.svg',
    description: '~2 years',
  },
];

export default function Skills() {
  return (
    <div className="relative h-full">
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center p-4 text-stone-700">
            <Image src={skill.icon} alt={skill.name} height={48} width={48} className="h-12 w-12" />
            <h3 className="my-3 text-3xl font-semibold">{skill.name}</h3>
            <div className="space-y-1 leading-tight">
              <p>{skill?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
