'use client';

import React, { useState } from 'react';
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <main className="flex flex-col bg-gray-100">
      <div className="flex items-center justify-center bg-secondary">
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/5 xl:w-4/5 p-4">
          {/* Cabeçalho */}
          <div className="bg-gray-100 py-4 text-left flex items-center">
            <IconHome size={75} color='' />  {/* Renderizar o ícone de home */}
            <div className="p-5">
              <p className="text-3xl sm:text-5xl font-semibold text-gray-800">Salas</p>
              <p className="text-md sm:text-lg text-gray-600">Lista das salas criadas</p>
            </div>
          </div>

          {/* Barra de pesquisa e botões */}
          <div className="flex sm:flex-row mb-4 sm:space-y-0 space-x-4">
            <div className="relative max-w-8xl w-full">
              <div className="bg-thirdy p-4 rounded-2xl flex ">
                <IconLupa size={0} color='' />  {/* Renderizar o ícone de lupa */}
                <input className="pl-10 pr-10 text-base focus:shadow-outline rounded-lg w-full" type="search" placeholder="Buscar..." />
                <button className="ml-4 border-2 border-primary bg-transparent hover:text-white hover:bg-primary text-cyan-500 font-semibold py-1 px-4 rounded" >
                  <IconFiltro size={0} color='' />  {/* Renderizar o ícone de filtro */}
                  Filtros
                </button>
              </div>
            </div>

            <div className="bg-thirdy p-3 rounded-2xl flex items-center">
              <button className="border-primary bg-primary text-white font-semibold py-2 px-4 rounded flex items-center " style={{ whiteSpace: 'nowrap' }}>
                <IconMais size={17} />  {/* Renderizar o ícone de adição (mais) */}
                Nova Sala
              </button>
            </div>
          </div>

          {/* Cabeçalho da tabela */}
          <div className="p-4 border-b-2 border-primary mb-4 flex justify-center text-primary">
            <div className="w-1/5 text-center sm:w-1/5">ID da Sala</div>
            <div className="w-1/5 text-center sm:w-1/5">Número</div>
            <div className="w-1/5 text-center sm:w-1/5">Nome da Sala</div>
            <div className="w-1/5 text-center sm:w-1/5">Status</div>
            <div className="w-1/5 text-center sm:w-1/5">Ações</div>
          </div>

          {/* Cards de informações */}
          <div className="space-y-4 mt-4">


            {/* Card 1 */}
            <div className="bg-white p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">123abcdef456g</p>
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">1</p>
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">Laboratório</p>
              <div className="w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 text-green-500">
                <IconCerto size={16} color='' />
                <span>Ativo</span>
              </div>
              <div className="w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2">
                
                <IconEdit size={30} color='' />
                <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                <IconTrash size={37} color='#FF0F00' />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-md border flex space-x-4 items-center justify-center">
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">987zyxwv654t</p>
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">2</p>
              <p className="w-1/5 text-center sm:w-1/5 text-gray-600">Biblioteca</p>
              <div className="w-1/5 text-center sm:w-1/5 flex items-center justify-center space-x-2 text-red-500">
                <IconX size={16} color='' />
                <span>Inativo</span>
              </div>
              <div className="relative w-full lg:max-w-sm">
            <div
              className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none cursor-pointer flex items-center justify-between"
              onClick={handleDropdownClick}
            >
              {selectedOption ? (
                <>
                  {selectedOption === 'edit' && <IconEdit size={30} color='' />}
                  {selectedOption === 'delete' && <IconTrash size={37} color='#FF0F00' />}
                </>
              ) : (
                <>
                  <span>Escolha uma ação</span>
                  <IconDropDown size={20} color='' /> {/* Substitua pelo ícone de seta para baixo */}
                </>
              )}
            </div>
            {isDropdownOpen && (
              <div className="flex flex-col bg-white border rounded-md shadow-md mt-1 absolute z-10">
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedOption('edit');
                    setIsDropdownOpen(false);
                  }}
                >
                  Editar
                </button>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedOption('delete');
                    setIsDropdownOpen(false);
                  }}
                >
                  Excluir
                </button>
              </div>
            )}
          </div>
            </div>            
          </div>
        </div>
      </div>
    </main>
  );
}
