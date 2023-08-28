import { ReactNode } from 'react';

interface ModalActionsProps {
children: ReactNode
}

export default function ModalActions({children}: ModalActionsProps) {
  return (
    <div className="bg-secondary items-center justify-center px-4 py-3 sm:flex sm:px-6">
        { children }
    </div>
  );
}
