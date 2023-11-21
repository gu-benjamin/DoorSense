'use client';
import { useEffect, useState } from 'react';
import Card from 'components/Cardtable/';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import TopSection from 'components/Lista-de-Salas/lista';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

type sala = {
  id: string,
  nome: string,
  numero: string, 
  arduino: string, 
  status: string 
}

export default function HomeUI({ data }: any) {
  const [limite, setLimite] = useState(0);

  const Proximo = () => {
    const novoLimite = limite + 4;
    if (novoLimite < data.salas.length) {
      setLimite(novoLimite);
    }
  };

  const Anterior = () => {
    const novoLimite = Math.max(0, limite - 4);
    setLimite(novoLimite);
  };

  const mostrarBotoes = data && data.salas.length > 4;

  return (
    <main className="relative flex flex-col h-screen items-center pb-6 bg-secondary dark:bg-dark-300">
      <div className="w-full sm:w-10/12 ">
        <TopSection />
        <Barra />
        <Cabecalho />
        <div className="flex flex-col gap-4 mt-4">
          {data &&
            data.salas.slice(limite, limite + 4).map((sala: sala) => (
              <Card.Root key={sala.id} classData={sala}>
                <Card.Data data={sala.nome} />
                <Card.Data data={sala.numero} />
                <Card.Data className="sm:text-left" data={sala.arduino} />
                <Card.Status data={sala.status} classData={sala} />
              </Card.Root>
            ))}
          {mostrarBotoes && (
            <div className="flex justify-between mt-1">
              {limite > 0 && (
                <span onClick={Anterior}>      
                  <FaArrowLeft size={20} className='text-primary-100 dark:text-white'/>
                </span>
              )}
              {limite + 4 < data.salas.length && (
                <span onClick={Proximo}>
                  <FaArrowRight size={20} className='text-primary-100 dark:text-white'/>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

