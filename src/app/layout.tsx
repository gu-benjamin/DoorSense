'use client'

import './globals.css';
import type { Metadata } from 'next';
import { Mplus } from './../utils/fonts';
import Providers from '../contexts/dark-theme';
import { usePathname } from 'next/navigation';
import { checkIsPublicPage } from 'functions/checkIsPublicPage';
import PrivateRoute from './../components/PrivateRoute/index';

export const metadata: Metadata = {
  title: 'DoorSense - Login',
  description: 'A experiência sensorial da inclusão'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const IsPublicPage = checkIsPublicPage(pathname!);

  console.log(IsPublicPage);

  return (
    <html lang="pt-br" className="light" style={{ colorScheme: 'light' }}>
      <body className={Mplus.className}>
        <Providers>
          {IsPublicPage && children}
          {!IsPublicPage && <PrivateRoute pathname={pathname}>{children}</PrivateRoute>}
        </Providers>
      </body>
    </html>
  );
}
