import GridItem from '../../components/GridItem';
import IntroBlock from '../../components/Portfolio/IntroBlock';
import Image from 'next/image';
import ProjectBlock from '../../components/Portfolio/ProjectBlock';

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
      image: 'https://via.placeholder.com/300',
    },
    {
      name: 'Twitter Clone',
      description: 'A Twitter clone built with Next.js, Prisma & Tailwind CSS.',
      href: 'https://twitter-clone.kieransmith.co.uk/',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <GridItem className="peach-wave  min-h-[300px] p-12 md:col-span-2">
        <IntroBlock />
      </GridItem>
      <GridItem className="relative  bg-slate-700 p-0">
        <Image
          src="/london.jpg"
          className="grayscale filter"
          alt="image of london"
          height={300}
          width={400}
        />
        <div className="peach-wave absolute top-0 left-0 h-full w-full to-transparent  opacity-50 filter" />
      </GridItem>
      <GridItem className="bg-green-600">
        <ProjectBlock project={projects[0]} />
      </GridItem>
      <GridItem className="min-h-[300px]  bg-yellow-500 md:col-span-2 md:row-span-2">
        <ProjectBlock project={projects[1]} />
      </GridItem>
      <GridItem className="bg-blue-300">
        <ProjectBlock project={projects[2]} />
      </GridItem>
    </div>
  );
}
