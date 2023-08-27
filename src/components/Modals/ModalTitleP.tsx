import { Dialog } from '@headlessui/react';
import { HtmlHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalTitlePProps extends HtmlHTMLAttributes<HTMLElement> {
  title: string;
}

export default function ModalTitleP({ children, ...props }: ModalTitlePProps) {
  return (
    <Dialog.Title
      as="h1"
      className={twMerge(`text-xl font-semibold leading-6 text-gray-900`, props.className)}
    >
      {children}
    </Dialog.Title>
  );
}
