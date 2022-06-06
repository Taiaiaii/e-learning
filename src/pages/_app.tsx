import * as React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle';
import { TabProvider } from '@context/TabContext';
import { CategoriesProvider } from '@context/CategoriesContext';


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <CategoriesProvider>
      <TabProvider>
        <Component {...pageProps} />
      </TabProvider>
    </CategoriesProvider>
  );
}

export default MyApp;
