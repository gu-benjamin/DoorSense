import dynamic from 'next/dynamic';
const HomeUI = dynamic(() => import('../../../components/Dashboard/index'), {
  ssr: false
});
import { cookies } from 'next/headers';
import { API_ENDPOINT, DEV_API_ENDPOINT, LOCAL_ENDPOINT } from 'utils/envs';
import { doorsense } from 'types';
import PrivateDBRoute from 'components/PrivateRoutes/Dashboard';

export default async function HomePage() {
  const token = cookies().get('token');
  const headersList = {
    Authorization: `Bearer ${token?.value}`,
    'Content-Type': 'application/json'
  };

  const resSalas = await fetch(`${DEV_API_ENDPOINT}salas/`, {
    method: 'GET',
    headers: headersList
  });

  const resDoorsenses = await fetch(
    `${DEV_API_ENDPOINT}doorsenses/`,
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
      (doorsense: doorsense) => doorsense.uniqueId
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
