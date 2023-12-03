import { HtmlHTMLAttributes, forwardRef, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { FaMinusCircle } from 'react-icons/fa';
import ModalDeleteClass from './../Dashboard/ClassModals/deletar-sala';
import ModalEditClass from './../Dashboard/ClassModals/editar-sala';
import Mensagem from 'components/Mensagem';

type classData = {
  id: string;
  nome: string;
  numero?: string;
  arduino?: string;
  status: string | null; // Alterado o tipo para aceitar null
};

type CardStatusProps = HtmlHTMLAttributes<HTMLParagraphElement> & {
  data: string | null; // Alterado o tipo para aceitar null
  classData: classData;
  doorsenses: string[];
};

export const CardStatus = forwardRef<HTMLInputElement, CardStatusProps>(
  ({ data, classData, doorsenses, ...props }, ref) => {
    const [isDropdownOpenCard, setIsDropdownOpenCard] = useState(false);

    const handleDropdownToggleCard = () => {
      setIsDropdownOpenCard(!isDropdownOpenCard);
    };
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [message, setMessage] = useState('');

    // Função visibilidade da modal
    function toggleModalEditVisibility() {
      setOpenEdit((prevState) => !prevState);
    }
    // Função visibilidade da modal
    function toggleModalDeleteVisibility() {
      setOpenDelete((prevState) => !prevState);
    }

    return (
      <>
        {message && <Mensagem message={message} duration={5} />}

        <div className={`flex sm:gap-2 items-center justify-center`}>
          {data === 'Ativo' ? (
            <AiFillCheckCircle size={16} color="#00D715" />
          ) : data === null ? (
            <FaMinusCircle size={16} color="#858585" />
          ) : data === 'Pendente' ? (
            <FaMinusCircle size={16} color="#FFD700" />
          ) : (
            <AiFillCloseCircle size={16} color="#FF0000" />
          )}

          <p
            className={`${
              data === 'Ativo'
                ? 'text-green-500'
                : data === null
                ? 'text-gray-500'
                : data === 'Pendente'
                ? 'text-yellow-500'
                : 'text-red-500'
            }`}
          >
            {data === null ? '---' : data}
          </p>

          <div className="sm:hidden">
            <ButtonIcon
              icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
              onClick={handleDropdownToggleCard}
            />
          </div>
          {isDropdownOpenCard && (
            <div className="sm:hidden absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-dark-200 bg-rounded shadow-lg z-10">
              {/* Aqui é o conteúdo do dropdown */}
              <div className="flex gap-2">
                <ButtonIcon
                  icon={
                    <TiEdit
                      size={25}
                      color="#05AFF2"
                      className="transform hover:scale-110"
                    />
                  }
                  onClick={toggleModalEditVisibility}
                />
                <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                <ButtonIcon
                  icon={
                    <BiTrash
                      size={25}
                      color="#FF0F00"
                      className="transform hover:scale-110"
                    />
                  }
                  onClick={toggleModalDeleteVisibility}
                />
                {/* Se tiver outras opções, colocar aqui */}
              </div>
            </div>
          )}
        </div>
        {/*Edit Modal*/}
        <ModalEditClass
          open={openEdit}
          setOpen={setOpenEdit}
          setMessage={setMessage}
          classData={classData}
          doorsenses={doorsenses}
        />

        {/* Delete Modal */}
        <ModalDeleteClass
          open={openDelete}
          setOpen={setOpenDelete}
          setMessage={setMessage}
          id={parseInt(classData.id)}
        />
      </>
    );
  }
);
