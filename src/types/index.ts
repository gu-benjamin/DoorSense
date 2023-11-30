import { SetStateAction } from 'react';

interface HomeUIProps {
  datas: ApiData;
  doorsenses: string[];
  hasAuthorization: boolean;
};

type sala = {
  id: string;
  nome: string;
  numero: string;
  arduino: string;
  status: string;
};

type doorsense = {
  id: string,
  uniqueId: string,
  status: string,
  lastUpdate: string
}

type ApiData = {
  total: number;
  salas: sala[];
};



export type { HomeUIProps, sala, doorsense, ApiData };
