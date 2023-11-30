'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { APP_ROUTES } from '../../../constants/app_routes';
import { getTicketCookie } from 'functions/getFACookie';

interface PrivateRouteProps {
  children: ReactNode;
  pathname: string;
}

export default function PrivateFARoute({ children, pathname }: PrivateRouteProps) {
  const { push } = useRouter();

  const [authToFirstAcess, setAuthToFirstAcess] = useState(false);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const cookies = await getTicketCookie();

        const hasTicketFA = cookies.cookies.ticket;
        const hasAcess = hasTicketFA && pathname === '/FirstAcess';
        if (!hasAcess) {
          push(APP_ROUTES.public.login);
        }
        console.log('pathname', pathname);
        console.log('hasTicketFA', hasTicketFA);
        console.log('hasAcess', hasAcess);
        setAuthToFirstAcess(hasAcess);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCookies();
  }, [authToFirstAcess, push]);

  return (
    <>
      {!authToFirstAcess && null}
      {pathname === '/Dashboard' && children}
      {authToFirstAcess && children}
    </>
  );
}

