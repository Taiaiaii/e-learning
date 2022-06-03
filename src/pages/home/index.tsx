import React from 'react';

import {MOCKED_CATEGORY_LIST} from '../../../.mocks/constants/MOCKED_CATEGORY_LIST'
import { HomeTemplate } from '@templates/Home';

export default function Home() {
  return (
   <HomeTemplate categorys={MOCKED_CATEGORY_LIST}/>
  );
}
