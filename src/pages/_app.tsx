import * as React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle';
import { TabNavigatorProvider } from '@context/TabContext';


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <TabNavigatorProvider>
      <Component {...pageProps} />
    </TabNavigatorProvider>
  );
}

export default MyApp;
