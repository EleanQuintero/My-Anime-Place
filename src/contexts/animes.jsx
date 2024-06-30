import { createContext, useState } from 'react'

export const AnimeContext = createContext()

export function AnimeProvider ({ children }) {
  const [search, newSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [anime, setAnimes] = useState([])
  return (
    <AnimeContext.Provider value={{
      search,
      newSearch,
      loading,
      setLoading,
      anime,
      setAnimes
    }}
    >
      {children}
    </AnimeContext.Provider>
  )
}
