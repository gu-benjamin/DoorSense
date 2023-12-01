'use client';

import { useState } from 'react';
import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../../components/Icons/icon-password-open';
import IconClosePassword from '../../components/Icons/icon-password-close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../../components/Inputs/Input-login/input-login';
import { Button } from '../../components/Buttons/Button/button';
import { ButtonIcon } from '../../components/Buttons/Button-icon/button-icon';
import Loading from 'app/(authenticated)/Dashboard/loading';


const schema = z
  .object({
    user: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(3, 'Por favor insira um usuário válido'),
    password: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida'),
    confirmPassword: z
      .string({
        required_error: 'Este campo é obrigatório'
      })
      .min(5, 'Por favor insira uma senha válida')
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas precisam ser iguais'
  });

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function FirstAcessForm() {
  // Chamada do hook useForm para a criação do formulário do login
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors, isSubmitting }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  //Função acionada ao dar submit do formulário
  const handleForm = async (data: FormProps) => {
    setLoading(true);

    try {
      // Simulando uma requisição assíncrona (substitua por sua lógica real)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log(data);
      resetField('user');
      resetField('password');
      resetField('confirmPassword');
    } catch (error) {
      console.error('Erro ao processar o formulário:', error);
      // Trate o erro conforme necessário
    } finally {
      setLoading(false);
    }
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [loading, setLoading] = useState(false);

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
        Bem-vindo
      </h1>
      <p
        className={`font-light text-sm text-center lg:text-lg xl:text-lg dark:text-white`}
      >
        Primeiro acesso? Crie seu login e senha!
      </p>

      <form
        onSubmit={handleSubmit(handleForm)}
        className={`flex flex-col items-center gap-8 w-full lg:w-1/2 xl:1/2`}
      >
        {/* Campo Usuário */}
        <InputLogin
          {...register('user', { required: true })}
          placeholder="Crie seu usuário"
          icon={
            <IconUser
              size={30}
              color={
                errors.user?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          helperText={errors.user?.message}
          disabled={isSubmitting || loading} // Desativar o input durante o envio
        />

        {/* Campo password */}
        <InputLogin
          {...register('password', { required: true })}
          placeholder="Crie uma senha"
          type={isPasswordVisible ? 'text' : 'password'}
          icon={
            <IconLock
              size={30}
              color={
                errors.password?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          helperText={errors.password?.message}
          disabled={isSubmitting || loading}
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.password?.message ? `bottom-12` : `bottom-2`
              }`}
              icon={
                isPasswordVisible ? (
                  <IconOpenPassword
                    size={30}
                    color={
                      errors.password?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                ) : (
                  <IconClosePassword
                    size={30}
                    color={
                      errors.password?.message
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
          {...register('confirmPassword', { required: true })}
          placeholder="Confirme a senha"
          type={isConfirmPasswordVisible ? 'text' : 'password'}
          icon={
            <IconLock
              size={30}
              color={
                errors.confirmPassword?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          helperText={errors.confirmPassword?.message}
          disabled={isSubmitting || loading}
          actionIcon={
            <ButtonIcon
              className={`absolute right-3 ${
                errors.confirmPassword?.message ? `bottom-12` : `bottom-2`
              }`}
              icon={
                isConfirmPasswordVisible ? (
                  <IconOpenPassword
                    size={30}
                    color={
                      errors.confirmPassword?.message
                        ? `var(--color-error)`
                        : `var(--color-primary)`
                    }
                  />
                ) : (
                  <IconClosePassword
                    size={30}
                    color={
                      errors.confirmPassword?.message
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
          btnName={loading ? <Loading /> : 'ENTRAR'}
          className={`botao-primary lg:px-10 xl:px-10 hover:scale-100 hover:bg-primary-60`}
          type="submit"
          disabled={isSubmitting || loading} // Desativar o botão durante o envio
        />
      </form>
    </>
  );
}
