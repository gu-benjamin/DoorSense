import dynamic from 'next/dynamic';
const ResetUserUI = dynamic(() => import('components/Reset-user'), {
  ssr: false
});
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';

export default async function FirstAcess({
  params
}: {
  params: { ticket: string };
}) {
  const urlTicket = params.ticket;
  const hasTicketToken = cookies().has('ticket');

  if (hasTicketToken) {
  }

  console.log(urlTicket);

  return <ResetUserUI />;
}
