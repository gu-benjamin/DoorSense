'use client';

import React, { useState, useEffect } from 'react';
import IconHome from 'components/Icons/🦆 icon-home'; // Importar o ícone para a página
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { AiOutlinePlus, AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import { PiMagnifyingGlassBold } from 'react-icons/pi'; 
import { BiFilter } from 'react-icons/bi'; // Importar o ícone BiFilter do react-icons/bi
import { MdKeyboardArrowDown } from 'react-icons/md'; 




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
            <p className="text-3xl sm:text-5xl font-semibold dark:text-white">
              Salas
            </p>
            <p className="text-md sm:text-lg dark:text-white">
              Lista das salas criadas
            </p>
          </div>
        </div>

        {/* Barra de pesquisa e botão Nova Sala */}
        <div className="text-md flex flex-col sm:flex-row mb-4 sm:text-base">
          <div className="relative w-full sm:mr-4 sm:mb-0">
            <div className="bg-thirdy p-4 rounded-2xl flex dark:bg-darkbusc">
              <label className="pl-10 py-1 text-base w-full flex focus:shadow-outline rounded-lg bg-white dark:bg-dark">
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full"
                />
              </label>
              <button className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded">
                <BiFilter size={24} color="" /> Filtros
              </button>
            </div>
          </div>

          <div className="bg-thirdy p-3 w-fit mt-2 sm:mt-0 sm:w-auto rounded-2xl flex sm:items-center dark:bg-darkbusc">
            <button
              className="border-primary-100 bg-primary-100 text-white font-semibold py-2 px-4 rounded flex items-center"
              style={{ whiteSpace: 'nowrap' }}
            >
              <AiOutlinePlus size={20} />
              Nova Sala
            </button>
          </div>
        </div>



        {/* Dashboard - Cabeçalho */}
        <div className="p-4 border-b-2 dark:border-primary-100 border-primary-100 grid grid-flow-col justify-stretch text-sm sm:text-base text-primary-100">
          <p className={`dark:text-primary-100 text-center md:pr-6`}>Nome da Sala</p>
          <p className={`dark:text-primary-100 text-start xl:text-center xl:pr-8`}>Número</p>
          <p className={`dark:text-primary-100 text-start md:pr-6 xl:pr-14 xl:text-center`}>Arduíno</p>
          <p className={`dark:text-primary-100 text-start xl:text-center xl:pr-16`}>Status</p>
          <p className={`dark:text-primary-100 text-center hidden sm:block md:pr-8`}>Ações</p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col gap-4 mt-4 ">
          {/* Card 1 */}
          <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
            <p className={`text-center dark:text-white `}>Laboratório</p>
            <p className={`text-center dark:text-white `}>1</p>
            <p className={` dark:text-white text-center sm:text-left`}>
              A2C4E6G8
            </p>

            <div className={`hidden sm:flex sm:gap-2 items-center`}>
              <AiFillCheckCircle size={16} color="#00D715" />
              <p className={' text-green-500'}>Ativo</p>
            </div>

            <div className={`flex gap-2 sm:hidden `}>
              <AiFillCheckCircle size={16} color="#00D715" />
              <p className={'text-green-500'}>Ativo</p>
              <ButtonIcon
                icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
                onClick={handleDropdownToggleCard1}
              />
            </div>

            {isDropdownOpenCard1 && (
              <div className="absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
                {/* Aqui é o conteúdo do dropdown */}
                <div className="flex gap-2">
                  <ButtonIcon icon={<TiEdit size={25} color="#05AFF2" />} />
                  <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <ButtonIcon icon={<BiTrash size={25} color="#FF0F00" />} /> {/* Substituir IconTrash por BiTrash */}
                  {/* Se tiver outras opções, colocar aqui */}
                </div>
              </div>
            )}

            <div className={`gap-2 items-center hidden sm:flex`}>
              <ButtonIcon icon={<TiEdit size={35} color="#05AFF2" />} />
              <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <ButtonIcon icon={<BiTrash size={35} color="#FF0F00" />} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
            <p className={`  text-center dark:text-white `}>Laboratório</p>
            <p className={` text-center dark:text-white `}>1</p>
            <p className={` dark:text-white text-center sm:text-left`}>
              A2C4E6G8
            </p>

            <div className={`hidden sm:flex sm:gap-2 items-center`}>
              <AiFillCloseCircle size={16} color="#FF0000" />
              <p className={' text-red-500'}>Inativo</p>
            </div>

            <div className={`flex gap-2 sm:hidden`}>
              <AiFillCloseCircle size={16} color="#FF0000" />
              <p className={' text-red-500'}>Inativo</p>
              <ButtonIcon
                icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
                onClick={handleDropdownToggleCard2}
              />
            </div>

            {isDropdownOpenCard2 && (
              <div className="absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
                {/* Aqui é o conteúdo do dropdown */}
                <div className="flex gap-2">
                  <ButtonIcon icon={<TiEdit size={25} color="#05AFF2" />} />
                  <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                  <ButtonIcon icon={<BiTrash size={25} color="#FF0F00" />} /> {/* Substituir IconTrash por BiTrash */}
                  {/* Se tiver outras opções, colocar aqui */}
                </div>
              </div>
            )}

            <div className={`gap-2 items-center hidden sm:flex`}>
              <ButtonIcon icon={<TiEdit size={35} color="#05AFF2" />} />
              <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
              <ButtonIcon icon={<BiTrash size={35} color="#FF0F00" />} />
            </div>  
          </div>
        </div>
      </div>
    </main>
  );
}
