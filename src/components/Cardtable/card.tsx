import React, { useState } from 'react';
import { AiFillCheckCircle} from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md'; 
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';


export default function Card(){
  const [isDropdownOpenCard, setIsDropdownOpenCard] = useState(false);
  
  const handleDropdownToggleCard = () => {
    setIsDropdownOpenCard(!isDropdownOpenCard);
  };
  return (
    <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
      <p className={`text-center dark:text-white `}>Laboratório</p>
      <p className={`text-center dark:text-white `}>1</p>
      <p className={` dark:text-white text-center sm:text-left`}>
        A2C4E6G8
      </p>

      <div className={`hidden sm:flex sm:gap-2 items-center`}>
        <AiFillCheckCircle size={16} color="#00D715" />
        <p className={' text-green-500'}>Ativo</p>
      </div>

      <div className={`flex gap-2 sm:hidden `}>
        <AiFillCheckCircle size={16} color="#00D715" />
        <p className={'text-green-500'}>Ativo</p>
        <ButtonIcon
          icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
          onClick={handleDropdownToggleCard}
        />
      </div>

      {isDropdownOpenCard && (
        <div className="absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
          {/* Aqui é o conteúdo do dropdown */}
          <div className="flex gap-2">
            <ButtonIcon icon={<TiEdit size={25} color="#05AFF2" />} />
            <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
            <ButtonIcon icon={<BiTrash size={25} color="#FF0F00" />} />
            {/* Se tiver outras opções, colocar aqui */}
          </div>
        </div>
      )}

      <div className={`gap-2 items-center hidden sm:flex`}>
        <ButtonIcon icon={<TiEdit size={35} color="#05AFF2" />} />
        <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
        <ButtonIcon icon={<BiTrash size={35} color="#FF0F00" />} />
      </div>
    </div>
  );
}


