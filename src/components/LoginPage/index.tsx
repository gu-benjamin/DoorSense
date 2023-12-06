'use client';

import { useState, useEffect } from 'react';
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { Button } from '../Buttons/Button/button';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import LoginForm from './loginForm';
import ModalLoginForm from './LoginModal/forgot-password';
import IconLogo from 'components/Icons/icon-logo';
import IconLogoDark from 'components/Icons/icon-logodark';

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
          <IconLogo size={170} />
        ) : (
          <IconLogoDark size={170} />
        )}


        <LoginForm />

        {/* Link */}
        <Button
          btnName="Esqueceu a senha?"
          type="button"
          onClick={toggleModalVisibility}
          className="dark:text-white focus:outline-none"
        />
      </section>

      <ModalLoginForm open={open} setOpen={setOpen} />
    </main>
  );
}
