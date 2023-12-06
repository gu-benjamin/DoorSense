'use client';

import { useState, useEffect } from 'react';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../Icons/icon-password-open';
import IconClosePassword from '../Icons/icon-password-close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../Inputs/Input-login/input-login';
import { Button } from '../Buttons/Button/button';
import { ButtonIcon } from '../Buttons/Button-icon/button-icon';
import { useParams, usePathname, useRouter } from 'next/navigation';
import ModalSucessForm from './ModalSucess';
import { APP_ROUTES } from 'constants/app_routes';
import Loading from 'app/(authenticated)/loading';
import { senhaSchema } from 'schemas';

const schema = z
  .object({
    newPassword: senhaSchema,
    confirmNewPassword: senhaSchema
  })
  .refine((fields) => fields.newPassword === fields.confirmNewPassword, {
    path: ['confirmNewPassword'],
    message: 'As senhas precisam ser iguais.'
  });

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function ResetPasswordForm() {
  const { refresh, push } = useRouter();
  const pathname = usePathname();
  const { ticket } = useParams();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema)
  });

  const handleForm = async (data: FormProps) => {
    setLoading(true);
    setApiError('');

    try {

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

      if (res.status >= 400) {
        if(res.status === 401){
          refresh();
          push(APP_ROUTES.public.login);
        }
        throw new Error('Falha ao registrar nova senha. Tente novamente');
      }

      const json = await res.json();

      if (json.status === '200 OK') {
        reset(); // Resetando os campos do formulário
        setSuccess(true);
      }
    } catch (error) {
      console.error('Erro ao processar o formulário:', error);
      setApiError((error as Error).message)
    } finally {
      setLoading(false);
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  };


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
        Redefina a sua senha a seguir:
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
          disabled={isSubmitting || loading}
          //Botao icone de esconder a senha
          actionIcon={
            <ButtonIcon
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
          disabled={isSubmitting || loading}
          //Botao icone de esconder a senha
          actionIcon={
            <ButtonIcon
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

        {apiError.length > 0 && <p className='text-light-red font-normal italic text-sm'>{apiError}</p>}

        <Button
          btnName={loading ? <Loading /> : 'Enviar'}
          className={`botao-primary lg:px-10 xl:px-10 hover:scale-100 hover:bg-primary-60`}
          type="submit"
          disabled={isSubmitting || loading}
        />
      </form>

      <ModalSucessForm open={success} setOpen={setSuccess} pathname={pathname!} />
    </>
  );
}
