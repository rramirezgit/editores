import { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    window.open('/api/auth/login', '_self')
  }, [])
  return <></>
}

export default Login
