import { Mplus } from 'utils/fonts';
import '../globals.css';
import type { Metadata } from 'next';
import Header from './../../components/Header/header';
import Footer from './../../components/Footer/footer';
import Providers from '../../contexts/dark-theme';

export const metadata: Metadata = {
  title: 'Dashboard - DoorSense',
  description: 'A experiência sensorial da inclusão'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="light" style={{ colorScheme: 'light' }}>
      <Providers>
        <body className={Mplus.className, `bg-secondary dark:bg-dark`}>
          <div className={`w-screen h-screen flex flex-col justify-between`}>
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
