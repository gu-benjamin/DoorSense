'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { APP_ROUTES } from './../../constants/app_routes';
import { getCookies } from 'functions/getCookies';

interface PrivateRouteProps {
  children: ReactNode;
  pathname: string;
}

export default function PrivateRoute({
  children,
  pathname
}: PrivateRouteProps) {
  const { push } = useRouter();

  const [hasTicket, setHasTicket] = useState({
    ticket_fa: false,
    ticket_rp: false
  });

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const cookies = await getCookies();
        setHasTicket(cookies.cookies);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCookies();

    if (!hasTicket.ticket_fa) {
      push(APP_ROUTES.public.login);
    }

    return setHasTicket({
      ticket_fa: false,
      ticket_rp: false
    });
  }, [hasTicket.ticket_fa, hasTicket.ticket_rp, push]);

  // useEffect(() => {
  //   if (!hasTicket.ticket_fa) {
  //     push(APP_ROUTES.public.login);
  //   }
  // }, [hasTicket.ticket_fa, hasTicket.ticket_rp, push]);

  return (
    <>
      {!hasTicket.ticket_fa && null}
      {!hasTicket.ticket_rp && null}
      {pathname === '/Dashboard' && children}
      {hasTicket.ticket_fa && children}
      {hasTicket.ticket_rp && children}
    </>
  );
}
