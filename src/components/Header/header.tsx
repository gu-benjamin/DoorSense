'use client';
import Image from 'next/image';
import { LuLogOut } from 'react-icons/lu'; // Importar o ícone de logout do react-icons
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { ButtonIcon } from './../Buttons/Button-icon/button-icon';
import { useTheme } from 'next-themes'; // Importar useTheme do next-themes
import IconLogo from 'components/Icons/icon-logo';
import IconLogoDark from 'components/Icons/icon-logodark';

export default function Header() {
  const { resolvedTheme } = useTheme(); // Obter o tema resolvido

  return (
    <header
      className={`flex justify-between px-4 sm:px-6 lg:px-8 py-4 items-center dark:bg-nav-dark bg-white dark:bg-darkheader font-bold`}
    >
      
      <div className={`flex items-center`}>
          {resolvedTheme === 'dark' ? <IconLogo size={100}/> : <IconLogoDark size={100}/>}
        <div className={`ml-2 sm:ml-4`}>
          <p className={`text-base sm:text-2xl`}>Door<span className="text-primary-100">Sense</span></p>
          <p className={`text-xs sm:text-sm`}>A experiência sensorial da inclusão</p>
        </div>
      </div>
      <div className={`flex items-center space-x-4 sm:space-x-6`}>
        {/* Botão de alternância de tema */}
        <ThemeButton />
        {/* Botão de Logout */}
        <ButtonIcon icon={<LuLogOut size={28} />}/>
      </div>
    </header>
  );
}
