'use client';

import { useRouter, useParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { APP_ROUTES } from './../../constants/app_routes';
import { getFACookie } from 'functions/getFACookie';
import { checkTicket } from './../../functions/checkTicket/index';

interface PrivateRouteProps {
  children: ReactNode;
  pathname: string;
}

export function PrivateFARoute({ children, pathname }: PrivateRouteProps) {
  const { push } = useRouter();

  const [authToFirstAcess, setAuthToFirstAcess] = useState(false);

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const cookies = await getFACookie();

        const hasTicketFA = cookies.cookies.ticket_fa;
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

export function PrivateRPRoute({ children, pathname }: PrivateRouteProps) {
  const { push } = useRouter();
  const params = useParams();
  const { ticket } = params;

  const [authToResetPassword, setAuthToResetPassword] = useState(false);

  useEffect(() => {
    const fetchCheckTicket = async () => {
      try {
        const validTicket = await checkTicket(ticket);
        const isTicketRPValid = validTicket.response;
        const hasAcess =
          isTicketRPValid && pathname === `/reset-password/${ticket}`;

        if (!hasAcess) {
          push(APP_ROUTES.public.login);
        }
        setAuthToResetPassword(hasAcess);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCheckTicket();
  }, [authToResetPassword, push]);

  return (
    <>
      {!authToResetPassword && null}
      {pathname === '/Dashboard' && children}
      {authToResetPassword && children}
    </>
  );
}
