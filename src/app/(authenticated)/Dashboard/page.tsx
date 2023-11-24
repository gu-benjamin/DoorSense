import dynamic from 'next/dynamic';
const HomeUI = dynamic(() => import('./../../../components/Dashboard/index'), { ssr: false });
import { cookies } from 'next/headers';

export default async function HomePage() {

  const token = cookies().get('token');
  const headersList = {
    "Authorization": `Bearer ${token?.value}`,
    'Content-Type': 'application/json'
  };

  const resSalas = await fetch('http://localhost/doorsense_backend/api/salas/', {
    method: 'GET',
    headers: headersList
  });

  const resDoorsenses = await fetch(
    'http://localhost/doorsense_backend/api/doorsenses/',
    {
      method: 'GET',
      headers: headersList
    }
  );

  const dataSalas = await resSalas.json()

  const dataDoorsenses = await resDoorsenses.json()

  const filterDoorsenses = dataDoorsenses.data.doorsenses.map(doorsense => doorsense.uniqueId)

  return <HomeUI data={dataSalas.data} doorsenses={filterDoorsenses} />
}
