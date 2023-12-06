import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from 'tailwind-merge';

interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
btnName: string | ReactNode
}

export default function ModalAction({btnName, ...props}: ModalActionProps) {
  return (
    <>
      <button
        type="button"
        className={twMerge(`botao-primary-modal `, props.className)}
        {...props}
      >
        {btnName}
      </button>
    </>
  );
}
