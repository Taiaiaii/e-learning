import { createContext, ReactNode, useEffect, useState } from 'react';

import {
  MOCKED_CATEGORY_LIST,
  MOCKED_CLASSES,
  MOCKED_SAVED_CATEGORIES,
} from '../../../.mocks/constants';
import { ICategory, IClazz, IClasses } from '@models';

interface ICategoriesContextProps {
  classes: IClazz[];
  visibleCategories: ICategory[];
  visibleSavedCategories: ICategory[];
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => IClazz[];
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
  const [allCategories, setAllCategories] = useState<ICategory[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<ICategory[]>([]);
  const [allCategoriesClasses] = useState<IClasses[]>(MOCKED_CLASSES);
  const [savedCategories] = useState<ICategory[]>(MOCKED_SAVED_CATEGORIES);
  const [visibleSavedCategories, setVisibleSavedCategories] = useState<
    ICategory[]
  >([]);
  const [classes, setClasses] = useState<IClazz[]>([]);

  useEffect(() => {
    const classesIdList = MOCKED_CLASSES.map((classes) => classes.id);
    const validCategories = MOCKED_CATEGORY_LIST.filter((categories) =>
      classesIdList.includes(categories.id)
    );

    setAllCategories(validCategories);
    setVisibleCategories(validCategories);
  }, []);

  useEffect(() => {
    setVisibleSavedCategories(savedCategories);
  }, []);

  function getCategory(id: string) {
    return allCategories.find((category) => category.id === id);
  }

  function getCategoryClasses(category_id: string) {
    const categorySelected = allCategoriesClasses.find(
      (item) => item.id === category_id
    );
    const selectedClasses = categorySelected?.classes || [];
    setClasses(selectedClasses);
    return selectedClasses;
  }

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

  function addCategory(id: string) {
    const category = getCategory(id);
    if (!category) return;
   
    setVisibleSavedCategories((prevState) => [...prevState, category]);

  }

  function deleteCategory(category_id: string) {
    const filteredSavedCategories = visibleSavedCategories.filter(
      ({ id }) => category_id !== id
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
