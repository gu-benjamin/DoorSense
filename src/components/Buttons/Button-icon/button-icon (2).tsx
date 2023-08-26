import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonIconProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
  icon: ReactNode;
};

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ type='button', icon, ...props }, ref) => {
    return (
      <>
      {/*Botao*/}
        <button
          className={`absolute inset-y-0 right-0 flex items-center px-4 text-gray-600`}
          type={type}
          ref={ref}
          {...props}
        >
          {/*Icone do botao*/}
          {icon}
        </button>
      </>
    );
  }
);
