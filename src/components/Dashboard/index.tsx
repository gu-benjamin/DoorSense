'use client';

import { useEffect, useState } from 'react';
import Card from 'components/Cardtable/';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import TopSection from 'components/Lista-de-Salas/lista';
import { HomeUIProps, ApiData, sala } from 'types';
import Loading from 'app/(authenticated)/loading';
import EmptySalas from './../Empty';

export default function HomeUI({ datas, doorsenses }: HomeUIProps) {
  const [list, setList] = useState<ApiData>(datas);

  useEffect(() => {
    setList(datas);
  }, [datas, doorsenses]);

  return (
    <main className="relative flex flex-col items-center pb-20 bg-secondary dark:bg-dark-300 px-4 sm:px-0">
      <div className="w-full sm:w-10/12 ">
        <TopSection />
        <Barra setList={setList} data={datas} />
        <Cabecalho />
        <div className="flex flex-col gap-4 mt-4">
          {datas ? (
            list.salas.length > 0 ? (
              list.salas.map((sala: sala) => (
                <Card.Root
                  key={sala.id}
                  classData={sala}
                  doorsenses={doorsenses}
                >
                  <Card.Data data={sala.nome} />
                  <Card.Data data={sala.numero} />
                  <Card.Data data={sala.arduino} />
                  <Card.Status
                    data={sala.status}
                    classData={sala}
                    doorsenses={doorsenses}
                  />
                </Card.Root>
              ))
            ) : (
              <EmptySalas />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </main>
  );
}
