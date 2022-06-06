import { useContext } from 'react';
import { CategoriesContext } from 'src/context/CategoriesContext';

export const useCategories = () => useContext(CategoriesContext);
