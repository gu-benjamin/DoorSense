import { useState, useContext, createContext, ReactNode, SetStateAction } from 'react';
import { ContextValues, ContextStateValues } from 'types';

interface ValuesProviderProps {
  children: ReactNode;
}

export const ValuesContext = createContext<ContextValues>(null);


export default function ValuesProvider({ children }: ValuesProviderProps) {
  const [data, setData] = useState<ContextStateValues>({
    data: null,
    doorsenses: null
  });

  return (
    <ValuesContext.Provider value={{data, setData}}>
      {children}
    </ValuesContext.Provider>
  );
}
