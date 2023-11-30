'use client';

import { useState, SetStateAction, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputLogin } from 'components/Inputs/Input-login';
import { MdOutlineClose } from 'react-icons/md';
import { LuMail } from 'react-icons/lu';
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from "react-icons/io";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';

interface ModalLoginFormProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalLoginForm({ open, setOpen }: ModalLoginFormProps) {
  const router = useRouter();

  const[apiRes, setApiRes] = useState('');

  const sucess = apiRes === '200 OK' ? true : false;

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  //Função de enviar email de recuperação ao email registrado no banco de dados
  const enviarEmail = async () => {
    const res = await fetch('/api/login/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error('Erro ao enviar email');
    }

    const json = await res.json();

    setApiRes(json.status);
  };

  useEffect(() =>{
    if(open){
      enviarEmail();
    }

    return setApiRes('');

  }, [open]);

  return (
    <Modal.Root open={open} onClose={setOpen}>
      <Modal.CloseTop>
        <ButtonIcon
          onClick={toggleModalVisibility}
          icon={
            <MdOutlineClose
              size={30}
              className="text-gray-500  hover:text-red-500 hover:scale-110 focus:outline-none"
            />
          }
        />
      </Modal.CloseTop>
      <Modal.MainSection>
        <Modal.Icon
          icon={sucess ? <IoIosCheckmarkCircleOutline size={45} color={`var(--color-primary)`}/> : <IoIosCloseCircleOutline size={45} color={`var(--color-primary)`}/> }
        />
        <Modal.Title
          title={`Redefinição de senha`}
          className="dark:text-white"
        />
        <Modal.Content>
          <p>
            {sucess ? 'Um e-mail de recuperação foi enviado. Por favor, verifique sua caixa de entrada.' : 'Falha ao enviar e-mail. Feche e tente novamente.'}
          </p>
        </Modal.Content>
      </Modal.MainSection>
      <Modal.Actions>
        <Modal.Action
          btnName="Ok"
          className="botao-reset"
          onClick={toggleModalVisibility}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
