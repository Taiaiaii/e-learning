import { ReactNode } from 'react';

import { CategoriesProvider } from './CategoriesContext';
import { TabNavigatorProvider } from './TabNavigatorContext';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <CategoriesProvider>
    <TabNavigatorProvider>{children}</TabNavigatorProvider>
  </CategoriesProvider>
);
