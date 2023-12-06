'use client';

import React, { useState, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { IoWarningOutline } from 'react-icons/io5';
import Loading from 'app/(authenticated)/loading';
import { Logout } from 'functions/Logout';

interface ModalDeleteClassProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setMessage: React.Dispatch<SetStateAction<string>>;
  id: number;
}

export default function ModalDeleteClass({
  open,
  setOpen,
  setMessage,
  id
}: ModalDeleteClassProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  const deleteClass = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/classroms', {
        method: 'DELETE',
        body: JSON.stringify({ id: id }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await res.json();

      if (!res.ok) {
        if(res.status !== 404 && res.status >= 401){
          toggleModalVisibility();
          Logout();
          router.refresh();
        }
        throw new Error(json.message);
      }

      setMessage('Sala deletada com sucesso');
      toggleModalVisibility();
      setTimeout(() => {
        router.refresh();
        setMessage('');
      }, 5000);
      
    } catch (error) {
       setErrorMessage(`Ocorreu um erro ao deletar a sala. ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal.Root open={open} onClose={setOpen}>
      <Modal.CloseTop>
        <ButtonIcon
          onClick={toggleModalVisibility}
          icon={
            <MdOutlineClose
              size={30}
              className={`text-gray-400 hover:text-red-500 hover:scale-110 focus:outline-none`}
            />
          }
        />
      </Modal.CloseTop>
      {/* Corpo da modal */}
      <Modal.MainSection>
        {/* Icone da modal */}
        <Modal.Icon
          icon={<IoWarningOutline size={50} color={`var(--color-primary)`} />}
        />

        {/* Título da modal */}
        <Modal.Title
          className="dark:text-white"
          title={`Aviso! Você está deletando uma Sala`}
        />

        {/* Conteúdo da modal */}
        <Modal.Content>
          <h1>
            Tem certeza que quer deletar essa sala? Essa sala será excluída{' '}
            <span className="text-red-500 font-bold">permanentemente</span>
          </h1>
          {errorMessage.length > 0 && <p className='text-light-red font-normal italic text-sm'>{errorMessage}</p>}

        </Modal.Content>
      </Modal.MainSection>

      {/* Parte de baixo da modal - seção de botões */}
      <Modal.Actions>
        {/* Botões da modal */}
        <Modal.Action
          btnName="Cancelar"
          className="botao-danger"
          onClick={toggleModalVisibility}
        />
        <Modal.Action
          btnName={loading ? <Loading /> : 'Deletar'}
          className={`botao-reset ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={deleteClass}
          disabled={loading}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
