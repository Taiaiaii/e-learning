import { createContext, ReactNode, useState } from 'react';

import { ICategory } from '@models/ICategory';
import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';
import { MOCKED_CATEGORY_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';

interface ICategoriesContextProps {
  deleteCategory: (id: string) => void;
  addSavedCategory: (id: string) => void;
  savedCategories: ICategory[];
}

interface ITapProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ITapProviderProps) {
  const [savedCategories, setSavedCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);

  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);

  function deleteCategory(id: string) {
    return setSavedCategories(
      savedCategories.filter((categories) => categories.id !== id)
    );
  }

  function getCategory(id: string) {
    return allCategories.find((category) => category.id === id);
  }

  function addSavedCategory(id: string) {
    const category = getCategory(id);
    if (category) {
      setSavedCategories((prevState)=> ([...prevState, category]))  
    }
    return savedCategories
  }

  return (
    <CategoriesContext.Provider
      value={{ deleteCategory, savedCategories, addSavedCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
