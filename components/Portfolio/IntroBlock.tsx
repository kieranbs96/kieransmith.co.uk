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
      <h2 className="text-3xl font-semibold">{infoBlock.title}</h2>
      <p className="mt-4 text-lg">{infoBlock.wip}</p>
      <p className="mb-20 mt-4 text-lg">{infoBlock.description}</p>
      <div className="absolute bottom-0 flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default IntroBlock;
