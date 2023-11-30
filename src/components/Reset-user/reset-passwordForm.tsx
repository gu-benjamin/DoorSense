'use client';

import { useState } from 'react';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../Icons/icon-password-open';
import IconClosePassword from '../Icons/icon-password-close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../Inputs/Input-login/input-login';
import { Button } from '../Buttons/Button/button';
import { ButtonIcon } from '../Buttons/Button-icon/button-icon';
import { useParams, useRouter } from 'next/navigation';

const schema = z
  .object({
    newPassword: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida'),
    confirmNewPassword: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida')
  })
  .refine((fields) => fields.newPassword === fields.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'As senhas precisam ser iguais.'
  });

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function ResetPasswordForm() {
  const router = useRouter();
  const { ticket } = useParams();

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

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    console.log(data);
    const body = {
      newPassword: data.newPassword,
      ticket: ticket
    };

    const res = await fetch('/api/login/reset-password', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error('Falha ao registrar nova senha');
    }
    const json = await res.json();
    console.log(json);

    resetField('newPassword');
    resetField('confirmNewPassword');

    router.refresh();
    router.push('/');
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <h1
        className={`text-primary-100 font-extrabold text-3xl lg:text-5xl xl:text-5xl`}
      >
        Redefinir senha
      </h1>
      <p
        className={`font-light text-sm text-center lg:text-lg xl:text-lg dark:text-white`}
      >
        Redefine a sua senha a seguir:
      </p>

      <form
        onSubmit={handleSubmit(handleForm)}
        className={`flex flex-col items-center gap-8 w-full lg:w-1/2 xl:1/2`}
      >
        {/* Campo password */}
        <InputLogin
          // Registrando campo na hook
          {...register('newPassword', { required: true })}
          //Props
          placeholder="Digite sua nova senha ..."
          type={isPasswordVisible ? 'text' : 'password'}
          icon={
            <IconLock
              size={30}
              color={
                errors.newPassword?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          // label="Senha:"
          helperText={errors.newPassword?.message}
          //Botao icone de esconder a senha
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.newPassword?.message ? `bottom-12` : `bottom-2`
              }`}
              icon={
                isPasswordVisible ? (
                  <IconOpenPassword
                    size={30}
                    color={
                      errors.newPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                ) : (
                  <IconClosePassword
                    size={30}
                    color={
                      errors.newPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                )
              }
              onClick={togglePasswordVisibility}
            />
          }
        />

        {/* Campo CONFIRM password */}
        <InputLogin
          // Registrando campo na hook
          {...register('confirmNewPassword', { required: true })}
          //Props
          placeholder="Confirme sua nova senha ..."
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          icon={
            <IconLock
              size={30}
              color={
                errors.confirmNewPassword?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          // label="Senha:"
          helperText={errors.confirmNewPassword?.message}
          //Botao icone de esconder a senha
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.confirmNewPassword?.message ? `bottom-12` : `bottom-2`
              }`}
              icon={
                isConfirmPasswordVisible ? (
                  <IconOpenPassword
                    size={30}
                    color={
                      errors.confirmNewPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                ) : (
                  <IconClosePassword
                    size={30}
                    color={
                      errors.confirmNewPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                )
              }
              onClick={toggleConfirmPasswordVisibility}
            />
          }
        />

        <Button
          btnName="Enviar"
          className={`botao-primary lg:px-10 xl:px-10 hover:scale-100 hover:bg-primary-60`}
        />
      </form>
    </>
  );
}
