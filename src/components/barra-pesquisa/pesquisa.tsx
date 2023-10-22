'use client'

import { BiFilter } from 'react-icons/bi'; // Importar o ícone BiFilter do react-icons/bi
import { AiOutlinePlus} from 'react-icons/ai';

export default function Barra(){
    return(
        <div className="text-md flex flex-col sm:flex-row mb-4 sm:text-base">
          <div className="relative w-full sm:mr-4 sm:mb-0">
            <div className="bg-thirdy p-4 rounded-2xl flex dark:bg-darkbusc">
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-10 py-1 text-base w-full flex focus:shadow-outline rounded-lg bg-white dark:bg-dark focus:outline-none"
                />
              <button className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded">
                <BiFilter size={24} color="" /> Filtros
              </button>
            </div>
          </div>

          <div className="bg-thirdy p-3 w-fit mt-2 sm:mt-0 sm:w-auto rounded-2xl flex sm:items-center dark:bg-darkbusc">
            <button
              className="border-primary-100 bg-primary-100 text-white font-semibold py-2 px-4 rounded flex items-center transform hover:scale-95"
              style={{ whiteSpace: 'nowrap' }}
            >
              <AiOutlinePlus size={20} />
              Nova Sala
            </button>
          </div>
        </div>
    )
}