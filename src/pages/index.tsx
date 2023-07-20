import { useEffect } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'

const App = () => {
  const { user, isLoading } = useUser()
  const router = useRouter()

  useEffect(() => {
    const redirectUser = () => {
      if (!isLoading && !user) {
        window.location.href = '/api/auth/login'
      } else if (!isLoading && user) {
        router.push('/newsletter')
      }
    }

    redirectUser()
  }, [user, isLoading, router])

  return null
}

export default App
