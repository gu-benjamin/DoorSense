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
        className={`flex flex-col justify-start gap-4 relative mb-4`}
        data-te-input-wrapper-init
      >
        {/* Icone */}
        <div className={`absolute`}>{icon}</div>

        <div className={`relative`}>
                  {/* Campo de input */}
        <input
          type={type}
          name={name}
          ref={ref}
          className={`peer block min-h-[auto] px-10 w-full border-b-2 ${hasError ? `border-light-red` : `border-primary`} 
                      bg-transparent py-[0.35rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                      peer-focus:${hasError ? `text-light-red` : `text-primary`} data-[te-input-state-active]:placeholder:opacity-100 
                      motion-reduce:transition-none dark:text-gray-500 dark:placeholder:${hasError ? `text-light-red` : `text-neutral-200`} 
                      dark:peer-focus:${hasError ? `text-light-red` : `text-primary`} [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id={inputId}
          {...props}
        />

        {/* Label animada */}
        <label
          className={twMerge(`absolute left-9 text-sm ${hasError ? `text-light-red` : `text-gray-500`} dark:${hasError ? `text-light-red` : `text-gray-400`}
                              duration-300 transform peer-focus:-translate-y-6 top-1 -z-10 origin-[0] peer-focus:left-7 
                              peer-focus:${hasError ? `text-light-red` : `text-primary`} peer-focus:dark:${hasError ? `text-light-red` : `text-primary`} 
                              peer-placeholder-shown:scale-100 peer-focus:scale-75`,props.className)}
          htmlFor={inputId}
        >
          {label}
        </label>

        <div className={`absolute right-0 bottom-5`}>
          {actionIcon}  
        </div>
        </div>



        {/* Mensagem de erro */}
        {hasError && (<p className={`text-light-red font-normal italic text-sm`}>{helperText}</p>)}
        
      </div>
    );
  }
);
