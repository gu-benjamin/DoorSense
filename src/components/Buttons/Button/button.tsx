import { ButtonHTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    btnName: string,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({type='submit', btnName, ...props}, ref) => {
    return(
        //Button root
        <>
            {/*Botao*/}
            <button
            type={type}
            className={twMerge(`hover:scale-110`, props.className)}
            {...props}
            ref={ref}
            >
            {/*Nome do botao*/}
            {btnName}
            </button>
      </>
    )
})

