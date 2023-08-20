import { ButtonHTMLAttributes } from "react";
import { twMerge } from 'tailwind-merge';

interface ModalActionProps extends ButtonHTMLAttributes<HTMLButtonElement>{
btnName: string
}

export default function ModalAction({btnName, ...props}: ModalActionProps) {
  return (
    <>
      <button
        type="button"
        className={twMerge(`botao-teste2`, props.className)}
        {...props}
      >
        {btnName}
      </button>
    </>
  );
}
