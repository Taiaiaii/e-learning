import { useEffect } from 'react';

import { useCategories } from '@hooks/useCategories';
import { useTab } from '@hooks/useTab';
import { SavedCategoriesTemplate } from '@templates/Saved';

export default function SavedCategories() {
    const { visibleSavedCategories } = useCategories()
    const { selectTab } = useTab();

    useEffect(() => {
      selectTab('saved');
    }, []);
  
  return <SavedCategoriesTemplate categories={visibleSavedCategories} />;
}
