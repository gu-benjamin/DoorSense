'use client';

import IconUser from 'components/Icons/icon-user';
import IconLock from 'components/Icons/icon-lock';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InputLogin } from './../components/Inputs/Input-login/input-login';
import { Button } from './../components/Buttons/Button/button';

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

type FormProps = z.infer<typeof schema>;

export default function LoginPage() {
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

  const handleForm = (data: FormProps) => {
    console.log(data);
    resetField('user')
    resetField('password')
  };

  return (
    <main className={`w-screen h-screen flex`}>
      {/* Right Column Image */}
      <aside className={`w-1/2 h-full`}>
        <img
          src="/images/Login.png"
          alt="login image"
          className={`w-full h-full`}
        />
      </aside>

      {/* Left Column Form */}
      <section
        className={`p-6 pt-20 flex flex-col items-center justify-start w-1/2 h-full gap-12`}
      >
        <img src="/images/Logo.png" alt="" className={``} />

        <h1 className={`text-primary font-extrabold text-6xl`}>Login</h1>
        <p className={`font-regular text-lg`}>
          Conecte-se usando o usuário de administrador
        </p>

        <form
          onSubmit={handleSubmit(handleForm)}
          className={`flex flex-col items-center gap-10 w-2/3`}
        >

          <InputLogin
            {...register('user', {required: true})}
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
            label="Digite seu usuário ..."
            helperText={errors.user?.message}
          />

          <InputLogin
            {...register('password', {required: true})}
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
            label="Digite sua senha ..."
            helperText={errors.password?.message}
          />

          <Button btnName="ENTRAR" />

        </form>
          {/* Link */}
          <a href="">Esqueceu a senha?</a>
      </section>
    </main>
  );
}
