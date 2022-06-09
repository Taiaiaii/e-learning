import * as React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle';
import { CategoriesProvider } from '@context/CategoriesContext';
import { TabNavigatorProvider } from '@context/TabContext';


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <CategoriesProvider>
      <TabNavigatorProvider>
        <Component {...pageProps} />
      </TabNavigatorProvider>
    </CategoriesProvider>
  );
}

export default MyApp;
