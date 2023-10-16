import { HtmlHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';

type CardStatusProps = HtmlHTMLAttributes<HTMLParagraphElement> & {
  data: string;
};

export const CardStatus = forwardRef<HTMLInputElement, CardStatusProps>(
  ({ data, ...props }, ref) => {
    const [isDropdownOpenCard, setIsDropdownOpenCard] = useState(false);

    const handleDropdownToggleCard = () => {
        setIsDropdownOpenCard(!isDropdownOpenCard);
    };
    return (
      <div className={`flex sm:flex sm:gap-2 items-center`}>
        {data === 'Ativo' ? <AiFillCheckCircle size={16} color="#00D715" /> : <AiFillCloseCircle size={16} color="#FF0000" />}
 
        <p className={` text-${data === 'Ativo'? 'green':'red'}-500`}>{data}</p>
        <div className='sm:hidden'>
            <ButtonIcon
            icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
            onClick={handleDropdownToggleCard}
            />
        </div>
        {isDropdownOpenCard && (
        <div className="sm:hidden absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
          {/* Aqui é o conteúdo do dropdown */}
          <div className="flex gap-2">
            <ButtonIcon icon={<TiEdit size={25} color="#05AFF2" />} />
            <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
            <ButtonIcon icon={<BiTrash size={25} color="#FF0F00" />} />
            {/* Se tiver outras opções, colocar aqui */}
          </div>
        </div>
      )}
      </div>


    );
  }
);
