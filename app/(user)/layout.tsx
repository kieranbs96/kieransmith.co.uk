import '../../styles/globals.scss';
import FontLoader from 'components/FontLoader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-gradient-to-b from-slate-800 via-slate-900 to-indigo-900 font-sans text-white">
        <FontLoader />
        <main className="w-full">
          <div className="mx-auto min-h-screen max-w-screen-2xl px-2 py-1 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
