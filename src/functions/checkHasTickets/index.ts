import { cookies } from 'next/headers';

export const checkHasTicket = () => {
  const ticket = cookies().get('ticket')?.value;

  return !!ticket;
};

// export const checkHasTicketRP = () => {
//   const ticket = cookies().get('ticket')?.value;

//   return !!ticket;
// };
