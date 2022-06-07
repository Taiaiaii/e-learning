import * as React from 'react';
import type { AppProps } from 'next/app';

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle';
import { AppProvider } from '@context/index';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
