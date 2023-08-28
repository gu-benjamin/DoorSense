import { HtmlHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalIconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}

export default function ModalIcon({ icon, ...props }: ModalIconProps) {
  return (
    <div className={twMerge(`mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-primary-50`, props.className)}>
      {icon}
    </div>
  );
}
