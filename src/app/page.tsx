'use client';

import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from './../components/Inputs/Input-login/input-login';
import { Button } from './../components/Buttons/Button/button';
import { useState } from 'react';
import { ButtonIcon } from './../components/Buttons/Button-icon/button-icon';
import IconOpenPassword from './../components/Icons/icon-password-open';
import IconClosePassword from './../components/Icons/icon-password-close';
import Link from 'next/link';

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
const schema = z.object({
  user: z
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

export default function LoginPage() {
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
  const handleForm = (data: FormProps) => {
    console.log(data);
    resetField('user');
    resetField('password');
  };

  // State para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  // Front da página
  return (
    <main className={`w-screen h-screen flex`}>
      {/* Right Column Image */}
      <aside className={`w-1/2 h-full hidden lg:block xl:block`}>
        <img
          src="/images/Login.png"
          alt="login image"
          className={`w-full h-full`}
        />
      </aside>

      {/* Left Column Form */}
      <section
        className={`p-6 flex flex-col items-center justify-center w-1/2 h-full gap-12`}
      >
        <img src="/images/Logo.png" alt="" className={`lg:w-24`} />

        <h1 className={`text-primary font-extrabold text-5xl lg:text-3x1`}>
          Login
        </h1>
        <p className={`font-regular text-lg md:text-sm`}>
          Conecte-se usando o usuário de administrador
        </p>

        <form
          onSubmit={handleSubmit(handleForm)}
          className={`flex flex-col items-center gap-10 w-full lg:w-1/2 xl:1/2`}
        >
          {/* Campo Usuário */}
          <InputLogin
          //Registrando campo na hook
            {...register('user', { required: true })}
          //Pros
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
            label="Digite seu usuário"
            helperText={errors.user?.message}
          />


          {/* Campo password */}
          <InputLogin
          // Registrando campo na hook
            {...register('password', { required: true })}
          //Props
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
            label="Digite sua senha"
            helperText={errors.password?.message}

            //Botao icone de esconder a senha
            actionIcon={
              <ButtonIcon
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

          <Button btnName="ENTRAR" />
        </form>
        {/* Link */}
        <Link href="/Dashboard">Esqueceu a senha?</Link>
      </section>
    </main>
  );
}
