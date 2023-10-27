'use client';

import { useState } from 'react';
import { BiFilter } from 'react-icons/bi'; // Importar o ícone BiFilter do react-icons/bi
import { AiOutlinePlus } from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { MdOutlineClose } from 'react-icons/md';
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';

export default function Barra() {
  const [open, setOpen] = useState(false);

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="text-md flex flex-col sm:flex-row mb-4 sm:text-base">
        <div className="relative w-full sm:mr-4 sm:mb-0">
          <div className="bg-thirdy p-4 rounded-2xl flex dark:bg-dark-100">
            <input
              type="search"
              placeholder="Buscar..."
              className="pl-10 py-1 text-base w-full flex focus:shadow-outline rounded-lg bg-white dark:bg-dark-200 focus:outline-none"
            />
            <button className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded"
            >
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

      <Modal.Root open={open} onClose={setOpen}>
        {/*Parte de cima da modal - Action de fechar a modal*/}
        <Modal.CloseTop>
          <ButtonIcon
            onClick={toggleModalVisibility}
            icon={<MdOutlineClose size={30} className={``} color="#D3D3D3" />}
          />
        </Modal.CloseTop>

        {/*Corpo da modal*/}
        <Modal.MainSection>
          {/*Icone da modal*/}
          <Modal.Icon
            icon={<TbHomeEdit size={50} color={`var(--color-primary)`} />}
          />

          {/*Titulo da modal*/}
          <Modal.Title title={`Criar Sala`} />

          {/*Conteudo da modal*/}
          <Modal.Content>
            <h1>Atualize as informações da sala aqui:</h1>
            <form className="flex flex-col gap-4">
              <InputLogin
                icon={<TbHomeEdit size={30} color={`var(--color-primary)`} />}
                placeholder="Digite"
                label="Sala:"
              />
              <InputLogin
                icon={<TbHomeEdit size={30} color={`var(--color-primary)`} />}
                placeholder="Digite"
                label="Sala:"
              />
              <InputLogin
                icon={<TbHomeEdit size={30} color={`var(--color-primary)`} />}
                placeholder="Digite"
                label="Sala:"
              />
            </form>
          </Modal.Content>
        </Modal.MainSection>

        {/*Parte de baixo da modal - seção de botões*/}
        <Modal.Actions>
          {/*Botões da modal*/}
          <Modal.Action btnName="Editar" onClick={() => setOpen(false)} />
          <Modal.Action
            btnName="Cancelar"
            className="botao-cancel"
            onClick={() => setOpen(false)}
          />
        </Modal.Actions>
      </Modal.Root>
    </>
  );
}
