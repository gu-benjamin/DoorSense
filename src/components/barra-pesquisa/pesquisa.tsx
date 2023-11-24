'use client';

import { useState, useEffect } from 'react';
import { BiFilter } from 'react-icons/bi'; // Importar o ícone BiFilter do react-icons/bi
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { MdOutlineClose } from 'react-icons/md';
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';
import ModalCreateClass from './../Dashboard/ClassModals/criar-sala';
import Mensagem from 'components/Mensagem';

type Datas = {
  data: Object[],
  setList: React.Dispatch<SetStateAction<Object[]>>;
}

type sala = {
  id: string,
  nome: string,
  numero: string, 
  arduino: string, 
  status: string 
}

export default function Barra({data, setList}: Datas) {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState('');

  // useEffect em que renderiza a lista de moedas novamente ao pesquisar na barra de busca
  useEffect(() => {
    if (search === '') {
      setList(data);
    } else {
      setList({...data, salas: data.salas.filter((item) => item.nome.toUpperCase().indexOf(search.toUpperCase()) > -1 ) }
      );
    }
  }, [search]);

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
    {message && <Mensagem message={message} duration={3} />}
      <div className="text-md flex flex-col sm:flex-row mb-4 sm:text-base">
        <div className="relative w-full sm:mr-4 sm:mb-0">
          <div className="bg-thirdy p-4 rounded-2xl flex dark:bg-dark-100">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Buscar..."
              className="pl-10 py-1 text-base w-full flex focus:shadow-outline rounded-lg bg-white dark:bg-dark-200 focus:outline-none"
            />
            <button className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded">
              <BiFilter size={24} color="" /> Filtros
            </button>
          </div>
        </div>

        <div className="bg-thirdy p-3 w-fit mt-2 sm:mt-0 sm:w-auto rounded-2xl flex sm:items-center dark:bg-dark-100">
          <button
            className="border-primary-100 bg-primary-100 text-white font-semibold py-2 px-4 rounded flex items-center transform hover:scale-95"
            style={{ whiteSpace: 'nowrap' }}
            onClick={toggleModalVisibility}
          >
            <AiOutlinePlus size={20} />
            Nova Sala
          </button>
        </div>
      </div>

      <ModalCreateClass open={open} setOpen={setOpen} setMessage={setMessage} />
    </>
  );
}
