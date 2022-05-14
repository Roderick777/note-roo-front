import { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

export const useSession = () => {
  const [session, setSession] = useState<boolean>(false)
  const [userData, setUserData] = useState<any>({})

  const validateToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      const tokenData = jwtDecode<any>(token)
      console.log('token', tokenData)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setSession(true)
      setUserData(JSON.parse(token))
    }
  }, [])

  return { session, setSession, userData, setUserData }
}
