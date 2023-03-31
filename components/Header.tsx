import Link from 'next/link';

const styles = {
  headerText: 'text-lg leading-relaxed inline-block py-2 whitespace-nowrap',
};

function Header() {
  return (
    <header className="top-0 flex w-full flex-wrap items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link className={`${styles.headerText} uppercase`} href="/">
            Kieran
          </Link>
        </div>

        <ul className="flex list-none flex-row space-x-4 lg:ml-auto">
          <li className="inline-block">
            <Link className={styles.headerText} href="/blog">
              Blog
            </Link>
          </li>
          <li className="inline-block">
            <a className={styles.headerText} href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
