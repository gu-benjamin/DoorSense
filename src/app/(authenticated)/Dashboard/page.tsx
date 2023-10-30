import dynamic from 'next/dynamic';
const HomeUI = dynamic(() => import('./../../../components/Dashboard/index'), { ssr: false });
import { cookies } from 'next/headers';

export default async function HomePage() {

  const token = cookies().get('token');
  const headersList = {
    "Authorization": `Bearer ${token?.value}`,
    'Content-Type': 'application/json'
  };

  const res = await fetch('http://localhost/doorsense_backend/api/salas/', {
    method: 'GET',
    headers: headersList
  });

  const data = await res.json()

  return <HomeUI data={data.data} />
}
