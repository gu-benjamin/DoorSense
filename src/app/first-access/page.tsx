import dynamic from 'next/dynamic';
const ResetUserUI = dynamic(() => import('components/Reset-user'), {
  ssr: false
});

export default async function FirstAcess() {
  return <ResetUserUI />;
}
