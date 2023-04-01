import Link from 'next/link';

function Header() {
  return (
    <header className="top-0 flex w-full flex-wrap items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link className="whitespace-nowrap' inline-block text-xl leading-relaxed" href="/">
            Kieran
          </Link>
        </div>

        <ul className="flex list-none flex-row space-x-4 lg:ml-auto">
          {/* <li className="inline-block">
            <Link href="/blog">
              Blog
            </Link>
          </li>
          <li className="inline-block">
            <a href="#projects">
              Projects
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
