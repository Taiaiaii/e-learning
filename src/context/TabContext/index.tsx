import { createContext, ReactNode, useState } from 'react';
export type Tabs = 'home' | 'saved' | null;
interface ITabContextProps {
  isSelected:(tab: Tabs) => boolean;
  setTab: (tab: Tabs) => void;
}

interface ITapProviderProps {
  children: ReactNode;
}
export const TabContext = createContext({} as ITabContextProps);

export function TabProvider({ children }: ITapProviderProps) {
 
  const [tabSelected, setTabSelected] = useState<Tabs>(null);

  function isSelected(tab: Tabs) {
    return tabSelected === tab;
  }

  function setTab(tab: Tabs) {
      setTabSelected(tab);  
  }

  return (
    <TabContext.Provider value={{ isSelected, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
