'use client'

import React, { useState, SetStateAction, ReactNode, useEffect } from 'react';
import { InputLogin } from 'components/Inputs/Input-login';
import { TbHomeEdit } from 'react-icons/tb';
import { MdOutlineClose } from 'react-icons/md';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';

interface ModalCreateClassProps {
  open: boolean,
  setOpen: React.Dispatch<SetStateAction<boolean>>,
}

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  nome: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(3, 'A sala deve conter no mínimo 3 caracteres'),
  numero: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
});

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function ModalEditClass({open, setOpen}: ModalCreateClassProps) {

    // Chamada do hook useForm para a criação do formulário do login
    const {
      register,
      handleSubmit,
      resetField,
      formState: { errors }
    } = useForm<FormProps>({
      mode: 'all',
      reValidateMode: 'onBlur',
      resolver: zodResolver(schema)
    });

    function toggleModalVisibility() {
      setOpen((prevState) => !prevState);
    }

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    const headersList = {
      "Accept": "*/*",
      'Content-Type': 'application/json'
    };

    console.log(data);
    const body = data;

    // const res = await fetch('/api/login', {
    //   method: 'post',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });

    // const res = await fetch('http://localhost/doorsense_backend/api/login/', {
    //   method: 'POST',
    //   body: JSON.stringify(body),
    //   headers: headersList
    // });

    // if (!res.ok) {
    //   throw new Error('Falha ao autenticar');
    // }
    // const json = await res.json();
    // console.log(json)

    resetField('nome');
    resetField('numero');

  };

  return (
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
        <Modal.Title title={`Editar Sala`} />

        {/*Conteudo da modal*/}
        <Modal.Content>
          <h1>Atualize as informações da sala aqui:</h1>
          <form onSubmit={handleSubmit(handleForm)} className="flex flex-col gap-4">
            <InputLogin
              {...register('nome', { required: true })}
              icon={<TbHomeEdit size={30} color={errors.nome?.message
                ? `var(--color-error)`
                : `var(--color-primary)`} />}
              placeholder="Digite o nome da sala ..."
              label="Nome da Sala:"
              helperText={errors.nome?.message}
            />

            <InputLogin
              {...register('numero', { required: true })}
              icon={<TbHomeEdit size={30} color={errors.numero?.message
                ? `var(--color-error)`
                : `var(--color-primary)`} />}
              placeholder="Digite o número da sala ..."
              type='number'
              label="Número da sala:"
              helperText={errors.numero?.message}
            />
          </form>
        </Modal.Content>
      </Modal.MainSection>

      {/*Parte de baixo da modal - seção de botões*/}
      <Modal.Actions>
        {/*Botões da modal*/}
        <Modal.Action btnName="Editar" type='submit'/>
        <Modal.Action
          btnName="Cancelar"
          className="botao-cancel"
          onClick={toggleModalVisibility}
        />
      </Modal.Actions>
    </Modal.Root>
  );
}
