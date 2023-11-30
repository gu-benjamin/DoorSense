'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Mplus } from './../utils/fonts';
import Providers from '../contexts/dark-theme';
import { usePathname } from 'next/navigation';
import { checkIsPublicPage } from 'functions/checkIsPublicPage';
import PrivateFARoute  from '../components/PrivateRoutes/FirstAcess/';

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
  const IsFirstAcess = ((!IsPublicPage) && (pathname === '/FirstAcess'));

  return (
    <html lang="pt-br" className="light" style={{ colorScheme: 'light' }}>
      <body className={Mplus.className}>
        <Providers>
          {IsPublicPage && children}
          {pathname === '/Dashboard' && children}
          {IsFirstAcess && (
            <PrivateFARoute pathname={pathname}>{children}</PrivateFARoute>
          )}
        </Providers>
      </body>
    </html>
  );
}
