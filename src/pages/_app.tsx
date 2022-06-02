import * as React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle';
import { TabProvider } from '@context/TabContext';


function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <TabProvider>
      <Component {...pageProps} />
    </TabProvider>
  );
}

export default MyApp;
