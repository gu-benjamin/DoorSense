import IconMoon from 'components/Icons/🦆 icon-moon';
import Image from 'next/image';
import { LuLogOut } from 'react-icons/lu'; // Importar o ícone de logout do react-icons

import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import { ButtonIcon } from './../Buttons/Button-icon/button-icon';

export default function Header() {
  return (
    <header
      className={`flex justify-between px-4 sm:px-6 lg:px-8 py-4 items-center dark:bg-nav-dark bg-white dark:bg-darkheader font-bold`}
    >
      <div className={`flex items-center`}>
        <Image src='/images/Logo.png' alt='Logo' width={48} height={48} className={`w-12 sm:w-20`} />
        <div className={`ml-2 sm:ml-4`}>
          <p className={`text-base sm:text-2xl`}>Door<span className="text-primary-100">Sense</span></p>
          <p className={`text-xs sm:text-sm`}>A experiência sensorial da inclusão</p>
        </div>
      </div>
      <div className={`flex items-center space-x-4 sm:space-x-6`}>
        {/* Botão de alternância de tema */}
        <ThemeButton />
        {/* Botão de Logout */}
        <ButtonIcon icon={<LuLogOut size={28} color="#000" />}/>
        
      </div>
    </header>
  );
}
