import dynamic from 'next/dynamic';
const HomeUI = dynamic(() => import('./../../../components/Dashboard/index'), { ssr: false });

export default async function HomePage() {
  return <HomeUI/>
}
