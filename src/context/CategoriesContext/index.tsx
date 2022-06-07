import { createContext, ReactNode, useState } from 'react';

import { MOCKED_SAVED_COURSES } from '../../../.mocks/constants/MOCKED_SAVED_COURSES';
import { MOCKED_CATEGORY_LIST } from '../../../.mocks/constants/MOCKED_CATEGORY_LIST';
import { MOCKED_CLASSES } from '../../../.mocks/constants/MOCKED_CLASSES';
import { ICategory } from '@models/ICategory';
import { ICourse } from '@models/ICourse';
import { IClasses } from '@models/IClasses';

interface ICategoriesContextProps {
  deleteCategory: (id: string) => ICategory[];
  addSavedCategory: (id: string) => ICategory[];
  getCategory: (id: string) => ICategory | undefined;
  getCategoryClasses: (id: string) => ICourse[] | undefined;
  currentSavedCategories: ICategory[];
  allCategories: ICategory[];
  currentClasses: ICourse[] | undefined;
}

interface ITapProviderProps {
  children: ReactNode;
}

export const CategoriesContext = createContext({} as ICategoriesContextProps);

export function CategoriesProvider({ children }: ITapProviderProps) {
  const [currentSavedCategories, setSavedCurrentCategories] =
    useState<ICategory[]>(MOCKED_SAVED_COURSES);

  const [allCategories] = useState<ICategory[]>(MOCKED_CATEGORY_LIST);
  const [allCategoriesClasses] = useState<IClasses[]>(MOCKED_CLASSES);
  const [currentClasses, setCurrentClasses] = useState<ICourse[] | undefined>([])

  function deleteCategory(id: string) {
    setSavedCurrentCategories(
      currentSavedCategories.filter((categories) => categories.id !== id)
    );
    return currentSavedCategories
  }

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
      currentSavedCategories.splice(0,0,category);
      setSavedCurrentCategories(currentSavedCategories)
    }
    return currentSavedCategories;
  }

  return (
    <CategoriesContext.Provider
      value={{
        deleteCategory,
        currentSavedCategories,
        addSavedCategory,
        allCategories,
        getCategory,
        getCategoryClasses,
        currentClasses,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
