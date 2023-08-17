import Image from 'next/image';

import React from 'react';
import IconHome from './../../../components/Icons/🦆 icon-home';

export default function HomePage(){
  
  return (
    <main className="flex flex-col h-screen bg-gray-100">

      {/* Conteúdo principal */}
      <div className=" flex items-center justify-center  bg-secundary">
        {/* Área de conteúdo principal */}
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/5 xl:w-4/5 p-4">
        <div className="flex">
          <div className="bg-gray-100 py-4 text-left">
            <div className="flex items-center">
              <IconHome size={80} color={`var(--color-primary)`}/>
              <div className="p-5">
                <p className="text-5xl font-semibold text-gray-800">Salas</p>
                <p className="text-gray-600">Lista das salas criadas</p>
              </div>
            </div>
          </div>
        </div>
        {/* Campo de busca */}
          <div className="relative max-w-md w-full mb-4">
            <div className="absolute top-1 left-2 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <div className="bg-blue-200 p-3 rounded-full">
              <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border-none focus:shadow-outline rounded-full" type="search" placeholder="Buscar..." />
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
                  <td className="flex py-2 px-4 text-center border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-red-500">Inativo</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">Ativo</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                </tr>
                <tr className="hover:bg-grey-lighter">
                  <td className="py-2 px-4 text-center border-b border-grey-light">123abcdef456ghi89</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">1</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light">Laboratório</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light text-green-500">Ativo</td>
                  <td className="py-2 px-4 text-center border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" className="rounded-full h-10 w-10" /></td>
                </tr>
              </tbody>
            </table>

            <div className="text-right mt-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Ver mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}



