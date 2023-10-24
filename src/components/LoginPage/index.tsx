'use client';

import { useState, useEffect } from 'react';
import IconUser from 'components/Icons/icon-user';
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { InputLogin } from '../Inputs/Input-login/input-login';
import { Button } from '../Buttons/Button/button';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ButtonIcon } from '../Buttons/Button-icon/button-icon';
import IconLost from '../Icons/icon-lostpass';
import Image from 'next/image';
import { Modal } from 'components/Modal';
import LogoHome from '../Icons/logoSVG';
import { useTheme } from 'next-themes';
import LogoHomeDark from '../Icons/logoSVGdark';
import LoginForm from './loginForm';

export default function LoginUI() {
  const [open, setOpen] = useState(false);
  
  // Função visibilidade da modal
  function toggleModalVisibility() {
    setOpen((prevState) => !prevState);
  }
  
  const { resolvedTheme } = useTheme();
  
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  return (
    <main
      className={`w-screen h-screen flex items-center justify-center mx-auto md:h-screen dark:bg-black bg-secondary`}
    >
      {/* Left Column Image */}
      <picture className={`w-2/3 h-screen hidden lg:block xl:block relative`}>
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
        <div className="fixed top-5 right-5">
          <ThemeButton />
        </div>

        {resolvedTheme === 'dark' ? (
          <LogoHomeDark size={170} />
        ) : (
          <LogoHome size={170} />
        )}

        <LoginForm />

        {/* Link */}
        <Button
          btnName="Esqueceu a senha?"
          type="button"
          onClick={toggleModalVisibility}
          className="dark:text-white"
        />
      </section>

      <Modal.Root open={open} onClose={setOpen}>
        <Modal.CloseTop>
          <ButtonIcon
            onClick={toggleModalVisibility}
            icon={<XCircleIcon width={25} height={25} />}
          />
        </Modal.CloseTop>
        <Modal.MainSection>
          <Modal.Icon
            icon={<IconLost size={50} color={`var(--color-primary)`} />}
          />
          <Modal.Title title={`Redefinição de senha`} />
          <Modal.Content>
            <p>Por favor insira seu e-mail de recuperação</p>
            <InputLogin
              icon={<IconUser size={30} color={`#05AFF2`} />}
              placeholder="Digite seu E-mail"
              label="E-mail"
            />
          </Modal.Content>
        </Modal.MainSection>
        <Modal.Actions>
          <Modal.Action
            btnName="Sair"
            className="botao-danger"
            onClick={toggleModalVisibility}
          />
          <Modal.Action
            btnName="Enviar"
            className="botao-reset"
            onClick={toggleModalVisibility}
          />
        </Modal.Actions>
      </Modal.Root>
    </main>
  );
}
