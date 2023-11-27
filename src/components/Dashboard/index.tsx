'use client';

import { useEffect, useState } from 'react';
import Card from 'components/Cardtable/';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import TopSection from 'components/Lista-de-Salas/lista';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {HomeUIProps, ApiData, sala } from 'types';

export default function HomeUI({ datas, doorsenses }: HomeUIProps) {
  const [limite, setLimite] = useState(0);
  const [list, setList] = useState<ApiData>(datas);

  useEffect(() => {
    setList(datas);
  }, [datas, doorsenses]);

  const Proximo = () => {
    const novoLimite = limite + 4;
    if (novoLimite < list.salas.length) {
      setLimite(novoLimite);
    }
  };

  const Anterior = () => {
    const novoLimite = Math.max(0, limite - 4);
    setLimite(novoLimite);
  };

  return (
    <main className="relative flex flex-col items-center pb-16 bg-secondary dark:bg-dark-300 px-4 sm:px-0">
      <div className="w-full sm:w-10/12 ">
        <TopSection />
        <Barra setList={setList} data={datas} />
        <Cabecalho />
        <div className="flex flex-col gap-4 mt-4">
          {list &&
            list.salas.slice(limite, limite + 4).map((sala: sala) => (
              <Card.Root key={sala.id} classData={sala} doorsenses={doorsenses}>
                <Card.Data data={sala.nome} />
                <Card.Data data={sala.numero} />
                <Card.Data data={sala.arduino} />
                <Card.Status data={sala.status} classData={sala} doorsenses={doorsenses} />
              </Card.Root>
            ))}
          <div className="flex mt-1 justify-between">
            <span onClick={Anterior} className="">
              <FaArrowLeft size={20} className="text-primary-100 dark:text-white" />
            </span>
            <span onClick={Proximo} className="">
              <FaArrowRight size={20} className="text-primary-100 dark:text-white" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
