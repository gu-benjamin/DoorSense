import dynamic from 'next/dynamic';
const LoginUI = dynamic(() => import('components/LoginPage'), { ssr: false });
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DoorSense - Login',
  description: 'A experiência sensorial da inclusão'
};

export default async function LoginPage() {
  return <LoginUI />;
}
