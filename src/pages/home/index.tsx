import React from 'react';

import { HomeTemplate } from '@templates/Home';
import { useCategories } from '@hooks/useCategories';

export default function Home() {
  const {allCategories} = useCategories()
  return (
   <HomeTemplate categorys={allCategories}/>
  );
}
