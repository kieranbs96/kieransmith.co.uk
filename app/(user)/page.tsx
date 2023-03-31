import { Button } from 'components/Button';
import { GitHub, LinkedIn } from 'components/SocialIcons';

export default function Home() {
  const gridItemStyles = 'rounded-lg shadow-xl p-4';

  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-3">
      <div className={`peach-wave ${gridItemStyles} col-span-3 min-h-[300px] `}>
        <h2 className="text-3xl font-bold">Hi, I’m Kieran, a Software Engineer</h2>
        <div className="flex items-center gap-2">
          <Button
            className="rounded-full bg-slate-700 px-6"
            type="anchor"
            href="mailto:kieranbs96@gmail.com"
          >
            Contact me
          </Button>
          <Button
            className="rounded-full bg-slate-700"
            href="https://www.linkedin.com/in/kieranbs96/"
            type="anchor"
            target="blank"
          >
            <LinkedIn />
          </Button>
          <Button
            className="rounded-full bg-slate-700"
            href="https://github.com/kieranbs96/"
            type="anchor"
            target="blank"
          >
            <GitHub />
          </Button>
        </div>
      </div>
      <div className={`bg-slate-700 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-yellow-500 ${gridItemStyles} col-span-2 min-h-[600px]`}>...</div>
      <div className={`bg-green-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-teal-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-blue-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-indigo-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-purple-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-pink-500 ${gridItemStyles} min-h-[150px]`}>...</div>
      <div className={`bg-slate-500 ${gridItemStyles} min-h-[150px]`}>...</div>
    </div>
  );
}
