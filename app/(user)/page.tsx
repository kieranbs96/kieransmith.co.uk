import GridItem from '../../components/GridItem';
import IntroBlock from '../../components/Portfolio/IntroBlock';

import ProjectBlock from '../../components/Portfolio/ProjectBlock';
import FooterBlock from '../../components/Portfolio/FooterBlock';
import Image from 'next/image';

export default function Home() {
  const projects = [
    {
      name: 'Recipe Web App',
      description: 'A recipe web app built with Next.js, Sanity & Tailwind CSS.',
      href: 'https://recipes.kieransmith.co.uk/',
      image: '/recipe-app.png',
    },
    {
      name: 'Global Radio',
      description: 'A radio & podcast streaming service.',
      href: 'https://globalplayer.com/',
      image: '/global-player.png',
    },
    {
      name: 'Twitter Clone',
      description: 'A Twitter clone built with Next.js, Prisma & Tailwind CSS.',
      href: 'https://twitter-clone.kieransmith.co.uk/',
      image: '/twitter-clone.png',
    },
  ];

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <GridItem className="min-h-[300px] bg-gradient-to-r from-red-200 via-red-300  to-yellow-200 p-12 text-stone-700 md:col-span-2">
        <IntroBlock />
      </GridItem>
      <GridItem className="relative  bg-slate-700 p-0">
        <Image
          src="/london.jpg"
          className="grayscale filter"
          alt="image of london"
          height={350}
          width={400}
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 to-transparent  opacity-50 filter" />
      </GridItem>
      <GridItem className="bg-green-600">
        <ProjectBlock project={projects[0]} />
      </GridItem>
      <GridItem className="bg-blue-500">
        <ProjectBlock project={projects[1]} />
      </GridItem>
      <GridItem className="bg-blue-300 text-stone-700">
        <ProjectBlock project={projects[2]} />
      </GridItem>
      <GridItem className="bg-gradient-to-r from-red-200 via-red-300  to-yellow-200 p-12 md:col-span-3">
        <FooterBlock />
      </GridItem>
    </div>
  );
}
