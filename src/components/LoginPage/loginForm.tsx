'use client';

import { useState } from 'react';
import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../Icons/icon-password-open';
import IconClosePassword from '../Icons/icon-password-close';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../Inputs/Input-login/input-login';
import { Button } from '../Buttons/Button/button';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { useRouter } from 'next/navigation';

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  username: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(3, 'Por favor insira um usuário válido'),
  password: z
    .string({
      required_error: 'Este campo é obrigatório'
    })
    .min(5, 'Por favor insira uma senha válida')
});

// Declarar o tipo dos dados do formulário sendo o mesmo que o do schema, evitar problemas de tipagem
type FormProps = z.infer<typeof schema>;

export default function LoginForm() {
  const router = useRouter();

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
    const body = data;

    const res = await fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error('Falha ao autenticar');
    }
    const json = await res.json();
    console.log(json)

    resetField('username');
    resetField('password');

    router.refresh();
    if(json.message === 'Login realizado com sucesso / Crie Usuário'){
      router.push('/FirstAcess');
    }

    router.push('/Dashboard');
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Função visibilidade da senha
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <h1
        className={`text-primary-100 font-extrabold text-5xl lg:text-6xl xl:text-6xl`}
      >
        Login
      </h1>
      <p className={`font-light text-lg text-center dark:text-white`}>
        Conecte-se usando o usuário de administrador
      </p>

      <form
        onSubmit={handleSubmit(handleForm)}
        className={`flex flex-col items-center gap-8 w-full lg:w-1/2 xl:1/2`}
      >
        {/* Campo Usuário */}
        <InputLogin
          //Registrando campo na hook
          {...register('username', { required: true })}
          //Pros
          placeholder="Digite seu usuário ..."
          icon={
            <IconUser
              size={30}
              color={
                errors.username?.message
                  ? `var(--color-error)`
                  : `var(--color-primary)`
              }
            />
          }
          // label="Usuário:"
          helperText={errors.username?.message}
        />

        {/* Campo password */}
        <InputLogin
          // Registrando campo na hook
          {...register('password', { required: true })}
          //Props
          placeholder="Digite sua senha ..."
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
          // label="Senha:"
          helperText={errors.password?.message}
          //Botao icone de esconder a senha
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
        <Button
          btnName="ENTRAR"
          className={`botao-primary lg:px-10 xl:px-10 hover:scale-100 hover:bg-primary-60`}
        />
      </form>
    </>
  );
}
