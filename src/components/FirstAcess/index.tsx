'use client';

import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import Image from 'next/image';
import LogoHome from '../../components/Icons/logoSVG';
import { useTheme } from 'next-themes';
import LogoHomeDark from '../../components/Icons/logoSVGdark';
import FirstAcessForm from './firstAcessform';

export default function FirstAcessUI() {
 
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


        {resolvedTheme === 'dark' ? (
          <LogoHomeDark size={170} />
        ) : (
          <LogoHome size={170} />
        )}

        <FirstAcessForm/>
      </section>
    </main>
  );
}
