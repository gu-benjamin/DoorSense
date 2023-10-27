'use client';

import { useEffect, useState } from 'react';
import Card from 'components/Cardtable/';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import TopSection from 'components/Lista-de-Salas/lista';

export default function HomeUI({ data }: any) {
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  console.log(data);

  return (
    <main className="flex flex-col h-full items-center justify-center pb-6 bg-secondary dark:bg-dark-300">
      <div className="w-full sm:w-10/12 p-4">
        {/*IconHome, Salas e Lista das salas criadas */}
        <TopSection />

        {/* Barra de pesquisa e botão Nova Sala */}
        <Barra />

        {/* Dashboard - Cabeçalho */}
        <Cabecalho />

        {/* Os cards abaixo do cabeçalho */}
        <div className="flex flex-col gap-4 mt-4 ">
          {/* Card 1 */}

          {data && data.salas.map((sala) => {
            return (
              <Card.Root key={sala.id}>
                <Card.Data data={sala.nome} />
                <Card.Data data={sala.numero} />
                <Card.Data className="sm:text-left" data={sala.arduino} />
                <Card.Status data={sala.status} />
              </Card.Root>
            );
          })}
        </div>
      </div>
    </main>
  );
}
