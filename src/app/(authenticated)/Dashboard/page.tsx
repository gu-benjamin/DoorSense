import Image from 'next/image';

import React from 'react';
import IconHome from './../../../components/Icons/🦆 icon-home';
import IconMais from './../../../components/Icons/icon-mais';
import IconEdit from './../../../components/Icons/🦆 icon-edit';
import IconTrash from './../../../components/Icons/🦆 icon-trash';

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
                <IconHome size={80} color={`var(--color-primary)`} />
                <div className="p-5">
                  <p className="text-5xl font-semibold text-gray-800">Salas</p>
                  <p className="text-gray-600">Lista das salas criadas</p>
                </div>
              </div>
            </div>
          </div>


         {/* Campo de busca e filtro */}
          <div className="flex items-center mb-4">
            <div className="relative max-w-4xl w-full">
              <div className="bg-blue-200 p-4 rounded-2xl flex w-full">
                <input className="pl-10 pr-4 text-base focus:shadow-outline rounded-full w-full" type="search" placeholder="Buscar..." />
                <button className="ml-10 border-2 border-primary bg-transparent hover:text-white hover:bg-primary text-cyan-500 font-semibold py-2 px-4 rounded">
                  Filtros
                </button>
              </div>
            </div>
            
            {/* Nova Sala */}
            <div className="bg-blue-200 ml-2 p-4 rounded-2xl flex items-center">
              <button className=" border-primary bg-primary text-white font-semibold py-2 px-4 rounded flex items-center">
                <IconMais size={17} />
                Nova Sala
              </button>
            </div>
          </div>


          {/* O Dashboard */}
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-gray-500 text-lg font-semibold pb-4">Salas</h2>
            <div className="my-1 h-px bg-gradient-to-r from-cyan-300 to-cyan-500 mb-6"></div>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="hover:bg-grey-lighter">
                  <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light">ID</th>
                  <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light">Número</th>
                  <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light">Nome da Sala</th>
                  <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light">Status</th>
                  <th className="py-2 px-4 bg-grey-lightest font-normal uppercase text-sm text-grey-light border-b border-grey-light">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">Ativo</td>
                  <td className="flex py-2 px-4 text-center border-b border-grey-light"><IconEdit size={25} /><IconTrash size={40} /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-red-500">Inativo</td>
                  <td className="flex py-2 px-4 text-center border-b border-grey-light"><IconEdit size={25} /><IconTrash size={40} /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">Ativo</td>
                  <td className="flex py-2 px-4 text-center border-b border-grey-light"><IconEdit size={25} /><IconTrash size={40} /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">Ativo</td>
                  <td className="flex py-2 px-4 text-center border-b border-grey-light"><IconEdit size={25} /><IconTrash size={40} /></td>
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



