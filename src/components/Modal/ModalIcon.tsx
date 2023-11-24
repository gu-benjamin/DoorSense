import { HtmlHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ModalIconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}

export default function ModalIcon({ icon, ...props }: ModalIconProps) {
  return (
    <div className={twMerge(`mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 dark:bg-cyan-950 `, props.className)}>
      {icon}
    </div>
  );
}
