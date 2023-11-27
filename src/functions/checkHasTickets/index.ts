import { cookies } from 'next/headers';

export const checkHasTicket = () => {
  const ticket = cookies().get('ticket');

  return !!ticket;
};
