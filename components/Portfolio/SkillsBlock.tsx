import Image from 'next/image';
import React from 'react';

export default function SkillsBlock() {
  const skills = [
    {
      name: 'React',
      icon: '/react.svg',
    },
    {
      name: 'Next.js',
      icon: '/nextjs.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: '/tailwind.svg',
    },
    {
      name: 'TypeScript',
      icon: '/typescript.svg',
    },
    {
      name: 'Jest',
      icon: '/jest.svg',
    },
    {
      name: 'Node.js',
      icon: '/nodejs.svg',
    },
  ];

  return (
    <div className="relative h-full">
      <div className="grid grid-cols-1 gap-3  md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-center">
            <div className="flex items-center justify-between gap-3">
              <Image
                src={skill.icon}
                alt={skill.name}
                height={48}
                width={48}
                className="h-12 w-12"
              />
              <p className="text-xl">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
