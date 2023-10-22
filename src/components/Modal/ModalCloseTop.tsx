import { ReactNode } from 'react';

interface ModalCloseTopProps {
  children: ReactNode;
}

export default function ModalCloseTop({ children }: ModalCloseTopProps) {
  return (
    <div className={`bg-secondary flex flex-row-reverse p-[6px]`}>
      {children}
    </div>
  );
}
