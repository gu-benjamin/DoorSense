import { cookies } from 'next/headers';

export const checkHasTicketFA = () => {
  const ticket = cookies().get('ticketFA')?.value;

  return !!ticket;
};

export const checkHasTicketRP = () => {
  const ticket = cookies().get('ticket')?.value;

  return !!ticket;
};
