import { createContext, ReactNode, useState } from 'react';

import { ICategory } from '@models/ICategory';
import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';
import { MOCKED_CATEGORY_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';

interface ICategoriesContextProps {
  deleteCategory: (id: string) => ICategory[];
  addSavedCategory: (id: string) => ICategory[];
  getCategory: (id:string) => ICategory | undefined
  currentSavedCategories: ICategory[];
  allCategories: ICategory[];
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
    setSavedCurrentCategories(
      currentSavedCategories.filter((categories) => categories.id !== id)
    );
    return currentSavedCategories
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
      value={{ deleteCategory, currentSavedCategories, addSavedCategory, allCategories, getCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
