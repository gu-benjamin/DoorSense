import { ReactNode } from 'react';

interface ModalActionsProps {
children: ReactNode
}

export default function ModalActions({children}: ModalActionsProps) {
  return (
    <div className="bg-secondary items-end justify-end px-4 py-1 sm:flex sm:px-6">
        { children }
    </div>
  );
}
