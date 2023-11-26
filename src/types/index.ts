import { SetStateAction } from 'react';

type Datas = {
  datas: ApiData;
  doorsenses: string[];
};

type sala = {
  id: string;
  nome: string;
  numero: string;
  arduino: string;
  status: string;
};

type ApiData = {
  total: number;
  salas: sala[];
};

type ContextValues =  null | {
  data: ContextStateValues;
  setData: React.Dispatch<SetStateAction<ContextStateValues>>
}

type ContextStateValues = null | {
  data: null | ApiData;
  doorsenses: null | string[];
}

export type {Datas, sala, ApiData, ContextValues, ContextStateValues};
