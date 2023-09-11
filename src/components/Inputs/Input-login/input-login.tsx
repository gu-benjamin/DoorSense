'use client'

import { InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

type InputLoginProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  icon: ReactNode;
  actionIcon?: ReactNode
};

export const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  (
    { name = '', type = 'text', label, helperText = '', icon, actionIcon, ...props },
    ref
  ) => {
    
    //useId para acessebilidade
    const inputId = useId();
    //helperText é o texto que aparece ao ter um campo errado no input, hasError é a variavel usada para fazer a alternancia de cores entre certo(azul) e errado (vermelho) 
    const hasError = helperText.length > 0;

    //Front
    return (
      //Div root 
      <div
        className={`flex flex-col justify-start relative gap-5 text-start`}
      >
        {/* Icone */}
        <div className={`absolute ${hasError ? `bottom-12` : `bottom-2`}`}>{icon}</div>

           {/* Label */}
        <label
          className={twMerge(`text-base ${hasError ? `text-light-red` : `text-gray-500`} dark:${hasError ? `text-light-red` : `text-gray-400`}
                              duration-300  transform peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                              peer-focus:dark:${hasError ? `text-light-red` : `text-primary`}
                              `,props.className)}
          htmlFor={inputId}
        >
          {label}
        </label>

        {/* Campo de input */}
        <input
          type={type}
          name={name}
          ref={ref}
          className={`px-9 lg:w-80 xl:w-80 pb-2 border-b-2 ${hasError ? `border-light-red` : `border-primary-100`} 
                      bg-transparent outline-none
                      peer-focus:${hasError ? `text-light-red` : `text-primary-100`} 
                      dark:text-gray-500 dark:placeholder:${hasError ? `text-light-red` : `text-neutral-500`} 
                      dark:peer-focus:${hasError ? `text-light-red` : `text-primary-100`} text-base`}
          id={inputId}
          {...props}
        />

        {/* <div className={`absolute right-3 ${hasError ? `bottom-8` : `bottom-2`}`}> */}
          {actionIcon}  
        {/* </div> */}


        {/* Mensagem de erro */}
        {hasError && (<p className={`text-light-red font-normal italic text-sm`}>{helperText}</p>)}
        {/* <p className={`text-light-red font-normal italic text-sm`}>Nao ta indo nao boy</p> */}
        
      </div>
    );
  }
);
