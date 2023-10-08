'use client';
import React, { useState, useEffect } from 'react';
import Card from 'components/Cardtable/card';
import Cabecalho from 'components/Cabecalho/cabecalho';
import Barra from 'components/barra-pesquisa/pesquisa';
import Lista from 'components/Lista-de-Salas/lista';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full sm:w-10/12 p-4">
        {/*IconHome, Salas e Lista das salas criadas */}
        <Lista/>

        {/* Barra de pesquisa e botão Nova Sala */}
        <Barra/>

        {/* Dashboard - Cabeçalho */}      
        <Cabecalho/>    
        

        {/* Os cards abaixo do cabeçalho */}
        <div className="flex flex-col gap-4 mt-4 ">
          {/* Card 1 */}
          <Card/>

          {/* Card 2 */}
          <Card/>

          {/* Card 3 */}
          <Card/>

        </div>
      </div>
    </main>
  );
}
