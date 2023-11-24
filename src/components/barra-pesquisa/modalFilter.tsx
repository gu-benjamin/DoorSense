import React, { useState } from 'react';
import { Props, Item } from './interface';
import Select from "react-select";

const options = [
  { value: "ordemAlfabetica", label: "Ordem alfabetica"},
  { value: "ordemNumerica", label: "Ordem numérica"},
  { value: "statusAtivo", label: "Ativo"},
  { value: "statusInativo", label: "Inativo"},
];

export const MultiSelect = () => {
  return (
    <>
      <Select isMulti options = {options}/>
    </>
  )
}