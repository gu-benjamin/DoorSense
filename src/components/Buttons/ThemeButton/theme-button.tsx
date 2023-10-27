'use client';

import { useState, useEffect, ButtonHTMLAttributes, forwardRef } from 'react';
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { twMerge } from 'tailwind-merge';

type ThemeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: string;
};

export const ThemeButton = forwardRef<HTMLButtonElement, ThemeButtonProps>(
  ({ type='button', ...props }, ref) => {

    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    return (
      <>
      {/*Botao*/}
        <button
          type={type}
          ref={ref}
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          {...props}
        >
          {/*Icone do botao*/}
          {resolvedTheme === 'dark' ? 
          (<SunIcon className={twMerge(`h-8 w-8`, props.className)}/>) : (<MoonIcon className={twMerge(`h-8 w-8`, props.className)}/>)
        }
        </button>
      </>
    );
  }
);