import { HtmlHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
children: ReactNode
}

export default function ModalContent({children, ...props} : ModalContentProps){
    return(
        <div className={twMerge(`flex flex-col gap-4 my-1 items-center justify-center`,props.className)}>
            {children}
        </div>
    )
}