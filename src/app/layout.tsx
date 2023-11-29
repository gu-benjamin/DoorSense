'use client';

import './globals.css';
import type { Metadata } from 'next';
import { Mplus } from './../utils/fonts';
import Providers from '../contexts/dark-theme';
import { useParams, usePathname } from 'next/navigation';
import { checkIsPublicPage } from 'functions/checkIsPublicPage';
import PrivateFARoute  from '../components/PrivateRoutes/FirstAcess/';
import PrivateRPRoute  from '../components/PrivateRoutes/ResetPassword/';

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
  const params = useParams();

  const IsPublicPage = checkIsPublicPage(pathname!);
  const IsFirstAcess = ((!IsPublicPage) && (pathname === '/FirstAcess'));
  const IsResetPassword = ((!IsPublicPage) && (params.ticket));

  return (
    <html lang="pt-br" className="light" style={{ colorScheme: 'light' }}>
      <body className={Mplus.className}>
        <Providers>
          {IsPublicPage && children}
          {pathname === '/Dashboard' && children}
          {IsFirstAcess && (
            <PrivateFARoute pathname={pathname}>{children}</PrivateFARoute>
          )}
          {IsResetPassword && <PrivateRPRoute pathname={pathname}>{children}</PrivateRPRoute>}
          {/* {children} */}
        </Providers>
      </body>
    </html>
  );
}
