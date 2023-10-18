'use client';

import { useState } from 'react';
import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import IconOpenPassword from '../../components/Icons/icon-password-open';
import IconClosePassword from '../../components/Icons/icon-password-close';
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from '../../components/Inputs/Input-login/input-login';
import { Button } from '../../components/Buttons/Button/button';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ButtonIcon } from '../../components/Buttons/Button-icon/button-icon';
import IconLost from '../../components/Icons/icon-lostpass';
import Image from 'next/image';
import { Modal } from 'components/Modal';
import LogoHome from '../../components/Icons/logoSVG';
import { useTheme } from 'next-themes';
import LogoHomeDark from '../../components/Icons/logoSVGdark';

// Esquema de validação para o formulário do Login - Utilizado a lib Zod
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
  const handleForm = async (data: FormProps) => {
    console.log(data);
    // const body = data
    // const res = await fetch('https:/localhost:3000/api/login',{
    //   method: 'POST',
    //   body: body
    // });

    resetField('user');
    resetField('password');
    resetField('confirmPassword');
  };

  // STATES
  //para mudar a visibilidade da senha
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  //para mudar a visibilidade da modal
  const [open, setOpen] = useState(false);

  //Ref ao botao de cancelar ação na modal
  // const cancelButtonRef = useRef(null)
  // console.log(cancelButtonRef)

  // Função visibilidade da senha
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  }
  // Função visibilidade da modal
  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }

  //Dark Theme
  let [darkMode, setDarkMode] = useState(false);
  //End

  // Front da página

  const { resolvedTheme } = useTheme();

  return (
    <main
      className={`w-screen h-screen flex items-center justify-center mx-auto md:h-screen dark:bg-black bg-secondary`}
    >
      {/* Left Column Image */}
      <picture
        className={`w-1/2 h-screen hidden lg:block xl:block relative ml-20`}
      >
        <Image
          src="/images/LoginImage.png"
          alt="login image"
          fill
          quality={100}
          className={``}
          priority
          sizes="(max-width: 768px) 100vw"
        />
      </picture>

      {/* Right Column Form */}
      <section
        className={`flex flex-col items-center justify-center w-1/2 h-full gap-6 lg:gap-6 xl:gap-9 bg-secondary dark:bg-black`}
      >
        {/* Button Dark Theme */}
        <div className="fixed top-5 right-10">
          <ThemeButton />
        </div>

        {/* <img src="/images/Logo.png" alt="" className={`w-24 lg:w-36 xl:w-36`} /> */}

        {resolvedTheme === 'dark' ? (
          <LogoHomeDark size={170} />
        ) : (
          <LogoHome size={170} />
        )}

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
            //Registrando campo na hook
            {...register('user', { required: true })}
            //Pros
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
            // label="Usuário:"
            helperText={errors.user?.message}
          />

          {/* Campo password */}
          <InputLogin
            // Registrando campo na hook
            {...register('password', { required: true })}
            //Props
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

          {/* Campo CONFIRM password */}
          <InputLogin
            // Registrando campo na hook
            {...register('confirmPassword', { required: true })}
            //Props
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
            // label="Senha:"
            helperText={errors.confirmPassword?.message}
            //Botao icone de esconder a senha
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
            btnName="ENTRAR"
            className={`botao-primary lg:px-10 xl:px-10`}
          />
        </form>
      </section>
    </main>
  );
}
