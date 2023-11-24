import React, { useState, useEffect } from 'react';
import { Props, Item } from './interface';
import Select from "react-select";
import { BiChevronDown, BiFilter } from 'react-icons/bi';

type Datas = {
  data: Object[],
  setList: React.Dispatch<SetStateAction<Object[]>>;
}

const orderByName = (itens: Item[]): Item[] => {
  return itens.sort((a, b) => a.nome.localeCompare(b.nome));
};

//  Para usar a função de ordenação:
const itensOrderByName: Item[] = orderByName();

const orderByNumbers = (itens: Item[]): Item[] => {
  return itens.sort((a, b) => a.numero - b.numero);
};

//  Para usar a função de ordenação:
const itensOrderByNumbers: Item[] = orderByNumbers();

const filterStatus = (itens: Item[], status: 'ativo' | 'inativo'): Item[] => {
  return itens.filter((item) => item.status === status);
};

//  Para usar a função de filtragem por status ativo:
const itensAtivos: Item[] = filterStatus(itens, 'ativo');

//  Para usar a função de filtragem por status inativo:
const itensInativos: Item[] = filterStatus(itens, 'inativo')

const options = [
  {value: itensOrderByName, label: "Ordem Alfabética"},
  {value: itensOrderByNumbers, label: "Ordem Numérica"},
  {value: itensAtivos, label: "Ativo"},
  {value: itensInativos, label: "Inativo"},
];

export default function SelectFilter({data, setList}: Datas) {
  const [filter, setFilter] = useState('');

    useEffect(() => {
      if (filter === '') {
        setList(data);
      } else {
        setList({...data, salas: data.salas.filter((itens) => ) }
        );
      }
    }, [filter]);
  
  return (
    <div className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded">
        <BiFilter size={24} color="" /> Filtros
        <BiChevronDown size = {20} className="ml-3"/>
          <Select options={options}/>
      </div>
    )
  }
