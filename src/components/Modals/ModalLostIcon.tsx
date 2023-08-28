import { HtmlHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconLostProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}

export default function ModalLostIcon({ icon, ...props }: IconLostProps) {
  return (
    <div className={twMerge(`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100`, props.className)}>
      {icon}
    </div>
  );
}