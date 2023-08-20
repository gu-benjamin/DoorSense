'use client'

import Image from 'next/image';
import IconUser from './../../../components/Icons/icon-user';
import { Modal }  from './../../../components/Modals/index';
import { InputLogin } from './../../../components/Inputs/Input-login/input-login';

export default function HomePage() {

  return (
    <main className={`w-full h-full flex justify-center items-center`}>

     {/* Modal */}
     <Modal.Root>
      <Modal.CloseTop/>
      <Modal.MainSection>
       <Modal.Icon icon={<IconUser size={30} color={`#000`}/>}/> 
       <Modal.Title title={`Teste`}/>
       <Modal.Content>
        <InputLogin icon={<IconUser size={30} color={`#000`}/>} placeholder='testeeeeee' label='Testee'/>
       </Modal.Content>
      </Modal.MainSection>
      <Modal.Actions>
        <Modal.Action btnName='Clica ae'/>
      </Modal.Actions>
     </Modal.Root>
    </main>
  );
}

