import { ButtonIcon } from '../Buttons/Button-icon/button-icon';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface ModalCloseTopProps {
    children: ReactNode
}

export default function ModalCloseTop({children} : ModalCloseTopProps){
    return(
    <div className={`bg-gray-50 flex flex-row-reverse p-[2px] mr-1`}>
        {children}        
    </div>
    )
}