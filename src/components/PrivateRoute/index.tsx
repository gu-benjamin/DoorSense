'use client';

import { useRouter, useParams } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { APP_ROUTES } from './../../constants/app_routes';
import { getCookies } from 'functions/getCookies';
import { checkTicket } from './../../functions/checkTicket/index';

interface PrivateRouteProps {
  children: ReactNode;
  pathname: string;
}

export function PrivateFARoute({ children, pathname }: PrivateRouteProps) {
  const { push } = useRouter();

  const [hasTicketFA, setHasTicket] = useState(false);

  const authToFirstAcess = hasTicketFA && pathname === '/FirstAcess';

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const cookies = await getCookies();
        setHasTicket(cookies.cookies.ticket_fa);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCookies();

    if (!authToFirstAcess) {
      push(APP_ROUTES.public.login);
    }
    console.log(pathname);

    return setHasTicket(false);
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
  const {ticket} = params;


  const [hasTicketRP, setHasTicketRP] = useState(false);
  const [isTicketRPValid, setIsTicketRPValid] = useState(false);

  const authToResetPassword = hasTicketRP && pathname === `/reset-password/${ticket}`;

  useEffect(() => {
    const fetchCookies = async () => {
      try {
        const cookies = await getCookies();
        setHasTicketRP(cookies.cookies.ticket_rp);
      } catch (error) {
        console.log('error', error);
      }
    };

    const fetchCheckTicket = async () => {
      try {
        const validTicket = await checkTicket(ticket);
        setIsTicketRPValid(validTicket.response);
        console.log('STATE', isTicketRPValid)
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchCookies();
    fetchCheckTicket();


    if (!authToResetPassword && !isTicketRPValid) {
      push(APP_ROUTES.public.login);
    }

  }, [authToResetPassword, isTicketRPValid, push]);

  return (
    <>
      {!authToResetPassword && null}
      {pathname === '/Dashboard' && children}
      {authToResetPassword && children}
    </>
  );
}
