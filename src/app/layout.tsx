'use client';

import './globals.css';
import { Mplus } from './../utils/fonts';
import Providers from '../contexts/dark-theme';
import { usePathname } from 'next/navigation';
import { checkIsPublicPage } from 'functions/checkIsPublicPage';
import PrivateFARoute  from '../components/PrivateRoutes/FirstAcess/';
import { APP_ROUTES } from '../constants/app_routes';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const IsPublicPage = checkIsPublicPage(pathname!);
  const IsFirstAcess = ((!IsPublicPage) && (pathname === APP_ROUTES.private.reset_user));

  return (
    <html lang="pt-br" className="light" style={{ colorScheme: 'light' }}>
      <body className={Mplus.className}>
        <Providers>
          {IsPublicPage && children}
          {pathname === APP_ROUTES.private.dashboard && children}
          {IsFirstAcess && (
            <PrivateFARoute pathname={pathname}>{children}</PrivateFARoute>
          )}
        </Providers>
      </body>
    </html>
  );
}
