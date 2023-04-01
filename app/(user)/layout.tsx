import '../../styles/globals.scss';
import FontLoader from 'components/FontLoader';
import Header from 'components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-slate-800 font-primary text-white">
        <FontLoader />
        <Header />
        <main className="w-full">
          <div className="container mx-auto px-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
