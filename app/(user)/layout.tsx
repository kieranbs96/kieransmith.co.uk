import '../../styles/globals.scss';
import 'nprogress/nprogress.css';
import FontLoader from 'components/FontLoader';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white font-primary">
        <FontLoader />
        <Header />
        <main className="w-full">
          <div className="container mx-auto px-4">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
