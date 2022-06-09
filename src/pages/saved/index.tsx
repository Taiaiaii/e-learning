import { useEffect } from 'react';

import { useCategories } from '@hooks/useCategories';
import { useTab } from '@hooks/useTab';
import { SavedCategoriesTemplate } from '@templates/Saved';


export default function SavedCategories() {
    const { savedCategories } = useCategories()
    const { setTab } = useTab();

    useEffect(() => {
      setTab('saved');
    }, []);
  
  return <SavedCategoriesTemplate categories={savedCategories} />;
}
