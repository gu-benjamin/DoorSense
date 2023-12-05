'use client';

import React, { useState, SetStateAction, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputLogin } from 'components/Inputs/Input-login';
import { Dropdown } from 'components/DropDown/dropdown';
import { TbHomeEdit } from 'react-icons/tb';
import { MdOutlineClose } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import Loading from 'app/(authenticated)/loading';
import { Logout } from 'functions/Logout';
import { doorsense } from 'types';


type classData = {
  id: string;
  nome: string;
  numero?: string;
  arduino?: string;
  status: string | null; // Alterado o tipo para aceitar null
};

interface ModalEditClassProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setMessage: React.Dispatch<SetStateAction<string>>;
  classData: classData;
  doorsenses: string[];
}

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  nome: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(3, 'A sala deve conter no mínimo 3 caracteres'),
  numero: z.string({
    required_error: 'Este campo é obrigatório'
  }).min(1, 'A sala deve conter no mínimo 1 caractere')
  .max(4, 'A sala deve conter no máximo 4 caracteres'),
  arduino: z.string({
    required_error: 'Este campo é obrigatório'
  })
});

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function ModalEditClass({
  open,
  setOpen,
  setMessage,
  classData,
  doorsenses
}: ModalEditClassProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      arduino: ''
    }
  });

  const inputNumber = classData.numero !== null ? classData.numero : '';

  function toggleModalVisibility() {
    reset();
    setOpen((prevState) => !prevState);
  }

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    setLoading(true);

    try {
      const body = {
        id: parseInt(classData.id),
        ...data
      };

      const res = await fetch('/api/classroms', {
        method: 'PUT',
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
      setError('serverError', {
        message: error.message
      })
    } finally {
      setLoading(false);
    }
  };

  const noRoom = doorsenses.filter((arduino) => arduino[1] == null );
  const noRoomDoorsenses = noRoom.map((arduino) => arduino[0]);

  return (
    <Modal.Root open={open} onClose={setOpen}>
      {/*Parte de cima da modal - Action de fechar a modal*/}
      <Modal.CloseTop>
        <ButtonIcon
          onClick={toggleModalVisibility}
          icon={<MdOutlineClose size={30} className={`hover:text-red-500 hover:scale-110 focus:outline-none text-gray-500`} />}
        />
      </Modal.CloseTop>

      {/*Corpo da modal*/}
      <Modal.MainSection>
        {/*Icone da modal*/}
        <Modal.Icon
          icon={<TbHomeEdit size={50} color={`var(--color-primary)`} />}
        />

        {/*Titulo da modal*/}
        <Modal.Title className="dark:text-white" title={`Editar Sala`} />

        {/*Conteudo da modal*/}
        <Modal.Content>
          <h1 className="dark:text-white">
            Insira os seguintes valores abaixo:
          </h1>
          <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col items-center gap-4"
          >
            <InputLogin
              {...register('nome', { required: true })}
              defaultValue={classData.nome}
              placeholder="Digite o nome da sala ..."
              label="Nome da Sala:"
              helperText={errors.nome?.message}
              disabled={loading}
            />

            <InputLogin
              {...register('numero', { required: true })}
              defaultValue={inputNumber}
              placeholder="Digite o número da sala ..."
              label="Número da sala:"
              helperText={errors.numero?.message}
              disabled={loading}
            />

            <Dropdown
              {...register('arduino', { required: true })}
              placeholder="Digite o número da sala ..."
              label="Doorsense ID:"
              options={noRoomDoorsenses}
              initialDoorsense={classData.arduino}
              helperText={errors.arduino?.message}
              disabled={loading}
            />

            {errors.serverError?.message.length > 0 && <p className='text-light-red font-normal italic text-sm'>{errors.serverError?.message}</p>}

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
          btnName={loading ? <Loading /> : 'Editar'}
          className={`botao-reset ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
          type="submit"
          onClick={handleSubmit(handleForm)}
          disabled={loading}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
