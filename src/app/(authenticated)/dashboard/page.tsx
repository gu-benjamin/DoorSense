import dynamic from 'next/dynamic';
const HomeUI = dynamic(() => import('../../../components/Dashboard/index'), {
  ssr: false
});
import { cookies } from 'next/headers';
import { API_ENDPOINT } from 'utils/envs';
import { doorsense } from 'types';
import type { Metadata } from 'next';
import PrivateDBRoute from 'components/PrivateRoutes/Dashboard';


export const metadata: Metadata = {
  title: 'Dashboard - DoorSense',
  description: 'A experiência sensorial da inclusão'
};

export default async function HomePage() {
  const token = cookies().get('token');
  const headersList = {
    Authorization: `Bearer ${token?.value}`,
    'Content-Type': 'application/json'
  };

  const resSalas = await fetch(`${API_ENDPOINT}salas/`, {
    method: 'GET',
    headers: headersList
  });

  const resDoorsenses = await fetch(
    `${API_ENDPOINT}doorsenses/`,
    {
      method: 'GET',
      headers: headersList
    }
  );

  const dataSalas = await resSalas.json();
  const dataDoorsenses = await resDoorsenses.json();

  const hasAuthorization =
    dataSalas.status === '200 OK' && dataDoorsenses.status === '200 OK';

  if (hasAuthorization) {
    const filterDoorsenses = dataDoorsenses.data.doorsenses.map(
      (doorsense: doorsense) => [doorsense.uniqueId, doorsense.sala]
    );

    return (
      <>
        {hasAuthorization ? (
          <HomeUI datas={dataSalas.data} doorsenses={filterDoorsenses} />
        ) : (
          <PrivateDBRoute />
        )}
      </>
    );
  }

  return <PrivateDBRoute />;
}
