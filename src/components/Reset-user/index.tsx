'use client';

import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import FirstAcessForm from './firstAcessform';
import ResetPasswordForm from './reset-passwordForm';
import { usePathname } from 'next/navigation';
import { APP_ROUTES } from 'constants/app_routes';
import IconLogo from 'components/Icons/icon-logo';
import IconLogoDark from 'components/Icons/icon-logodark';

export default function ResetUserUI() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

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
          <IconLogo size={170} />
        ) : (
          <IconLogoDark size={170} />
        )}

        {pathname === APP_ROUTES.private.reset_user ? <FirstAcessForm /> : <ResetPasswordForm />}
        
      </section>
    </main>
  );
}
