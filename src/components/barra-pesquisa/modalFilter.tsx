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


export default function SelectFilter({ data, setList }: Datas) {
  const [filter, setFilter] = useState({
    type: '',
    value: ''
  });
  
  const orderByName = (itens: Item[]): Item[] => {
    return itens.sort((a, b) => a.nome.localeCompare(b.nome));
  };
  const orderByNumbers = (itens: Item[]): Item[] => {
    return itens.sort((a, b) => a.numero - b.numero);
  };
  const filterStatus = (itens: Item[], status: 'ativo' | 'inativo'): Item[] => {
    return itens.filter((item) => item.status === status);
  };

  const options = [
    { value: 'alfabetico', label: 'Ordem Alfabética' },
    { value: 'numerico', label: 'Ordem Numérica' },
    { value: 'ativo', label: 'Ativo' },
    { value: 'inativo', label: 'Inativo' }
  ];

useEffect(() => {
  console.log('Filter:', filter);
  console.log('SetList type:', typeof setList);
  
  if (filter.value === '') {
    if (typeof setList === 'function') {
      console.log('Setting list:', data);
      setList(data);
    }
  } else {
    switch (filter.type) {
      case 'alfabetico':
        console.log('Ordering by name');
        setList((prevData) => ({ ...prevData, salas: orderByName(prevData.salas) }));
        break;
      case 'numerico':
        console.log('Ordering by number');
        setList((prevData) => ({ ...prevData, salas: orderByNumbers(prevData.salas) }));
        break;
      case 'ativo':
      case 'inativo':
        console.log('Filtering by status:', filter.type);
        setList((prevData) => ({ ...prevData, salas: filterStatus(prevData.salas, filter.type) }));
        break;
      default:
        console.log('Default case');
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
