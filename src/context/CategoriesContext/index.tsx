import { createContext, ReactNode, useState } from 'react';

import { MOCKED_CATEGORY_LIST, MOCKED_CLASSES, MOCKED_SAVED_COURSES } from '../../../.mocks/constants'
import { ICategory, ICourse, IClasses } from '@models'

interface ICategoriesContextProps {
  allCategories: ICategory[];
  currentSavedCategories: ICategory[];
  currentClasses: ICourse[] | undefined;
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => ICourse[] | undefined;
  addSavedCategory: (id: string) => ICategory[];
  deleteCategory: (id: string) => ICategory[];
}

interface ICategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ICategoriesProviderProps) {

  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);
  const [allCategoriesClasses] = useState<IClasses[]>(MOCKED_CLASSES);
  const [savedCategories, setSavedCategories] = useState<ICategory[]>(MOCKED_SAVED_COURSES);
  const [currentClasses, setCurrentClasses] = useState<ICourse[] | undefined>([]);

  function getCategory(id: string) {
    return allCategories.find((category) => category.id === id);
  }

  function getCategoryClasses(id: string){
    const category = getCategory(id)
    if(category) {
      const classes = allCategoriesClasses.find(
        (item) => item.id === category.id
      )
      setCurrentClasses(classes?.classes)
          return currentClasses
    }   
  }

  function addSavedCategory(id: string) {
    const category = getCategory(id);
    if (category) {
      savedCategories.splice(0,0,category);
      setSavedCategories(savedCategories)
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
        allCategories,
        currentSavedCategories: savedCategories,
        currentClasses,
        getCategory,
        getCategoryClasses,
        addSavedCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
