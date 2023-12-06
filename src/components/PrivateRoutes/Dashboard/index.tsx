'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Logout } from 'functions/Logout';
import { APP_ROUTES } from '../../../constants/app_routes';

export default function PrivateDBRoute() {
  const { push, refresh } = useRouter();

  useEffect(() => {
    Logout();
    refresh();
    push(APP_ROUTES.public.login);

  }, [push]);

  return (
    <>
      {null}
    </>
  );
}

