import { useCategories } from '@hooks/useCategories';
import { SavedCategoriesTemplate } from '@templates/Saved';


export default function SavedCategories() {
    const { currentSavedCategories } = useCategories()
  
  return <SavedCategoriesTemplate categories={currentSavedCategories} />;
}
