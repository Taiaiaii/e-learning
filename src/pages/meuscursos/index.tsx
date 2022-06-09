import { useCategories } from '@hooks/useCategories';
import { SavedCategoriesTemplate } from '@templates/Saved';


export default function SavedCategories() {
    const { savedCategories } = useCategories()
  
  return <SavedCategoriesTemplate categories={savedCategories} />;
}
