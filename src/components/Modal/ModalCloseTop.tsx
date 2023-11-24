import { ReactNode } from 'react';

interface ModalCloseTopProps {
  children: ReactNode;
}

export default function ModalCloseTop({ children }: ModalCloseTopProps) {
  return (
    <div className={`bg-secondary dark:bg-dark-200  flex flex-row-reverse p-[6px]`}>
      {children}
    </div>
  );
}
