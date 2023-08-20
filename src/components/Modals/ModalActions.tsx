import { ReactNode } from 'react';

interface ModalActionsProps {
children: ReactNode
}

export default function ModalActions({children}: ModalActionsProps) {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        { children }
    </div>
  );
}
