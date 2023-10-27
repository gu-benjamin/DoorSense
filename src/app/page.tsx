import dynamic from 'next/dynamic';
const LoginUI = dynamic(() => import('components/LoginPage'), { ssr: false });

export default async function LoginPage() {
  return <LoginUI />;
}
