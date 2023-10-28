'use client'

import React, { useState, ReactNode, SetStateAction, useEffect } from 'react';
import { TiEdit } from 'react-icons/ti';
import { BiTrash } from 'react-icons/bi';
import { ButtonIcon } from 'components/Buttons/Button-icon/button-icon';
import { Modal } from 'components/Modal';
import { MdOutlineClose } from 'react-icons/md';
import { TbHomeEdit } from 'react-icons/tb';
import { InputLogin } from 'components/Inputs/Input-login';
import ModalDeleteClass from './../Dashboard/ClassModals/deletar-sala';
import ModalEditClass from './../Dashboard/ClassModals/editar-sala';


type classData ={
  id: string,
  nome: string,
  numero?: string, 
  arduino?: string, 
  status: string 
}

interface CardRootProps {
  children: ReactNode,
  classData: classData
}

export default function CardRoot({ children, classData }: CardRootProps) {
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  // const [message, setMessage] = useState<string | null>();
  // const [Segundos, setSegundos] = useState(0);

  // Função para iniciar a contagem regressiva
  // useEffect(() => {
  //   if (message) {
  //     const timer = setInterval(() => {
  //       setSegundos((prevSeconds) => {
  //         if (prevSeconds > 0) {
  //           return prevSeconds - 0.01; // Update the progress bar more frequently
  //         }
  //         return prevSeconds;
  //       });
  //     }, 10);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }
  // }, [message]);

   // Função visibilidade da modal
   function toggleModalEditVisibility() {
    setOpenEdit((prevState) => !prevState);
  }
   // Função visibilidade da modal
   function toggleModalDeleteVisibility() {
    setOpenDelete((prevState) => !prevState);
  }

  
  // function Delete() {
  //   setOpenDelete(false);
  //   setMessage('Sala Removida com Sucesso');
  //   setTimeout(() => setMessage(null), 3000);
  //   setSegundos(3);
  // }
  //   function Editar() {
  //   setOpenEdit(false);
  //   setMessage('Sala Editada com Sucesso');
  //   setTimeout(() => setMessage(null), 3000);
  //   setSegundos(3);
  // }

  // const progressBarStyle = {
  //   width: `${(3 - Segundos) * 33.33}%`, // Aumenta a largura em 20% a cada segundo
  // };

  return (
    <>
    {/* Renderização da mensagem com a barra de progresso */}
    {/* {message && (
        <div className="bg-primary-100 p-3 rounded justify-self-center text-white relative">
          {message} ({})
          <div className=" h-1 absolute bottom-1 left-0 right-0">
            <div className="bg-white h-full" style={progressBarStyle}></div>
          </div>
        </div>
      )} */}

      <div className="relative bg-white dark:bg-dark-200 text-xs sm:text-sm p-4 rounded-md flex items-center justify-around">
        {children}
        <div className={`gap-2 items-center hidden sm:flex`}>
          <ButtonIcon icon={<TiEdit size={35} color="#05AFF2"/>} className="transform hover:scale-110" onClick={toggleModalEditVisibility} />
          <div className="w-px h-7 bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
          <ButtonIcon icon={<BiTrash size={35} color="#FF0F00" />} className="transform hover:scale-110" onClick={toggleModalDeleteVisibility}/>
        </div>
      </div>
      {/* Renderização de mensagens de sucesso e cancelamento */}
      {/*Edit Modal*/}
      <ModalEditClass open={openEdit} setOpen={setOpenEdit} classData={classData} />

      {/* Delete Modal */}
      <ModalDeleteClass open={openDelete} setOpen={setOpenDelete} id={parseInt(classData.id)} />
    </>
  );
}
