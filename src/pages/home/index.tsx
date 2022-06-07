import React, { useEffect } from 'react';

import { HomeTemplate } from '@templates/Home';
import { useCategories } from '@hooks/useCategories';
import { useTab } from '@hooks/useTab';

export default function Home() {
  
  const { allCategories } = useCategories();
  const { setTab } = useTab();

  useEffect(() => {
    setTab('home');
  }, []);

  return <HomeTemplate categorys={allCategories} />;
}
