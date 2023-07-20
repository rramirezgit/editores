import { store } from '@/store'
import Theme from '@/styles/GlobalMui'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import ProtectedRoute from '@/components/common/ProtectedRoutes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Provider store={store}>
        <UserProvider>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </UserProvider>
      </Provider>
    </Theme>
  )
}
