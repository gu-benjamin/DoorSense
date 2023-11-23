import React, { useState } from 'react';
import { Props, Item } from './interface';


const filterSelect: React.FC<Props> = () => {
  const [mostrarSelect, setMostrarSelect] = useState(false);

  const toggleSelect = () => {
    setMostrarSelect(!mostrarSelect);
  };

  return (
    <div>
      {/* Adicione suas opções de filtro aqui */}
      <div>
        {/* <button onClick={orderByName}>Ordenar por Ordem Alfabética</button>
        <button onClick={orderByNumbers}>Ordenar por Número</button>
        <button onClick={filterStatus}>Filtrar por Status</button> */}
        {mostrarSelect && (
        <select
          className="ml-4 border-2 border-primary-100 text-primary-100 bg-white font-semibold py-1 px-4 rounded"
          onChange={(e) => {
            // Lógica para lidar com a seleção do select, se necessário
            console.log('Seleção:', e.target.value);
          }}
        >
          {/* Opções do select */}
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>
      )}
      </div>
    </div>
  );
};

export default filterSelect;
