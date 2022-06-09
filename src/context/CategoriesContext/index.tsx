import { createContext, ReactNode, useState } from 'react';

import {
  MOCKED_CATEGORY_LIST,
  MOCKED_CLASSES,
  MOCKED_SAVED_COURSES,
} from '../../../.mocks/constants';
import { ICategory, ICourse, IClasses } from '@models';

interface ICategoriesContextProps {
  allCategories: ICategory[];
  savedCategories: ICategory[];
  classes: ICourse[] | undefined;
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => ICourse[] | undefined;
  addCategory: (id: string) => ICategory[];
  deleteCategory: (id: string) => ICategory[];
}

interface ICategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ICategoriesProviderProps) {
  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);
  const [allCategoriesClasses] = useState<IClasses[]>(MOCKED_CLASSES);
  const [savedCategories, setSavedCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);
  const [classes, setClasses] = useState<ICourse[] | undefined>([]);

  function getCategory(id: string) {
    return allCategories.find((category) => category.id === id);
  }

  function getCategoryClasses(id: string) {
    const category = getCategory(id);
    if (category) {
      const categorySelected = allCategoriesClasses.find(
        (item) => item.id === category.id
      );
      setClasses(categorySelected?.classes);
      return classes;
    }
  }

  function addCategory(id: string) {
    const category = getCategory(id);
    if (category) {
      setSavedCategories((prevState) => [...prevState, category]);
    }
    return savedCategories;
  }

  function deleteCategory(id: string) {
    const filteredSavedCategories = savedCategories.filter(
      (categories) => categories.id !== id
    );
    setSavedCategories(filteredSavedCategories);
    return filteredSavedCategories;
  }

  return (
    <CategoriesContext.Provider
      value={{
        allCategories,
        savedCategories,
        classes,
        getCategory,
        getCategoryClasses,
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
