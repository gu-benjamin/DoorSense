import Image from 'next/image';

import React from 'react';
import IconHome from './../../../components/Icons/🦆 icon-home';
import IconMais from './../../../components/Icons/icon-mais';
import IconEdit from './../../../components/Icons/🦆 icon-edit';
import IconTrash from './../../../components/Icons/🦆 icon-trash';
import IconCerto from 'components/Icons/icon-certo';
import IconX from 'components/Icons/🦆 icon-x';
import IconFiltro from 'components/Icons/icon-lupa';
import IconLupa from 'components/Icons/icon-lupa';

export default function HomePage() {
  return (
    <main className="flex flex-col h-screen bg-gray-100">
      {/* Conteúdo principal */}
      <div className="flex items-center justify-center bg-secondary">
        {/* Área de conteúdo principal */}
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/5 xl:w-4/5 p-4">
          <div className="flex">
            <div className="bg-gray-100 py-4 text-left">
              <div className="flex items-center">
                <IconHome size={75} color='' />
                <div className="p-5">
                  <p className="text-3xl sm:text-5xl font-semibold text-gray-800">Salas</p>
                  <p className="text-md sm:text-lg text-gray-600">Lista das salas criadas</p>
                </div>
              </div>
            </div>
          </div>

         {/* Campo de busca e filtro */}
          <div className="flex sm:flex-row mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="relative max-w-7xl w-full">
              <div className="bg-blue-200 p-4 rounded-2xl flex w-full">
                <IconLupa size={0} color='' />
                <input className="pl-10 pr-10 text-base focus:shadow-outline rounded-full w-full" type="search" placeholder="Buscar..." />
                <button className="ml-4 border-2 border-primary bg-transparent hover:text-white hover:bg-primary text-cyan-500 font-semibold py-2 px-4 rounded">
                  <IconFiltro size={0} color='' />
                  Filtros
                </button>
              </div>
            </div>

            {/* Espaço adicionado entre os elementos */}
            <div className="w-4" />

            {/* Nova Sala */}
            <div className="bg-blue-200 p-4 rounded-2xl flex items-center">
              <button className="border-primary bg-primary text-white font-semibold py-2 px-4 rounded flex items-center" style={{ whiteSpace: 'nowrap' }}>
                <IconMais size={17} />
                Nova Sala
              </button>
            </div>
          </div>

          {/* O Dashboard */}
          <div className="w-full overflow-x-auto">
            <table className="table-auto text-sm w-full border-collapse">
              <thead>
                <tr className="hover:bg-grey-lighter">
                  <th className="py-2 px-4 text-center bg-grey-lightest font-normal uppercase text-sm text-primary relative border border-grey-light">ID da Sala</th>
                  <th className="py-2 px-4 text-center bg-grey-lightest font-normal uppercase text-sm text-primary relative border border-grey-light">Número</th>
                  <th className="py-2 px-4 text-center bg-grey-lightest font-normal uppercase text-sm text-primary relative border border-grey-light">Nome da Sala</th>
                  <th className="py-2 px-4 text-center bg-grey-lightest font-normal uppercase text-sm text-primary relative border border-grey-light">Status</th>
                  <th className="py-2 px-4 text-center bg-grey-lightest font-normal uppercase text-sm text-primary relative border border-grey-light">Ações</th>
                </tr>
              </thead>
                <tbody>
                  {/* -----------------------------ID 1-------------------------------- */}
                  <tr className="bg-white mb-4 border-secondary border-y-4 rounded-3xl">
                    <td className="py-3 px-4 text-center border-b whitespace-nowrap " >123abcdef456ghi89</td>
                    <td className="py-3 px-4 text-center border-b whitespace-nowrap">1</td>
                    <td className="py-3 px-4 text-center border-b whitespace-nowrap ">Laboratório</td>
                    <td className="py-3 px-4 text-center border-b text-green-500 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <IconCerto size={16} color=''/>
                        <span className="ml-1">Ativo</span>
                      </div>
                    </td>
                    <td className="flex items-center justify-center py-2 px-4 text-center">
                      <div className="flex items-center space-x-2">
                        <IconEdit size={30} color=''/>
                        <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                        <IconTrash size={37} color='#FF0F00'/>
                      </div>
                    </td>
                  </tr>
                  
                  {/* -----------------------------ID 2-------------------------------- */}
                  <tr className="bg-white mb-4 border-secondary border-y-4">
                    <td className="py-2 px-4 text-center whitespace-nowrap">123abcdef456ghi89</td>
                    <td className="py-2 px-4 text-center whitespace-nowrap">1</td>
                    <td className="py-2 px-4 text-center whitespace-nowrap">Laboratório</td>
                    <td className="py-2 px-4 text-center text-green-500 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <IconCerto size={16} color=''/>
                        <span className="ml-1">Ativo</span>
                      </div>
                    </td>
                    <td className="flex items-center justify-center py-2 px-4 text-center">
                      <div className="flex items-center space-x-2">
                        <IconEdit size={30} color=''/>
                        <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                        <IconTrash size={37} color='#FF0F00'/>
                      </div>
                    </td>
                  </tr>
                  
                  {/* -----------------------------ID 3-------------------------------- */}
                  <tr className="bg-white mb-4 border-secondary border-y-4">
                    <td className="py-2 px-4 text-center whitespace-nowrap">123abcdef456ghi89</td>
                    <td className="py-2 px-4 text-center whitespace-nowrap">1</td>
                    <td className="py-2 px-4 text-center whitespace-nowrap">Laboratório</td>
                    <td className="py-2 px-4 text-center text-red-500 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <IconX size={16} color=''/>
                        <span className="ml-1">Inativo</span>
                      </div>
                    </td>
                    <td className="flex items-center justify-center py-2 px-4 text-center">
                      <div className="flex items-center space-x-2">
                        <IconEdit size={30} color=''/>
                        <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                        <IconTrash size={37} color='#FF0F00'/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </main>
  );
}



