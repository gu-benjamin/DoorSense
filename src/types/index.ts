import { SetStateAction } from 'react';

interface HomeUIProps {
  datas: ApiData;
  doorsenses: [] | string[];

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
  lastUpdate: string,
  sala: string | null
}

type ApiData = {
  total: number;
  salas: [] | sala[];
};

type ApiDoorsenses = {
  total: number;
  doorsenses: [] | doorsense[];
};



export type { HomeUIProps, sala, doorsense, ApiData, ApiDoorsenses };
