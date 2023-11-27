import React, { useState, useEffect } from 'react';
import { BiFilter } from 'react-icons/bi';

// interface Datas {
//   data: {
//     salas: Item[];
//   };
//   setList: React.Dispatch<React.SetStateAction<Datas['data']>>;
// }

// type Datas = {
//   data: {
//     salas: Item[];
//   };
//   setList: React.Dispatch<React.SetStateAction<Item[]>>;


type Datas = {
  data: sala[],
  setList: React.Dispatch<React.SetStateAction<Object[]>>;
}

// type  =  {
//   nome: string;
//   numero: number;
//   status: 'ativo' | 'inativo';
// }

export default function SelectFilter({ data, setList }: Datas) {
  const [filter, setFilter] = useState('numerico');

//   
useEffect(() => {
  switch (filter) {
    case 'alfabetico':
      console.log('Ordering by name');
      setList({
        ...data,
        salas: data.salas.slice().sort((a, b) => a.nome.localeCompare(b.nome))
      });
      break;
    case 'numerico':
      console.log('Ordering numerically');
      setList({
        ...data,
        salas: data.salas.slice().sort((a, b) => a.numero - b.numero)
      });
      break;
    case 'ativo':
      console.log('Filtering by ativo');
      setList({
        ...data,
        salas: data.salas.filter((item) => item.status === 'ativo')
      });
      break;
    case 'inativo':
      console.log('Filtering by inativo');
      setList({
        ...data,
        salas: data.salas.filter((item) => item.status === 'inativo')
      });
      break;
    default:
      setList(data);
  }
}, [filter]);


  return (
    <div>
      {/* <BiFilter size={24} color="" /> Filtros */}
      <select
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="numerico">Ordem Numérica</option>
        <option value="alfabetico">Ordem Alfabética</option>
        <option value="ativo">Ativo</option>
        <option value="inativo">Inativo</option>
        </select>
        {/* className="ml-4 border-2 flex border-primary-100 text-primary-100 bg-transparent hover:text-white hover:bg-primary-100 font-semibold py-1 px-4 rounded" */}
    </div>
  );
}
