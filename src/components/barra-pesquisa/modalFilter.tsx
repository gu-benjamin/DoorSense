import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { BiFilter } from 'react-icons/bi';
interface Datas {
  data: {
    salas: Item[];
  };
  setList: React.Dispatch<React.SetStateAction<Datas['data']>>;
}
interface Item {
  nome: string;
  numero: number;
  status: 'ativo' | 'inativo';
}

const orderByName = (itens: Item[]): Item[] => {
  return itens.sort((a, b) => a.nome.localeCompare(b.nome));
};
const orderByNumbers = (itens: Item[]): Item[] => {
  return itens.sort((a, b) => a.numero - b.numero);
};
const filterStatus = (itens: Item[], status: 'ativo' | 'inativo'): Item[] => {
  return itens.filter((item) => item.status === status);
};

export default function SelectFilter({ data, setList }: Datas) {
  const [filter, setFilter] = useState({
    type: '',
    value: ''
  });

  const options = [
    { value: 'alfabetico', label: 'Ordem Alfabética' },
    { value: 'numerico', label: 'Ordem Numérica' },
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' }
  ];

  useEffect(() => {
    if (filter.value === '') {
      setList(data);
    } else {
      switch (filter.type) {
        case 'alfabetico':
          setList({ ...data, salas: orderByName(data.salas) });
          break;
        case 'numerico':
          setList({ ...data, salas: orderByNumbers(data.salas) });
          break;
        case 'ativo':
        case 'inativo':
          setList({ ...data, salas: filterStatus(data.salas, filter.type) });
          break;
        default:
          // Lógica padrão ou tratamento de erro
          break;
      }
    }
  }, [filter]);

  return (
    <div>
      {/* <BiFilter size={24} color="" /> Filtros */}
      <Select
        options={options}
        className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded"
      />
    </div>
  );
}
