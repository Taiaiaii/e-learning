import * as React from 'react';
import type { AppProps } from 'next/app'

import '@styles/globalStyle.ts';
import { globalStyles } from '@styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
