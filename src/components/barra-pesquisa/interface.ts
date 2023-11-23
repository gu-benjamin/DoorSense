export interface Props {
  isOpen: boolean;
  onClose: () => void;
  orderByName: () => void;
  orderByNumbers: () => void;
  filterStatus: () => void;
}

export interface Item {
    id: number;
    nome: string;
    numero: number;
    status: 'ativo' | 'inativo';
}

