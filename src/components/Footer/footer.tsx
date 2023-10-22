'use client';

import IconLogoEquipe from 'components/Icons/icon-logoequipe';
import IconLogoEquipeDark from 'components/Icons/icon-logoequipedark';
import { useTheme } from 'next-themes'; // Importar useTheme do next-themes

export default function Footer() {
  const { resolvedTheme } = useTheme(); // Obter o tema resolvido

  return (
    
    <div className="bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto py-4">
        <div className="text-center">
          <div className="flex justify-center">
            {resolvedTheme === 'dark' ? <IconLogoEquipe size={100}/> : <IconLogoEquipeDark size={100}/>}
          </div>
          <div className="flex justify-center my-10">
            <div className="flex items-center w-auto rounded-lg px-4 mx-2">
              {/* */}
              <div className="text-center ml-3">
                <p className='text-lg text-gray-500 dark:text-white'>Sensores inteligentes, conectando um mundo acessível para todos.</p>
                <p className="md:text-base"> </p>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0 dark:text-white">&copy; AcessoTech, 2023.</p>
          <div className="order-1 md:order-2">
            <span className="px-2 dark:text-white">All rights reserved.</span>
            <span className="px-2 border-l dark:text-white">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
