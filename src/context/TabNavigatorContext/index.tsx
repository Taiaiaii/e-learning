import { createContext, ReactNode, useState } from 'react';

export type Tabs = 'home' | 'saved' | null;
interface ITabNavigatorContextProps {
  isTabSelected: (tab: Tabs) => boolean;
  selectTab: (tab: Tabs) => void;
}

interface ITabNavigatorProviderProps {
  children: ReactNode;
}

export const TabNavigatorContext = createContext({} as ITabNavigatorContextProps);

export function TabNavigatorProvider({ children }: ITabNavigatorProviderProps) {
 
  const [tabSelected, setTabSelected] = useState<Tabs>(null);

  function isTabSelected(tab: Tabs) {
    return tabSelected === tab;
  }

  function selectTab(tab: Tabs) {
      setTabSelected(tab);  
  }

  return (
    <TabNavigatorContext.Provider value={{ isTabSelected,  selectTab }}>
      {children}
    </TabNavigatorContext.Provider>
  );
}
