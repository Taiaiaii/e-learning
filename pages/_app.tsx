import '../styles/globalStyle.ts'
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
