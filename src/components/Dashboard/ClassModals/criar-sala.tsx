'use client';

import React, { useState, SetStateAction, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputLogin } from 'components/Inputs/Input-login';
import { MdOutlineClose } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { BsHouseAdd } from "react-icons/bs";
import { Modal } from 'components/Modal';
import Loading from 'app/(authenticated)/loading';
import { Logout } from 'functions/Logout';

interface ModalCreateClassProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setMessage: React.Dispatch<SetStateAction<string>>;
}

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  nome: z
    .string({
      required_error: 'Este campo é obrigatório.'
    })
    .min(3, 'A sala deve conter no mínimo 3 caracteres.')
    .max(100, 'A sala deve conter no máximo 100 caracteres.'),
  numero: z.string().max(4, 'O número da sala deve conter no máximo 4 caracteres.').toUpperCase().trim(),
});

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function ModalCreateClass({
  open,
  setOpen,
  setMessage
}: ModalCreateClassProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  useEffect(() =>{
    return setApiError('');
  },[open])

  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  function toggleModalVisibility() {
    reset();
    setOpen((prevState) => !prevState);
  }

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    setLoading(true);
    setApiError('');

    try {
      const body = data;

      const res = await fetch('/api/classroms', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await res.json();

      if (!res.ok) {
        if(res.status > 400){
          toggleModalVisibility();
          Logout();
          router.refresh();
        }
        throw new Error(json.message);
      }

      setMessage(json.data.message);
      setTimeout(() => setMessage(''), 5000);
      toggleModalVisibility();
      router.refresh();

    } catch (error) {
      setApiError((error as Error).message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal.Root open={open} onClose={setOpen}>
        {/*Parte de cima da modal - Action de fechar a modal*/}
        <Modal.CloseTop>
          <ButtonIcon
            onClick={toggleModalVisibility}
            icon={
              <MdOutlineClose
                size={30}
                className=" hover:text-red-500 hover:scale-110 focus:outline-none text-gray-500"
              />
            }
          />
        </Modal.CloseTop>

        {/*Corpo da modal*/}
        <Modal.MainSection>
          {/*Icone da modal*/}
          <Modal.Icon
            icon={<BsHouseAdd size={45} color={`var(--color-primary)`} />}
          />

          {/*Titulo da modal*/}
          <Modal.Title className="dark:text-white" title={`Criar nova Sala`} />

          {/*Conteudo da modal*/}
          <Modal.Content>
            <h1>Insira os seguintes valores abaixo:</h1>
            <form
              onSubmit={handleSubmit(handleForm)}
              className="flex flex-col gap-4 items-center"
            >
              <InputLogin
                {...register('nome', { required: true })}
                placeholder="Digite o nome da sala ..."
                label="Nome da Sala:*"
                helperText={errors.nome?.message}
                disabled={loading} // Desativa o input enquanto o carregamento estiver ocorrendo
              />

              <InputLogin
                {...register('numero')}
                placeholder="Digite o número da sala ..."
                label="Número da sala:"
                helperText={errors.numero?.message}
                disabled={loading}
              />

            {apiError.length > 0 && <p className='text-light-red font-normal italic text-sm'>{apiError}</p>}

            </form>
          </Modal.Content>
        </Modal.MainSection>

        {/*Parte de baixo da modal - seção de botões*/}
        <Modal.Actions>
          {/*Botões da modal*/}
          <Modal.Action
            btnName="Cancelar"
            className="botao-danger"
            onClick={toggleModalVisibility}
          />
          <Modal.Action
            btnName={loading ? <Loading /> : 'Criar'}
            type="submit"
            className={`botao-reset ${
              loading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={handleSubmit(handleForm)}
            disabled={loading}
          />
        </Modal.Actions>
      </Modal.Root>
    </>
  );
}
