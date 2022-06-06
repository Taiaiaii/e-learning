import { createContext, ReactNode, useState } from 'react';

import { ICategory } from '@models/ICategory';
import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';

interface ICategoriesContextProps {
  deleteCategory: (id: string) => void;
  currentCategories: ICategory[]
}

interface ITapProviderProps {
  children: ReactNode;
}
export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ITapProviderProps) {
  const [currentCategories, setCurrentCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);

  function deleteCategory(id: string) {
    return setCurrentCategories(
      currentCategories.filter((categories) => categories.id !== id)
    );
  }

  return (
    <CategoriesContext.Provider value={{ deleteCategory, currentCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
}
