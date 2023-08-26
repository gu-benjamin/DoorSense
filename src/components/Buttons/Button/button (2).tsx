import { ButtonHTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    btnName: string,
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({type='submit', btnName, ...props}, ref) => {
    return(
        //Button root
        <div className={`flex flex-col w-1/2 mt-4 text-white`}>
            {/*Botao*/}
            <button
            type={type}
            className={twMerge(`bg-primary p-3 rounded-lg font-extrabold`, props.className)}
            {...props}
            ref={ref}
            >
            {/*Nome do botao*/}
            {btnName}
            </button>
      </div>
    )
})

