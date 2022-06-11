import React, { useEffect } from 'react';

import { HomeTemplate } from '@templates/Home';
import { useCategories } from '@hooks/useCategories';
import { useTab } from '@hooks/useTab';

export default function Home() {
  
  const { visibleCategories } = useCategories();
  const { selectTab } = useTab();

  useEffect(() => {
    selectTab('home');
  }, []);

  return <HomeTemplate categorys={visibleCategories} />;
}
