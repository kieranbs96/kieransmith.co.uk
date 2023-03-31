import GridItem from '../../components/GridItem';
import IntroBlock from '../../components/Portfolio/IntroBlock';

export default function Home() {
  const projectsBlock = {
    title: 'Projects',
    description: 'A selection of projects I have worked on.',
    projects: [
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
      {
        name: 'Recipe Web App',
        description: 'A recipe web app built with Next.js, Sanity & Tailwind CSS.',
        href: 'https://recipes.kieransmith.co.uk/',
        image: '/recipe-app.png',
      },
    ],
  };

  return (
    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
      <GridItem className="peach-wave  min-h-[300px] p-12 md:col-span-2">
        <IntroBlock />
      </GridItem>
      <GridItem className="min-h-[150px] bg-slate-700">...</GridItem>
      <GridItem className="min-h-[150px]  bg-green-500">...</GridItem>
      <GridItem className="min-h-[300px]  bg-yellow-500 md:col-span-2 md:row-span-2">...</GridItem>
      <GridItem className="min-h-[150px]  bg-blue-500">...</GridItem>
    </div>
  );
}
