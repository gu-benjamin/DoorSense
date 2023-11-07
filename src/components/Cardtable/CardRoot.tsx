import React, { useState, ReactNode, SetStateAction, useEffect } from 'react';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import ModalDeleteClass from './../Dashboard/ClassModals/deletar-sala';
import ModalEditClass from './../Dashboard/ClassModals/editar-sala';
import Mensagem from 'components/Mensagem';

type classData = {
  id: string;
  nome: string;
  numero?: string;
  arduino?: string;
  status: string;
};

interface CardRootProps {
  children: ReactNode;
  classData: classData;
}

export default function CardRoot({ children, classData }: CardRootProps) {
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
      {message && <Mensagem message={message} duration={3} />}
      <div className="relative bg-white dark:bg-dark-200 text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
        {children}
        <div className={`gap-2 items-center hidden sm:flex`}>
          <ButtonIcon
            icon={<TiEdit size={35} color="#05AFF2" />}
            className="transform hover:scale-110"
            onClick={toggleModalEditVisibility}
          />
          <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <ButtonIcon
            icon={<BiTrash size={35} color="#FF0F00" />}
            className="transform hover:scale-110"
            onClick={toggleModalDeleteVisibility}
          />
        </div>
      </div>
      {/* Renderização de mensagens de sucesso e cancelamento */}
      {/*Edit Modal*/}
      <ModalEditClass
        open={openEdit}
        setOpen={setOpenEdit}
        setMessage={setMessage}
        classData={classData}
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
