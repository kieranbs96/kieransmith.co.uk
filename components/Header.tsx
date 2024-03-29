import Link from 'next/link';

function Header() {
  return (
    <header className="top-0 flex w-full flex-wrap items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link
            className="min-w-full rounded bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-sky-800 via-sky-100 to-stone-700 bg-clip-text p-2 text-center text-2xl font-bold text-transparent caret-pink-600"
            href="/"
          >
            Kieran
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
