import { createContext, ReactNode, useEffect, useState } from 'react';

import {
  MOCKED_CATEGORY_LIST,
  MOCKED_CLASSES,
  MOCKED_SAVED_COURSES,
} from '../../../.mocks/constants';
import { ICategory, ICourse, IClasses } from '@models';

interface ICategoriesContextProps {
  classes: ICourse[] | undefined;
  visibleCategories: ICategory[];
  visibleSavedCategories: ICategory[];
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => ICourse[] | undefined;
  addCategory: (id: string) => void;
  deleteCategory: (id: string) => void;
  searchAllCategories: (value: string) => void;
  searchSavedCategories: (value: string) => void;
}

interface ICategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ICategoriesProviderProps) {
  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);
  const [visibleCategories, setVisibleCategories] = useState<ICategory[]>([]);
  const [allCategoriesClasses] = useState<IClasses[]>(MOCKED_CLASSES);
  const [savedCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);
  const [visibleSavedCategories, setVisibleSavedCategories] = useState<
    ICategory[]
  >([]);
  const [classes, setClasses] = useState<ICourse[] | undefined>([]);

  useEffect(() => {
    setVisibleCategories(allCategories);
  }, []);

  useEffect(() => {
    setVisibleSavedCategories(savedCategories);
  }, []);

  function searchAllCategories(value: string) {
    setVisibleCategories(
      allCategories.filter((category) =>
        category.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  function searchSavedCategories(value: string) {
    setVisibleSavedCategories(
      savedCategories.filter((category) =>
        category.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

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
    if (!category) return;
    setVisibleSavedCategories((prevState) => [...prevState, category]);
  }

  function deleteCategory(id: string) {
    const filteredSavedCategories = visibleSavedCategories.filter(
      (categories) => categories.id !== id
    );
    setVisibleSavedCategories(filteredSavedCategories);

  }

  return (
    <CategoriesContext.Provider
      value={{
        classes,
        getCategory,
        getCategoryClasses,
        addCategory,
        deleteCategory,
        visibleCategories,
        visibleSavedCategories,
        searchAllCategories,
        searchSavedCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
