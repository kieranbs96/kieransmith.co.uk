import GridItem from '../../components/GridItem';
import Intro from '../../components/Portfolio/Intro';
import Project from '../../components/Portfolio/Project';
import Experience from '../../components/Portfolio/Experience';

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
      href: 'https://github.com/kieranbs96/twitter-clone',
      image: '/twitter-clone.png',
    },
    {
      name: 'Lake Side RPG',
      description: 'A website for a game server built with React, Drizzle & Tailwind CSS.',
      href: 'https://lakesiderpg.com/',
      image: '',
    },
  ];

  return (
    <div className="mb-4 grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-6 lg:gap-y-12">
      {/* <div className="col-span-6 p-6 lg:col-span-3">
        <Intro />
      </div>
      <div className="col-span-6 flex flex-col gap-8 p-6 lg:col-span-3">
        <Experience />
      </div>

      <div className="col-span-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <h2 id="projects" className="sr-only col-span-3 text-2xl font-bold text-slate-50">
          Projects
        </h2>
        <GridItem className="col-span-3 bg-green-600 lg:col-span-1">
          <Project project={projects[0]} />
        </GridItem>
        <GridItem className="col-span-3 bg-blue-500 lg:col-span-1">
          <Project project={projects[1]} />
        </GridItem>
        <GridItem className="col-span-3 bg-blue-300 text-stone-700 lg:col-span-1">
          <Project project={projects[2]} />
        </GridItem>
      </div> */}
    </div>
  );
}
