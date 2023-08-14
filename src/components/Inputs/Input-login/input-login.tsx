import {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId
} from 'react';

type InputLoginProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    icon: ReactNode
};

export const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(
  ({ name = '', type = 'text', label, helperText = '', icon, ...props }, ref) => {
    const inputId = useId();
    const hasError = helperText.length > 0;

    return (
      <div
        className="flex flex-col justify-start gap-4 w-1/2 relative mb-4"
        data-te-input-wrapper-init
      >
        <div className="absolute">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          ref={ref}
          className={`peer block min-h-[auto] w-full pl-10 border-b-2 ${hasError ? `border-light-red` : `border-primary` } bg-transparent py-[0.32rem] leading-[1.6]
                    outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${hasError && `border-light-red`}
                     data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200
                     [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
          id={inputId}
          {...props}
        />
        <label
          className={`flex pointer-events-none pl-10 absolute left-0 top-0 mb-0 origin-[0_0] truncate pt-[0.37rem]
                      leading-[1.6] ${hasError ? `text-light-red` : `text-neutral-500` } transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] 
                      peer-focus:scale-[0.8] peer-focus:${hasError ? `text-light-red` : `text-neutral-500` } peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
                      peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:${hasError ? `text-light-red` : `text-neutral-200` } dark:peer-focus:${hasError ? `text-light-red` : `text-primary` }`}
          htmlFor={inputId}
        >
          {label}
        </label>

        {hasError && <p className={`text-light-red font-normal italic text-sm`}>{helperText}</p>}
      </div>
    );
  }
);
