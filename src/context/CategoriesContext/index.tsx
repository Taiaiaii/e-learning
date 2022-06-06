import { createContext, ReactNode, useState } from 'react';

import { ICategory } from '@models/ICategory';
import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';
import { MOCKED_CATEGORY_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';

interface ICategoriesContextProps {
  deleteCategory: (id: string) => void;
  addSavedCategory: (id: string) => void;
  currentSavedCategories: ICategory[];
}

interface ITapProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ITapProviderProps) {
  const [currentSavedCategories, setSavedCurrentCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);

  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);

  function deleteCategory(id: string) {
    return setSavedCurrentCategories(
      currentSavedCategories.filter((categories) => categories.id !== id)
    );
  }

  function getCategory(id: string) {
    return allCategories.find((category) => category.id === id);
  }

  function addSavedCategory(id: string) {
    const category = getCategory(id);
    if (category) {
      currentSavedCategories.splice(0,0,category);
      setSavedCurrentCategories(currentSavedCategories)
    }
    return currentSavedCategories;
  }

  return (
    <CategoriesContext.Provider
      value={{ deleteCategory, currentSavedCategories, addSavedCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
