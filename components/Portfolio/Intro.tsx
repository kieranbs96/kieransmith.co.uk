import Link from 'next/link';
import Icon from '../Icon';
import { Separator } from '../ui/separator';

const Intro = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight text-sky-200 sm:text-5xl">
        <a href="/">Kieran Smith</a>
      </h1>
      <h2 className="mb-4 mt-3 inline-flex text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Frontend Engineer at Global
      </h2>
      <p>
        An experienced & ambitious self-taught web developer based in London with over 7 years of
        professional experience in the field. Over the past 4 years my specialization has revolved
        around React, a journey that has equipped me with an in-depth understanding of its nuances.
      </p>
      <Link
        target="_blank"
        aria-label="View Full Résumé"
        className="group mt-8 inline-flex items-center gap-2 font-medium leading-tight text-sky-200"
        href="https://docs.google.com/document/d/1SrjgdxkoMGls5e3nOPQBDnhMV6K4XVgDUewDuK5NhBo/edit?usp=sharing"
      >
        <span className="border-b border-transparent pb-px transition group-hover:border-sky-300 motion-reduce:transition-none">
          View Full Résumé
        </span>
        <Icon
          name="move-right"
          className="transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
        />
      </Link>
      <Separator className="my-8 bg-sky-200/50" />
      <div className=" flex flex-wrap items-center gap-4">
        <Link className="hover:text-sky-300" href="mailto:kieranbs96@gmail.com" target="_blank">
          <Icon name="mail" size={28} />
        </Link>

        <Link
          className="hover:text-sky-300"
          href="https://www.linkedin.com/in/kieranbs96/"
          target="_blank"
        >
          <Icon name="linkedin" size={28} />
        </Link>

        <Link className="hover:text-sky-300" href="https://github.com/kieranbs96/" target="_blank">
          <Icon name="github" size={28} />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
