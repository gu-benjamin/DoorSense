import { HtmlHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalContentProps extends HtmlHTMLAttributes<HTMLDivElement> {
children: ReactNode
}

export default function ModalContent({children, ...props} : ModalContentProps){
    return(
        <div className={twMerge(`flex flex-col gap-4 my-1`,props.className)}>
            {children}
        {/* <p className="text-sm text-gray-500">
                              Are you sure you want to deactivate your account? All of your data will be permanently
                              removed. This action cannot be undone.
                            </p> */}
        {/* <InputLogin icon={<IconUser size={30} color='#000' />} label={`Testeeee`} placeholder='digita ae' actionIcon={<ButtonIcon className={`absolute right-3 bottom-2`} icon={<IconClosePassword size={25} color={`#000`}/>}/>}/> */}
      </div>
    )
}