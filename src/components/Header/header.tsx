import Image from 'next/image';
import { ThemeButton } from 'components/Buttons/ThemeButton/theme-button';
import Link from 'next/link';

interface HeaderProps {

}

export default function Header(props : HeaderProps){
    return(
      <header
            className={`flex justify-between px-4 sm:px-6 lg:px-8 py-4 items-center dark:bg-nav-dark bg-white dark:bg-black font-bold`}
        >
        <div className={`flex items-center`}>
          <Image src='/images/Logo.png' alt='Logo' width={48} height={48} className={`w-12 sm:w-20`} />
          <div className={`ml-2 sm:ml-4`}>
            <p className={`text-base sm:text-2xl`}>Door<span className="text-logo">Sense</span></p>
            <p className={`text-xs sm:text-sm`}>A experiência sensorial da inclusão</p>
          </div>
        </div>
        <div className={`flex items-center space-x-4 sm:space-x-6`}>
          {/* <!-- Botão de Logout --> */}
          <Link href="/">Login</Link>
          <Image src='/images/logout.png' alt='Logout' width={24} height={24} className={`h-6 w-6`} />
          {/* <!-- Botão de alternância de tema --> */}
          <ThemeButton/>
        </div>
      </header>
    )
}
