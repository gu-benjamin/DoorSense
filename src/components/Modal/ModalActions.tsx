import { ReactNode } from 'react';

interface ModalActionsProps {
children: ReactNode
}

export default function ModalActions({children}: ModalActionsProps) {
  return (
    <div className="bg-secondary dark:bg-dark-200 items-end justify-end px-4 py-1 sm:flex sm:px-6">
        { children }
    </div>
  );
}
