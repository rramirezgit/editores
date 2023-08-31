import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  if (router.pathname.includes('/unsubscribe')) {
    return <>{children}</>
  }

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Ocurrió un error al verificar la autenticación</p>
  }

  if (!user) {
    router.push('/api/auth/login')
    return null
  }

  return <>{children}</>
}

export default ProtectedRoute
