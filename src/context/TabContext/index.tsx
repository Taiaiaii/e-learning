import { createContext, ReactNode, useState } from 'react';

export type Tabs = 'home' | 'saved';
interface ITabContextProps {
  isSelected:(tab: Tabs) => boolean;
  setTab: (tab: Tabs) => void;
}

interface ITapProviderProps {
  children: ReactNode;
}

export const TabNavigatorContext = createContext({} as ITabContextProps);

export function TabNavigatorProvider({ children }: ITapProviderProps) {
 
  const [tabSelected, setTabSelected] = useState<Tabs>('home');

  function isTabSelected(tab: Tabs) {
    return tabSelected === tab;
  }

  function selectTab(tab: Tabs) {
      setTabSelected(tab);  
  }

  return (
    <TabNavigatorContext.Provider value={{ isSelected: isTabSelected, setTab: selectTab }}>
      {children}
    </TabNavigatorContext.Provider>
  );
}
