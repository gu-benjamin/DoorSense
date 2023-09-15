'use client';

import React, { useState, useEffect } from 'react';
import IconHome from 'components/Icons/🦆 icon-home';  // Importar o ícone para a página
import IconMais from 'components/Icons/icon-mais';   // Importar o ícone para a página
import IconEdit from 'components/Icons/🦆 icon-edit';  // Importar o ícone para a página
import IconTrash from 'components/Icons/🦆 icon-trash';  // Importar o ícone para a página
import IconCerto from 'components/Icons/icon-certo';  // Importar o ícone para a página
import IconX from 'components/Icons/🦆 icon-x';        // Importar o ícone para a página
import IconFiltro from 'components/Icons/icon-lupa';  // Importar o ícone para a página
import IconLupa from 'components/Icons/icon-lupa';    // Importar o ícone para a página
import IconDropDown from 'components/Icons/icon-drop-down';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';


export default function HomePage() {

  const [isDropdownOpenCard1, setIsDropdownOpenCard1] = useState(false);
  const [isDropdownOpenCard2, setIsDropdownOpenCard2] = useState(false);

  const handleDropdownToggleCard1 = () => {
    setIsDropdownOpenCard1(!isDropdownOpenCard1);
  };

  const handleDropdownToggleCard2 = () => {
    setIsDropdownOpenCard2(!isDropdownOpenCard2);
  };
 
  return (

    <main className="flex flex-col items-center justify-center">
        <div className="w-full sm:w-10/12 p-4">
          {/* Cabeçalho */}
          <div className=" py-4 text-left flex items-center">
            <IconHome size={75} color="" />
            <div className="p-5">
              <p className="text-3xl sm:text-5xl font-semibold dark:text-white">Salas</p>
              <p className="text-md sm:text-lg dark:text-white">Lista das salas criadas</p>
            </div>
          </div>

          {/* Barra de pesquisa e botão Nova Sala */}
          <div className={`text-xs flex sm:flex-row mb-4 sm:space-y-0 space-x-4 sm:text-base`}>
            <div className="relative max-w-8xl w-full">
              <div className="bg-thirdy p-4 rounded-2xl flex dark:bg-darkbusc">
                <IconLupa size={0} color="" />
                <input className="pl-6 pr-4 text-base focus:shadow-outline rounded-lg w-full bg-white" type="search" placeholder="Buscar..." />
                <button className="ml-4 border-2 border-primary-100 dark:border-white text-primary-100 dark:text-white bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded">
                  <IconFiltro size={0} color="" />
                  Filtros
                </button>
              </div>
            </div>

            <div className="bg-thirdy p-3 rounded-2xl flex items-center dark:bg-darkbusc">
              <button className="border-primary-100 bg-primary-100 text-white font-semibold py-2 px-4 rounded flex items-center" style={{ whiteSpace: 'nowrap' }}>
                <IconMais size={17} />
                Nova Sala
              </button>
            </div>
          </div>

          {/* Dashboard - Cabeçalho */}
          <div className="p-4 border-b-2 dark:border-white border-primary-100 flex justify-around text-sm sm:text-base text-primary-100">
            <p className={`dark:text-white text-center`}>Nome da Sala</p>
            <p className={`dark:text-white text-center `}>Número</p>
            <p className={`dark:text-white text-center sm:text-left`}>Arduíno</p>
            <p className={`dark:text-white text-center `}>Status</p>
            <p className={`dark:text-white text-center hidden sm:block`}>Ações</p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col gap-4 mt-4 ">

            {/* Card */}
            <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md border flex items-center justify-around">

              <p className={`  text-center dark:text-black `}>Laboratório</p>
              <p className={` text-center dark:text-black `}>1</p>
              <p className={` dark:text-black text-center sm:text-left`}>A2C4E6G8</p>

              <div className={`hidden sm:flex sm:gap-2 items-center`}>
                <IconCerto size={16} color="" />
                <p className={' text-green-500'}>Ativo</p>
              </div>
      
                  <div className={`flex gap-2 sm:hidden `}>
                    <IconCerto size={16} color="" />
                    <p className={'text-green-500'}>Ativo</p>
                    <ButtonIcon icon={<IconDropDown size={18} color="" />} onClick={handleDropdownToggleCard1}/>
                  </div>

                    {isDropdownOpenCard1 && (
                      <div className="absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex gap-2">
                          <ButtonIcon icon={<IconEdit size={25} color="" />}/>
                          <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <ButtonIcon icon={<IconTrash size={30} color="#FF0F00" />}/>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}

                <div className={`gap-2 items-center hidden sm:flex`}>
                  <ButtonIcon icon={<IconEdit size={30} color="" />}/>
                  <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <ButtonIcon icon={<IconTrash size={35} color="#FF0F00" />}/>
                </div>

            </div>

            {/* Card */}
            <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md border flex items-center justify-around">

              <p className={`  text-center dark:text-black `}>Laboratório</p>
              <p className={` text-center dark:text-black `}>1</p>
              <p className={` dark:text-black text-center sm:text-left`}>A2C4E6G8</p>

              <div className={`hidden sm:flex sm:gap-2 items-center`}>
              <IconX size={16} color="" />
                <p className={' text-red-500'}>Inativo</p>
              </div>
      
                  <div className={`flex gap-2 sm:hidden`}>
                  <IconX size={16} color="" />
                    <p className={' text-red-500'}>Inativo</p>
                    <ButtonIcon icon={<IconDropDown size={18} color="" />} onClick={handleDropdownToggleCard2}/>
                  </div>

                    {isDropdownOpenCard2 && (
                      <div className="absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex gap-2">
                          <ButtonIcon icon={<IconEdit size={25} color="" />}/>
                          <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <ButtonIcon icon={<IconTrash size={30} color="#FF0F00" />}/>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}

                <div className={`gap-2 items-center hidden sm:flex`}>
                  <ButtonIcon icon={<IconEdit size={30} color="" />}/>
                  <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <ButtonIcon icon={<IconTrash size={35} color="#FF0F00" />}/>
                </div>

            </div>


          </div>
        </div>
    </main>
  );
}
