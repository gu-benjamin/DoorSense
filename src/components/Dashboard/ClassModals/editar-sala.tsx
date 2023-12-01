'use client';

import React, { useState, SetStateAction, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { InputLogin } from 'components/Inputs/Input-login';
import { Dropdown } from 'components/DropDown/dropdown';
import { TbHomeEdit } from 'react-icons/tb';
import { FaFilePen } from "react-icons/fa6";
import { MdEditLocationAlt } from "react-icons/md";
import { MdOutlineClose } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import Loading from 'app/(authenticated)/Dashboard/loading';

type classData = {
  id: string;
  nome: string;
  numero?: string;
  arduino?: string;
  status: string;
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
  }),
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
  doorsenses,
}: ModalEditClassProps) {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues:{
      arduino: ''
    }
  });

  const inputNumber = classData.numero !== null ? classData.numero : '';
  // const inputArduino = classData.arduino !== null ? classData.arduino : '';

  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
    resetField('nome');
    resetField('numero');
    resetField('arduino');
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

      if (!res.ok) {
        throw new Error('Falha ao editar sala');
      }

      const json = await res.json();
      setMessage(json.data.message);
      setTimeout(() => setMessage(''), 5000);

      toggleModalVisibility();
      router.refresh();
    } catch (error) {
      console.error('Erro ao editar sala:', error);
      // Trate o erro conforme necessário
    } finally {
      setLoading(false);
    }
  };

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
          className="flex flex-col gap-4"
        >
          <InputLogin
            {...register('nome', { required: true })}
            icon={
              <MdEditLocationAlt
                size={30}
                color={
                  errors.nome?.message
                    ? `var(--color-error)`
                    : `var(--color-primary)`
                }
              />
            }
            defaultValue={classData.nome}
            placeholder="Digite o nome da sala ..."
            label="Nome da Sala:"
            helperText={errors.nome?.message}
            disabled={loading}
          />

          <InputLogin
            {...register('numero', { required: true })}
            icon={
              <MdEditLocationAlt
                size={30}
                color={
                  errors.numero?.message
                    ? `var(--color-error)`
                    : `var(--color-primary)`
                }
              />
            }
            defaultValue={inputNumber}
            placeholder="Digite o número da sala ..."
            type="number"
            label="Número da sala:"
            helperText={errors.numero?.message}
            disabled={loading}
          />

          <Dropdown
            {...register('arduino', { required: true })}
            icon={
              <MdEditLocationAlt
                size={30}
                color={
                  errors.numero?.message
                    ? `var(--color-error)`
                    : `var(--color-primary)`
                }
              />
            }
            placeholder="Digite o número da sala ..."
            label="Doorsense ID:"
            options={doorsenses}
            helperText={errors.numero?.message}
            disabled={loading}
          />
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
          className={`botao-reset ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
          type="submit"
          onClick={handleSubmit(handleForm)}
          disabled={loading}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
