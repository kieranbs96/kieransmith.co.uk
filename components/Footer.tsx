function Footer() {
  return (
    <footer className="top-0 flex w-full flex-wrap items-center justify-between px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-center px-4">
        <hr className="mb-4 h-1 w-full rounded border-0 bg-slate-800" />
        <p className="text-sm">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="text-slate-800">
            Kieran Smith
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
