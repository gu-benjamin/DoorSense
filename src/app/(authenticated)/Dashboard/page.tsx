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

  // const handleDropdownToggle = () => {
  //   setIsDropdownContentVisible(!isDropdownContentVisible); 
  // };
  
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // const [isDropdownContentVisible, setIsDropdownContentVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Inverte o estado do dropdown
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
    <main className="flex flex-colitems-center justify-center bg-secondary">
        <div className="w-full sm:w-full md:w-10/12 lg:w-10/12 xl:w-10/12 p-4">
          
          {/* Cabeçalho */}
          <div className="bg-gray-100 py-4 text-left flex items-center">
            <IconHome size={75} color="" />
            <div className="p-5">
              <p className="text-3xl sm:text-5xl font-semibold text-gray-800">Salas</p>
              <p className="text-md sm:text-lg text-gray-600">Lista das salas criadas</p>
            </div>
          </div>

          {/* Barra de pesquisa e botões */}
          <div className={`flex sm:flex-row mb-4 sm:space-y-0 space-x-4 ${windowSize <= 600 ? 'text-xs' : ''}`}>
            <div className="relative max-w-8xl w-full">
              <div className="bg-thirdy p-4 rounded-2xl flex">
                <IconLupa size={0} color="" />
                <input className="pl-6 pr-4 text-base focus:shadow-outline rounded-lg w-full" type="search" placeholder="Buscar..." />
                <button className="ml-4 border-2 border-primary bg-transparent hover:text-white hover:bg-primary text-cyan-500 font-semibold py-1 px-4 rounded">
                  <IconFiltro size={0} color="" />
                  Filtros
                </button>
              </div>
            </div>

            <div className="bg-thirdy p-3 rounded-2xl flex items-center">
              <button className="border-primary bg-primary text-white font-semibold py-2 px-4 rounded flex items-center" style={{ whiteSpace: 'nowrap' }} onClick={handleDropdownToggle}>
                <IconMais size={17} />
                Nova Sala
              </button>
            </div>
          </div>

          {/* Dashboard - Cabeçalho */}
          <div className="p-4 border-b-2 border-primary mb-4 flex justify-center text-primary">
            <div className={`w-2/5 text-center sm:w-2/5 ${windowSize <= 600 ? 'text-xs' : ''}`} style={{ whiteSpace: 'nowrap' }}>Nome da Sala</div>
            <div className={`w-2/5 text-center sm:w-2/5 ${windowSize <= 600 ? 'text-xs' : ''}`}>Número</div>
            <div className={`w-2/5 sm:w-2/5 ${windowSize <= 600 ? 'text-xs text-center' : ''}`}>Arduíno</div>
            <div className={`w-2/5 text-center sm:w-2/5 ${windowSize <= 600 ? 'text-xs' : ''}`}>Status</div>
            {windowSize > 600 && <div className={`w-1/5 text-center sm:w-2/5 ${windowSize <= 600 ? 'text-xs' : ''}`}>Ações</div>}
          </div>

          {/* Cards de informações */}
          <div className="space-y-4 mt-4">


            {/* Card 1 */}
            <div className="bg-white p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className={`w-1/5 text-center sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : ''}`}>Laboratório</p>
              <p className={`w-1/5 text-center sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : ''}`}>1</p>
              <p className={`w-1/5 sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : 'text-sm'}`} style={{ whiteSpace: 'nowrap' }}>A2C4E6G8</p>
              {windowSize > 600 && (
                <div className={`w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
                  <IconCerto size={windowSize <= 600 ? 12 : 16} color="" />
                  <span className={windowSize <= 600 ? 'text-xs' : 'text-green-500'}>Ativo</span>
                </div>
              )}
              {windowSize <= 600 ? (
                <div className="relative">
                  <div className={`flex items-center justify-end space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
                    <IconCerto size={16} color="" />
                    <p className={windowSize <= 600 ? 'text-xs text-green-500' : ''}>Ativo</p>
                    <button className=" bg-white cursor-pointer flex items-center justify-between" onClick={handleDropdownToggleCard1}>
                      {selectedOption ? (
                        <>
                          {selectedOption === 'edit' && <IconEdit size={windowSize <= 600 ? 20 : 30} color="" />}
                          {selectedOption === 'delete' && <IconTrash size={windowSize <= 600 ? 24 : 37} color="#FF0F00" />}
                        </>
                      ) : (
                        <IconDropDown size={windowSize <= 600 ? 15 : 20} color="" />
                      )}
                    </button>
                    {isDropdownOpenCard1 && (
                      <div className="absolute mt-24 bg-white rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex space-x-2">
                          <button className={`p-2 flex flex-col hover:bg-gray-100 text-center justify-center ${windowSize <= 600} `} onClick={() => handleDropdownItemClick('edit')}>
                            <IconEdit size={25} color="" />
                          </button>
                          <div className="w-px  bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <button className="p-2 flex flex-col hover:bg-gray-100 justify-center" onClick={() => handleDropdownItemClick('delete')}>
                            <IconTrash size={35} color="#FF0F00" />
                          </button>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
                  <IconEdit size={30} color="" />
                  <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <IconTrash size={37} color="#FF0F00" />
                </div>
              )}
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className={`w-1/5 text-center sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : ''}`}>Biblioteca</p>
              <p className={`w-1/5 text-center sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : ''}`}>2</p>
              <p className={`w-1/5 sm:w-1/5 text-gray-600 ${windowSize <= 600 ? 'text-xs' : 'text-sm'}`} style={{ whiteSpace: 'nowrap' }}>B3D4F7H9</p>
              {windowSize > 600 && (
                <div className={`w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
                  <IconX size={windowSize <= 600 ? 12 : 16} color="" />
                  <span className={windowSize <= 600 ? 'text-xs' : 'text-red-500'}>Inativo</span>
                </div>
              )}
              {windowSize <= 600 ? (
                <div className="relative">
                  <div className={`flex items-center justify-end space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
                    <IconX size={16} color="" />
                    <span className={windowSize <= 600 ? 'text-xs text-red-500' : ''}>Inativo</span>
                    <button className=" bg-white cursor-pointer flex items-center justify-between" onClick={handleDropdownToggleCard2}>
                      {selectedOption ? (
                        <>
                          {selectedOption === 'edit' && <IconEdit size={windowSize <= 600 ? 20 : 30} color="" />}
                          {selectedOption === 'delete' && <IconTrash size={windowSize <= 600 ? 24 : 37} color="#FF0F00" />}
                        </>
                      ) : (
                        <IconDropDown size={windowSize <= 600 ? 15 : 20} color="" />
                      )}
                    </button>
                    {isDropdownOpenCard2 && (
                      <div className="absolute mt-24 bg-white rounded shadow-lg z-10">
                        {/* Aqui é o conteúdo do dropdown */}
                        <div className="flex space-x-2">
                          <button className="p-2 flex flex-col hover:bg-gray-100 justify-center" onClick={() => handleDropdownItemClick('edit')}>
                            <IconEdit size={30} color="" />            
                          </button>
                          <div className="w-px  bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                          <button className="p-2 flex flex-col hover:bg-gray-100 justify-center" onClick={() => handleDropdownItemClick('delete')}>
                            <IconTrash size={37} color="#FF0F00" />
                          </button>
                          {/* Se tiver outras opções, colocar aqui */}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className={`w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 ${windowSize <= 600 ? 'text-xs' : ''}`}>
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
