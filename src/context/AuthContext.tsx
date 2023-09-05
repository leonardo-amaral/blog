import React, { createContext, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { api } from '../lib/axios'

interface AuthProviderProps {
  children: React.ReactNode
}

interface AuthContextProps {
  user: UserType
  login: (data: LoginProps) => void
  logout: () => void
  isAuthenticated: boolean
}

type UserType = {
  token: string
}

type LoginProps = {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useLocalStorage({
    keyName: '@blogs:token',
    defaultValue: null
  })

  const [isAuthenticated, setIsAuthenticated] = useState(
    user != 'null' ? true : false
  )

  const login = async (data: LoginProps) => {
    const response = await api.post('/sessions', data)
    setUser(response.data)

    if (response.data) {
      setIsAuthenticated(true)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated
    }),
    [user]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
