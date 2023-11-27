import { checkHasTicket } from 'functions/checkHasTickets';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { APP_ROUTES } from './../../constants/app_routes';

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { push } = useRouter();

  const hasTicket = checkHasTicket();

  useEffect(() => {
    if (!hasTicket) {
      push(APP_ROUTES.public.login);
    }
  }, [hasTicket, push]);

  return {};
}
