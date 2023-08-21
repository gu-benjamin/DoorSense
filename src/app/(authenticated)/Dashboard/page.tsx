import Image from 'next/image';

import React from 'react';
import IconHome from './../../../components/Icons/🦆 icon-home';
import IconMais from './../../../components/Icons/icon-mais';
import IconEdit from './../../../components/Icons/🦆 icon-edit';
import IconTrash from './../../../components/Icons/🦆 icon-trash';
import IconCerto from 'components/Icons/icon-certo';
import IconX from 'components/Icons/🦆 icon-x';

export default function HomePage(){
  
  return (
    <main className="flex flex-col h-screen bg-gray-100">

      {/* Conteúdo principal */}
      <div className="flex items-center justify-center bg-secondary">
        {/* Área de conteúdo principal */}
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/5 xl:w-4/5 p-4">
          <div className="flex">
            <div className="bg-gray-100 py-4 text-left">
            <div className="flex items-center">
            {/* Tamanho responsivo para IconHome */}
            <IconHome size={75}  />
            <div className="p-5">
              {/* Tamanho responsivo para textos */}
              <p className="text-3xl sm:text-5xl font-semibold text-gray-800">Salas</p>
              <p className="text-md sm:text-lg text-gray-600">Lista das salas criadas</p>
            </div>
          </div>
            </div>
          </div>


          {/* Campo de busca e filtro */}
          <div className="flex sm:flex-row mb-4">
            <div className="relative max-w-7xl w-full ">
              <div className="bg-blue-200 p-4 rounded-2xl flex w-full">
                <input className="pl-10 pr-4 text-base focus:shadow-outline rounded-full w-full" type="search" placeholder="Buscar..." />
                <button className="ml-10 border-2 border-primary bg-transparent hover:text-white hover:bg-primary text-cyan-500 font-semibold py-2 px-4 rounded">
                  Filtros
                </button>
              </div>
            </div>
            
            {/* Nova Sala */}
            <div className="bg-blue-200 p-4 rounded-2xl flex items-center">
              <button className="border-primary bg-primary text-white font-semibold py-2 px-4 rounded flex items-center" style={{ whiteSpace: 'nowrap' }}>
                <IconMais size={17} />
                Nova Sala
              </button>
            </div>
          </div>


          {/* O Dashboard */}
          <div className="bg-white p-4 shadow rounded-lg overflow-x-auto">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Salas</h2>
            <div className="my-1 h-px bg-gradient-to-r from-cyan-300 to-cyan-500 mb-6"></div>
            <table className="w-full table-auto text-sm">
            <thead>
              <tr className="hover:bg-grey-lighter">
                <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light relative">ID</th>
                <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light relative">Número</th>
                <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light relative">Nome da Sala</th>
                <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light relative">Status</th>
                <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light relative">Ações</th>
              </tr>
            </thead>
              <tbody>
              {/* -----------------------------ID 1-------------------------------- */}
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">
                    <div className="flex items-center justify-center">
                      <IconCerto size={16} />
                      <span className="ml-1">Ativo</span>
                    </div>
                  </td>
                  <td className="flex items-center justify-center py-2 px-4 text-center border-b border-grey-light">
                    <div className="flex items-center space-x-2">
                      <IconEdit size={30} />
                      <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                      <IconTrash size={37} />
                    </div>
                  </td>
                </tr>

              {/* -----------------------------ID 2-------------------------------- */}
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-red-500">
                    <div className="flex items-center justify-center">
                      <IconX size={17} />
                      <span className="ml-1">Inativo</span>
                    </div>
                  </td>
                  <td className="flex items-center justify-center py-2 px-4 text-center border-b border-grey-light">
                    <div className="flex items-center space-x-2">
                      <IconEdit size={30} />
                      <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                      <IconTrash size={37} />
                    </div>
                  </td>
                </tr>

              {/* ---------------------------------ID 3---------------------------------- */}
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">
                    <div className="flex items-center justify-center">
                      <IconCerto size={16} />
                      <span className="ml-1">Ativo</span>
                    </div>
                  </td>
                  <td className="flex items-center justify-center py-2 px-4 text-center border-b border-grey-light">
                    <div className="flex items-center space-x-2">
                      <IconEdit size={30} />
                      <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                      <IconTrash size={37} />
                    </div>
                  </td>
                </tr>

              {/* -------------------------------ID 4-------------------------------- */}
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">
                    <div className="flex items-center justify-center">
                      <IconCerto size={16} />
                      <span className="ml-1">Ativo</span>
                    </div>
                  </td>
                  <td className="flex items-center justify-center py-2 px-4 text-center border-b border-grey-light">
                    <div className="flex items-center space-x-2">
                      <IconEdit size={30} />
                      <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                      <IconTrash size={37} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="text-right mt-4">
              <button className="bg-primary text-white font-semibold py-2 px-4 rounded">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



