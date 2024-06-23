import { createContext, useState } from 'react'
export const LoginContext = createContext()

export function LoginProvider ({ children }) {
  const initialLogedValue = false
  const initalState = {}
  const [initialLoginData, setInitialLoginData] = useState(initalState)
  const [isloged, setIsLogded] = useState(initialLogedValue)
  const [error, setError] = useState(null)
  const [avatar, setAvatar] = useState('')

  return (
    <LoginContext.Provider value={{
      initialLoginData,
      setInitialLoginData,
      isloged,
      setIsLogded,
      error,
      setError,
      avatar,
      setAvatar,
      initalState

    }}
    >
      {children}
    </LoginContext.Provider>
  )
}
