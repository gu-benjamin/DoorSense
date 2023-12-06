import dynamic from 'next/dynamic';
const ResetUserUI = dynamic(() => import('components/Reset-user'), {
  ssr: false
});
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Primeiro acesso - DoorSense',
  description: 'A experiência sensorial da inclusão'
};

export default async function FirstAcess() {
  return <ResetUserUI />;
}
