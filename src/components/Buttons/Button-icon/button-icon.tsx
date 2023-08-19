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
