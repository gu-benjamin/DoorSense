import React, { useState } from 'react';
import { Props, Item } from './interface';

  const orderByName = (itens: Item[]): Item[] => {
    return itens.sort((a, b) => a.nome.localeCompare(b.nome));
  };
  
  // Para usar a função de ordenação:
  const itensOrderByName: Item[] = orderByName(itens);
  
  
  const orderByNumbers = (itens: Item[]): Item[] => {
    return itens.sort((a, b) => a.numero - b.numero);
  };
  
  // Para usar a função de ordenação:
  const itensOrderByNumbers: Item[] = orderByNumbers(itens);

  
  const filterStatus = (itens: Item[], status: 'ativo' | 'inativo'): Item[] => {
    return itens.filter(item => item.status === status);
  };
  
  // Para usar a função de filtragem por status ativo:
  const itensAtivos: Item[] = filterStatus(itens, 'ativo');
  
  // Para usar a função de filtragem por status inativo:
  const itensInativos: Item[] = filterStatus(itens, 'inativo');

const FiltrosModal: React.FC<Props> = ({ isOpen, onClose, orderByName, orderByNumbers, filterStatus }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Adicione suas opções de filtro aqui */}
      <div>
        <button onClick={orderByName}>Ordenar por Ordem Alfabética</button>
        <button onClick={orderByNumbers}>Ordenar por Número</button>
        <button onClick={filterStatus}>Filtrar por Status</button>
      </div>
    </Modal>
  );
};

export default FiltrosModal;
