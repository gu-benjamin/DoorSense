import React, { useState, useEffect } from 'react';
import { ApiData, sala } from 'types';

type Datas = {
  data: ApiData,
  setList: React.Dispatch<React.SetStateAction<ApiData>>;
}

export default function SelectFilter({ data, setList }: Datas) {
  const [filter, setFilter] = useState('numerico');

useEffect(() => {
  switch (filter) {
    case 'alfabetico':
      setList({
        ...data,
        salas: data.salas.slice().sort((a, b) => a.nome.localeCompare(b.nome))
      });
      break;
    case 'numerico':
      setList({
        ...data,
        salas: data.salas.slice().sort((a, b) => a.numero - b.numero)
      });
      break;
    case 'ativo':
      setList({
        ...data,
        salas: data.salas.filter((item) => item.status == 'Ativo')
      });
      break;
    case 'inativo':
      setList({
        ...data,
        salas: data.salas.filter((item) => item.status == null)
      });
      break;
    default:
      setList(data);
  }
}, [filter]);


  return (
    <div>
      {/* <label className="mr-4">
        <BiFilter size={24} color="" /> Filtros
      </label> */}
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border-2 flex border-primary-100 text-primary-100 bg-transparent font-semibold py-1 rounded focus:outline-none"
        >
        {/* <BiFilter size={24} color="" /> Filtros */}
          <option value="numerico">Ordem Numérica</option>
          <option value="alfabetico">Ordem Alfabética</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
          <option value="inativo">Pendente</option>
        </select>
    </div>
  );
}