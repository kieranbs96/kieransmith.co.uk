function Pill({ children }: { children: React.ReactNode }) {
  return <div className="rounded bg-slate-900 p-1 font-mono font-bold uppercase">{children}</div>;
}

export default Pill;
