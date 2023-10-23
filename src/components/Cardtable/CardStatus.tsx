'use client'

import { HtmlHTMLAttributes, ReactNode, forwardRef, useState, useEffect } from 'react';
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
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';
import { MdOutlineClose } from 'react-icons/md';

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
    const [message, setMessage] = useState<string | null>();
    const [Segundos, setSegundos] = useState(0);

    // Função para iniciar a contagem regressiva
    useEffect(() => {
      if (message) {
        const timer = setInterval(() => {
          setSegundos((prevSeconds) => {
            if (prevSeconds > 0) {
              return prevSeconds - 0.01; // Update the progress bar more frequently
            }
            return prevSeconds;
          });
        }, 10);
  
        return () => {
          clearInterval(timer);
        };
      }
    }, [message]);

    // Função visibilidade da modal
    function toggleModalEditVisibility() {
      setOpenEdit((prevState) => !prevState);
    }
    // Função visibilidade da modal
    function toggleModalDeleteVisibility() {
      setOpenDelete((prevState) => !prevState);
    }

    function Delete() {
      setOpenDelete(false);
      setMessage('Sala Removida com Sucesso');
      setTimeout(() => setMessage(null), 3000);
      setSegundos(3);
    }
      function Editar() {
      setOpenEdit(false);
      setMessage('Sala Editada com Sucesso');
      setTimeout(() => setMessage(null), 3000);
      setSegundos(3);
    }
  
    const progressBarStyle = {
      width: `${(3 - Segundos) * 20}%`, // Aumenta a largura em 20% a cada segundo
    };
    return (
      <>
      {/* Renderização da mensagem com a barra de progresso */}
        {message && (
            <div className="bg-primary-100 p-3 rounded justify-self-center text-white relative">
              {message} 
              <div className=" h-1 absolute bottom-1 left-0 right-0">
                <div className="bg-white h-full" style={progressBarStyle}></div>
              </div>
            </div>
          )}

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
            <div className="sm:hidden absolute right-4 bottom-[-40px] bg-white p-2 dark:bg-dark-200 bg-rounded shadow-lg z-10">
              {/* Aqui é o conteúdo do dropdown */}
              <div className="flex gap-2">
                <ButtonIcon
                  icon={<TiEdit size={25} color="#05AFF2" className="transform hover:scale-110"/>}
                  onClick={toggleModalEditVisibility}
                />
                <div className="w-px bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
                <ButtonIcon
                  icon={<BiTrash size={25} color="#FF0F00" className="transform hover:scale-110"/>}
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
            icon={<MdOutlineClose size={30} className={``} color='#D3D3D3'/>}
          />
        </Modal.CloseTop>

        {/*Corpo da modal*/}
        <Modal.MainSection>
          {/*Icone da modal*/}
          <Modal.Icon
            icon={<TbHomeEdit size={50} color={`var(--color-primary)`} />}
          />

          {/*Titulo da modal*/}
          <Modal.Title title={`Editar Sala`} />

          {/*Conteudo da modal*/}
          <Modal.Content>
            <h1>Atualize as informações da sala aqui:</h1>
            <form className='flex flex-col gap-4'>
              <InputLogin icon={<TbHomeEdit size={30} color={`var(--color-primary)`}/>}
              placeholder='Digite'
              label='Sala:'/>
              <InputLogin icon={<TbHomeEdit size={30} color={`var(--color-primary)`}/>}
              placeholder='Digite'
              label='Sala:'/>
              <InputLogin icon={<TbHomeEdit size={30} color={`var(--color-primary)`}/>}
              placeholder='Digite'
              label='Sala:'/>
            </form>
          </Modal.Content>
        </Modal.MainSection>

         {/*Parte de baixo da modal - seção de botões*/}
        <Modal.Actions>
          {/*Botões da modal*/}
          <Modal.Action btnName="Editar" onClick={Editar} />
          <Modal.Action
            btnName="Cancelar"
            className="botao-cancel"
            onClick={() => setOpenEdit(false)}
          />
        </Modal.Actions>
      </Modal.Root>

        {/*Esqueleto da modal*/}
        <Modal.Root open={openDelete} onClose={setOpenDelete}>
          {/*Parte de cima da modal - Action de fechar a modal*/}
          <Modal.CloseTop>
            <ButtonIcon
              onClick={toggleModalDeleteVisibility}
              icon={<MdOutlineClose size={30} className={``} color='#D3D3D3'/>}
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
            {/* Botões da modal */}
            <Modal.Action btnName="Deletar" onClick={Delete} />
            <Modal.Action
              btnName="Cancelar"
              className="botao-cancel"
              onClick={() => setOpenDelete(false)}
            />
        </Modal.Actions>
        </Modal.Root>
      </>
    );
  }
);
