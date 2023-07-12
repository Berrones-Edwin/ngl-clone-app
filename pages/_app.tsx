import UserContextProvider from '@/context/UserContextProvider'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  </>
}