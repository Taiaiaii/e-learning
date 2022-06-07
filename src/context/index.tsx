import { ReactNode } from 'react';

import { CategoriesProvider } from './CategoriesContext';
import { TabProvider } from './TabContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <CategoriesProvider>
    <TabProvider>{children}</TabProvider>
  </CategoriesProvider>
);
