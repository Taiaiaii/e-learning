import { createContext, ReactNode, useEffect, useState } from 'react';

import {
  MOCKED_CATEGORY_LIST,
  MOCKED_CLASSES,
  MOCKED_SAVED_COURSES,
} from '../../../.mocks/constants';
import { ICategory, ICourse, IClasses } from '@models';

interface ICategoriesContextProps {
  currentClasses: ICourse[] | undefined;
  visibleCategories: ICategory[];
  visibleSavedCategories: ICategory[];
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => ICourse[] | undefined;
  addCategory: (id: string) => ICategory[];
  deleteCategory: (id: string) => ICategory[];
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
  const [savedCategories, setSavedCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);
  const [visibleSavedCategories, setVisibleSavedCategories] = useState<
    ICategory[]
  >([]);
  const [currentClasses, setCurrentClasses] = useState<ICourse[] | undefined>(
    []
  );

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
      const classes = allCategoriesClasses.find(
        (item) => item.id === category.id
      );
      setCurrentClasses(classes?.classes);
      return currentClasses;
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
    setSavedCategories(
      savedCategories.filter((categories) => categories.id !== id)
    );
    return savedCategories;
  }

  return (
    <CategoriesContext.Provider
      value={{
        currentClasses,
        getCategory,
        getCategoryClasses,
        addCategory,
        deleteCategory,
        visibleCategories,
        visibleSavedCategories,
        searchAllCategories,
        searchSavedCategories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
