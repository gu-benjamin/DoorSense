import { Dialog } from '@headlessui/react';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalContentProps {
  children: ReactNode;
}

export default function ModalMainSection({ children }: ModalContentProps) {
  return (
    <div className={twMerge(`bg-secondary px-5 pb-5 pt-5 sm:p-6 sm:pb-5 flex flex-col gap-3 border-primary`)}>
        {children}
    </div>
  );
}