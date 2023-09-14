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

export default function HomePage() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para controlar a exibição das opções

  // função para pegar o tamanho da tela quando houver mudança
  const [windowSize, setWidth] = useState(window.innerWidth); // inicia com o tamanho da tela.
  const handleResize = () => setWidth(window.innerWidth); // envia o tamanho atual da tela para a variável

  useEffect(() => {
    window.addEventListener('resize', handleResize); // adiciona a função à tela para quando houver mudança do tamanho
    return () => window.removeEventListener('resize', handleResize); // retorna removendo a função (provavelmente para não rodar infinitamente)
  }, []);
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [isDropdownOpenCard1, setIsDropdownOpenCard1] = useState(false);
  const [isDropdownOpenCard2, setIsDropdownOpenCard2] = useState(false);

  const handleDropdownToggleCard1 = () => {
    setIsDropdownOpenCard1(!isDropdownOpenCard1);
  };

  const handleDropdownToggleCard2 = () => {
    setIsDropdownOpenCard2(!isDropdownOpenCard2);
  };
 
  return (
    <main className="flex flex-colitems-center justify-center">
        <div className="w-full sm:w-full md:w-10/12 lg:w-10/12 xl:w-10/12 p-4">
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
          <div className="p-4 border-b-2 dark:border-white border-primary-100 flex justify-center text-sm sm:text-base text-primary-100">
            <div className={`w-2/5 dark:text-white text-center`} style={{ whiteSpace: 'nowrap' }}>Nome da Sala</div>
            <div className={`w-2/5 dark:text-white text-center `}>Número</div>
            <div className={`w-2/5 dark:text-white text-center sm:text-left`}>Arduíno</div>
            <div className={`w-2/5 dark:text-white text-center `}>Status</div>
            {windowSize > 640 && <div className={`w-2/5 dark:text-white text-center `}>Ações</div>}
          </div>

          {/* Cards de informações */}
          <div className="space-y-4 mt-4 ">
            {/* Card 1 */}
            <div className="bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className={` w-1/5 text-center dark:text-black `}>Laboratório</p>
              <p className={`w-1/5 text-center dark:text-black sm:w-1/5`}>1</p>
              <p className={`w-1/5 sm:w-1/5 dark:text-black text-center sm:text-left`} style={{ whiteSpace: 'nowrap' }}>A2C4E6G8</p>
              {windowSize > 640 && (
                <div className={`w-1/5 text-center  sm:w-1/5 flex items-center justify-center space-x-2 `}>
                  <IconCerto size={16} color="" />
                  <span className={' text-green-500'}>Ativo</span>
                </div>
              )}
              {windowSize <= 640 ? (
                <div className="relative">
                  <div className={`flex items-center justify-end space-x-2 }`}>
                    <IconCerto size={16} color="" />
                    <p className={' text-green-500'}>Ativo</p>
                    <button className=" cursor-pointer flex items-center justify-between" onClick={handleDropdownToggleCard1}>
                      {selectedOption ? (
                        <>
                          {selectedOption === 'edit' && <IconEdit size={30} color="" />}
                          {selectedOption === 'delete' && <IconTrash size={37} color="#FF0F00" />}
                        </>
                      ) : (
                        <IconDropDown size={18} color="" />
                      )}
                    </button>
                    {isDropdownOpenCard1 && (
                      <div className="absolute mt-24 bg-white dark:bg-darkcard bg-rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex space-x-2">
                          <button className={`p-2 flex flex-col hover:bg-gray-100 text-center justify-center `}>
                            <IconEdit size={25} color="" />
                          </button>
                          <div className="w-px  bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <button className="p-2 flex flex-col hover:bg-gray-100 justify-center">
                            <IconTrash size={35} color="#FF0F00" />
                          </button>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`w-1/5 text-center sm:w-1/5 text-xs sm:text-sm flex items-center justify-center space-x-2 `}>
                  <IconEdit size={30} color="" />
                  <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <IconTrash size={37} color="#FF0F00" />
                </div>
              )}
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className={` w-1/5 dark:text-black text-center `}>Biblioteca</p>
              <p className={`w-1/5 dark:text-black text-center sm:w-1/5`}>2</p>
              <p className={`w-1/5 dark:text-black sm:w-1/5 text-center sm:text-left`} style={{ whiteSpace: 'nowrap' }}>A2C4E6G8</p>
              {windowSize > 640 && (
                <div className={`w-1/5 text-center  sm:w-1/5 flex items-center justify-center space-x-2 `}>
                  <IconX size={16} color="" />
                  <span className={' text-red-500'}>Inativo</span>
                </div>
              )}
              {windowSize <= 640 ? (
                <div className="relative">
                  <div className={`flex items-center justify-end space-x-2 }`}>
                    <IconX size={16} color="" />
                    <p className={' text-red-500'}>Inativo</p>
                    <button className=" cursor-pointer flex items-center justify-between" onClick={handleDropdownToggleCard2}>
                      {selectedOption ? (
                        <>
                          {selectedOption === 'edit' && <IconEdit size={30} color="" />}
                          {selectedOption === 'delete' && <IconTrash size={37} color="#FF0F00" />}
                        </>
                      ) : (
                        <IconDropDown size={18} color="" />
                      )}
                    </button>
                    {isDropdownOpenCard2 && (
                      <div className="absolute mt-24 bg-white dark:bg-darkcard bg-rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex space-x-2">
                          <button className={`p-2 flex flex-col hover:bg-gray-100 text-center justify-center `}>
                            <IconEdit size={25} color="" />
                          </button>
                          <div className="w-px  bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <button className="p-2 flex flex-col hover:bg-gray-100 justify-center">
                            <IconTrash size={35} color="#FF0F00" />
                          </button>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`w-1/5 text-center sm:w-1/5 text-xs sm:text-sm flex items-center justify-center space-x-2 `}>
                  <IconEdit size={30} color="" />
                  <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <IconTrash size={37} color="#FF0F00" />
                </div>
              )}
            </div>
          </div>
        </div>
    </main>
  );
}
