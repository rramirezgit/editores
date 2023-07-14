import { store } from '@/store'
import Theme from '@/styles/GlobalMui'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Theme>
  )
}
