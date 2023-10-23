
'use client'

import Card from 'components/Cardtable/';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import TopSection from 'components/Lista-de-Salas/lista';

export default function HomeUI(){
    return(
        <main className="flex flex-col h-full items-center justify-center pb-6 bg-secondary dark:bg-dark-300">
        <div className="w-full sm:w-10/12 p-4">
          {/*IconHome, Salas e Lista das salas criadas */}
          <TopSection/>
  
          {/* Barra de pesquisa e botão Nova Sala */}
          <Barra/>
  
          {/* Dashboard - Cabeçalho */}      
          <Cabecalho/>    
          
          {/* Os cards abaixo do cabeçalho */}
          <div className="flex flex-col gap-4 mt-4 ">
            {/* Card 1 */}
            {/* <Card/> */}
            <Card.Root>
              <Card.Data  data='Laboratório'/>
              <Card.Data  data='1'/>
              <Card.Data className='sm:text-left'  data='A2C4E6G8'/>
              <Card.Status data='Ativo'/>
            </Card.Root>
            <Card.Root>
              <Card.Data  data='Laboratório'/>
              <Card.Data  data='1'/>
              <Card.Data className='sm:text-left'  data='A2C4E6G8'/>
              <Card.Status data='Ativo'/>
            </Card.Root>
            <Card.Root>
              <Card.Data  data='Laboratório'/>
              <Card.Data  data='1'/>
              <Card.Data className='sm:text-left'  data='A2C4E6G8'/>
              <Card.Status data='Ativo'/>
            </Card.Root>
            <Card.Root>
              <Card.Data  data='Laboratório'/>
              <Card.Data  data='1'/>
              <Card.Data className='sm:text-left'  data='A2C4E6G8'/>
              <Card.Status data='Ativo'/>
            </Card.Root>
            <Card.Root>
              <Card.Data  data='Laboratório'/>
              <Card.Data  data='1'/>
              <Card.Data className='sm:text-left'  data='A2C4E6G8'/>
              <Card.Status data='Ativo'/>
            </Card.Root>
  
           
          </div>
        </div>
      </main>
    )
}