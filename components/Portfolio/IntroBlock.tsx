import { Button } from '../Button';
import { GitHub, LinkedIn } from '../SocialIcons';

const IntroBlock = () => {
  const infoBlock = {
    title: 'Hi, my name is Kieran',
    description: `I'm a software engineer based in London, UK. I'm currently working at Global Radio building a radio & podcast streaming service.`,
    wip: 'This project is currently a work in progress, feel free to contact me for more information.',
  };

  return (
    <div className="relative h-full">
      <h1 className="text-3xl font-semibold">{infoBlock.title}</h1>
      <p className="mt-4 text-lg">{infoBlock.wip}</p>
      <h2 className="mb-6 mt-4 text-lg md:mb-20">{infoBlock.description}</h2>
      <div className="flex flex-wrap items-center gap-2">
        <Button
          className="rounded-full bg-slate-700 px-6 hover:bg-slate-600"
          type="anchor"
          href="mailto:kieranbs96@gmail.com"
          target="_blank"
        >
          Contact me
        </Button>
        <Button
          type="anchor"
          href="https://www.linkedin.com/in/kieranbs96/"
          target="_blank"
          className="rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <LinkedIn />
        </Button>
        <Button
          type="anchor"
          href="https://github.com/kieranbs96/"
          target="_blank"
          className="rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <GitHub />
        </Button>
        <Button
          type="anchor"
          href="https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/edit?usp=sharing"
          target="_blank"
          className="rounded-full bg-slate-700 px-6 hover:bg-slate-600"
        >
          Résumé
        </Button>
      </div>
    </div>
  );
};

export default IntroBlock;
