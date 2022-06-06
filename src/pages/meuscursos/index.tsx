import { useCategories } from '@hooks/useCategories';
import { SavedCategoriesTemplate } from '@templates/Saved';


export default function SavedCategories() {
    const { currentCategories } = useCategories()
  return <SavedCategoriesTemplate categories={currentCategories} />;
}
