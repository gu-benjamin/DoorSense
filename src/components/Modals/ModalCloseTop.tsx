import { ButtonIcon } from './../Buttons/Button-icon/button-icon';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

interface ModalCloseTopProps {
    children: ReactNode
}

export default function ModalCloseTop({children} : ModalCloseTopProps){
    return(
    <div className={`bg-primary flex flex-row-reverse p-[6px]`}>
        {children}
    </div>

    )
}