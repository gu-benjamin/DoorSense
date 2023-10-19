import { HtmlHTMLAttributes, ReactNode, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { Modal } from 'components/Modal';
import IconUser from 'components/Icons/icon-user';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { IoWarningOutline } from 'react-icons/io5';

type CardStatusProps = HtmlHTMLAttributes<HTMLParagraphElement> & {
  data: string;
};

export const CardStatus = forwardRef<HTMLInputElement, CardStatusProps>(
  ({ data, ...props }, ref) => {
    const [isDropdownOpenCard, setIsDropdownOpenCard] = useState(false);

    const handleDropdownToggleCard = () => {
      setIsDropdownOpenCard(!isDropdownOpenCard);
    };
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

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
        <div className={`flex sm:flex sm:gap-2 items-center`}>
          {data === 'Ativo' ? (
            <AiFillCheckCircle size={16} color="#00D715" />
          ) : (
            <AiFillCloseCircle size={16} color="#FF0000" />
          )}

          <p
            className={` ${
              data === 'Ativo' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {data}
          </p>
          <div className="sm:hidden">
            <ButtonIcon
              icon={<MdKeyboardArrowDown size={18} color="#05AFF2" />}
              onClick={handleDropdownToggleCard}
            />
          </div>
          {isDropdownOpenCard && (
            <div className="sm:hidden absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-darkcard bg-rounded shadow-lg z-10">
              {/* Aqui é o conteúdo do dropdown */}
              <div className="flex gap-2">
                <ButtonIcon
                  icon={<TiEdit size={25} color="#05AFF2" />}
                  onClick={toggleModalEditVisibility}
                />
                <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                <ButtonIcon
                  icon={<BiTrash size={25} color="#FF0F00" />}
                  onClick={toggleModalDeleteVisibility}
                />
                {/* Se tiver outras opções, colocar aqui */}
              </div>
            </div>
          )}
        </div>
        <Modal.Root open={openEdit} onClose={setOpenEdit}>
          {/*Parte de cima da modal - Action de fechar a modal*/}
          <Modal.CloseTop>
            <ButtonIcon
              onClick={toggleModalEditVisibility}
              icon={<XCircleIcon width={25} height={25} className={``} />}
            />
          </Modal.CloseTop>

          {/*Corpo da modal*/}
          <Modal.MainSection>
            {/*Icone da modal*/}
            <Modal.Icon
              icon={<IconUser size={50} color={`var(--color-primary)`} />}
            />

            {/*Titulo da modal*/}
            <Modal.Title title={`Teste`} />

            {/*Conteudo da modal*/}
            <Modal.Content>
              <h1>jhsvakajhdj</h1>
            </Modal.Content>
          </Modal.MainSection>

          {/*Parte de baixo da modal - seção de botões*/}
          <Modal.Actions>
            {/*Botões da modal*/}
            <Modal.Action
              btnName="Clica ae"
              onClick={toggleModalEditVisibility}
            />
            <Modal.Action
              btnName="Clica ae"
              className="botao-cancel"
              onClick={toggleModalEditVisibility}
            />
          </Modal.Actions>
        </Modal.Root>

        {/*Esqueleto da modal*/}
        <Modal.Root open={openDelete} onClose={setOpenDelete}>
          {/*Parte de cima da modal - Action de fechar a modal*/}
          <Modal.CloseTop>
            <ButtonIcon
              onClick={toggleModalDeleteVisibility}
              icon={<XCircleIcon width={25} height={25} className={``} />}
            />
          </Modal.CloseTop>

          {/*Corpo da modal*/}
          <Modal.MainSection>
            {/*Icone da modal*/}
            <Modal.Icon
              icon={<IoWarningOutline size={50} color={`var(--color-primary)`} />}
            />

            {/*Titulo da modal*/}
            <Modal.Title title={`Aviso! Você está deletando uma Sala`} />

            {/*Conteudo da modal*/}
            <Modal.Content>
              <h1>Tem certeza que quer deletar essa sala?</h1>
            </Modal.Content>
          </Modal.MainSection>

          {/*Parte de baixo da modal - seção de botões*/}
          <Modal.Actions>
            {/*Botões da modal*/}
            <Modal.Action btnName="Deletar" onClick={toggleModalDeleteVisibility} />
            <Modal.Action
              btnName="Cancelar"
              className="botao-cancel"
              onClick={toggleModalDeleteVisibility}
            />
          </Modal.Actions>
        </Modal.Root>
      </>
    );
  }
);
