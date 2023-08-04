import '../../styles/globals.scss';
import FontLoader from 'components/FontLoader';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="bg-slate-900 font-sans text-white">
        <FontLoader />
        <main className="w-full">
          <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
