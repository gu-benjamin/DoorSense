'use client';

import React, { useState, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineClose } from 'react-icons/md';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { IoWarningOutline } from 'react-icons/io5';

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

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  async function deleteClass() {
    const res = await fetch('/api/classroms', {
        method: 'DELETE',
        body: JSON.stringify({id:id}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!res.ok) {
        throw new Error('Falha ao deletar');
      }
  
      const json = await res.json();
      setMessage(json.data.message);
      setTimeout(() => setMessage(''), 3000);

      toggleModalVisibility();
      router.refresh();
  }

  return (
    <Modal.Root open={open} onClose={setOpen}>
    <Modal.CloseTop>
        <ButtonIcon
          onClick={toggleModalVisibility}
          icon={<MdOutlineClose size={30} className={`text-gray-400 hover:text-red-500 hover:scale-110 focus:outline-none`}/>}
        /> 
    </Modal.CloseTop>
    {/* Corpo da modal */}
    <Modal.MainSection>
      {/* Icone da modal */}
      <Modal.Icon
        icon={<IoWarningOutline size={50} color={`var(--color-primary)`} />}           
      />

      {/* Título da modal */}
      <Modal.Title className='dark:text-white' title={`Aviso! Você está deletando uma Sala`} />

      {/* Conteúdo da modal */}
      <Modal.Content>
        <h1>Tem certeza que quer deletar essa sala? Essa sala será excluída <span className='text-red-500 font-bold'>permanentemente</span></h1>
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
      <Modal.Action btnName="Deletar" className="botao-reset" onClick={deleteClass} />
    </Modal.Actions>
  </Modal.Root>
  );
}
