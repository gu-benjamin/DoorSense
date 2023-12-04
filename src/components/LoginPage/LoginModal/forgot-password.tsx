'use client';

import { useState, SetStateAction, ReactNode, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { LuMail } from 'react-icons/lu';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import Loading from 'app/(authenticated)/loading';

interface ModalLoginFormProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function ModalLoginForm({ open, setOpen }: ModalLoginFormProps) {
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState('');

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  //Função de enviar email de recuperação ao email registrado no banco de dados
  const enviarEmail = async () => {
    setMounted(false);
    try {
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
      const sucess = json.status === '200 OK' ? true : false;

      if (sucess) {
        setMessage(
          'Um e-mail de recuperação foi enviado. Por favor, verifique sua caixa de entrada.'
        );
      }
    } catch (error) {
      setMessage('Falha ao enviar e-mail. Feche e tente novamente.');
    } finally {
      setMounted(true);
    }
  };

  useEffect(() => {
    if (open) {
      enviarEmail();
    }

    return () => {
      setMessage('');
      setMounted(false);
    };
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
          icon={<LuMail size={45} color={`var(--color-primary)`} />}
        />
        <Modal.Title
          title={`Redefinição de senha`}
          className="dark:text-white"
        />
        <Modal.Content>
          {mounted ? <p>{message}</p> : <Loading />}
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
