import React, { useState, ReactNode, SetStateAction } from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import IconUser from 'components/Icons/icon-user';
import { MdOutlineClose } from 'react-icons/md';
import { IoWarningOutline } from 'react-icons/io5';
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';



interface CardRootProps {
  children: ReactNode;
}

export default function CardRoot({ children }: CardRootProps) {
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

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
      <div className="relative bg-white dark:bg-darkcard text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
        {children}
        <div className={`gap-2 items-center hidden sm:flex`}>
          <ButtonIcon icon={<TiEdit size={35} color="#05AFF2" />} onClick={toggleModalEditVisibility}/>
          <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <ButtonIcon icon={<BiTrash size={35} color="#FF0F00" />} onClick={toggleModalDeleteVisibility}/>
        </div>
      </div>
      {/*Esqueleto da modal*/}
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
          <Modal.Action btnName="Editar" onClick={toggleModalEditVisibility} />
          <Modal.Action
            btnName="Cancelar"
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
