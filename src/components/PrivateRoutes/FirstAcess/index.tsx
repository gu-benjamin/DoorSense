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
        const hasAcess = hasTicketFA && pathname === APP_ROUTES.private.reset_user;
        if (!hasAcess) {
          push(APP_ROUTES.public.login);
        }
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
      {pathname === APP_ROUTES.private.dashboard && children}
      {authToFirstAcess && children}
    </>
  );
}

