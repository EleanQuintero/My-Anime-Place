import { useRef, useState, useCallback } from 'react'
import { gettedAnimes } from '../servicios/getAnimes'

export function useAnimes ({ search }) {
  const [anime, setAnimes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search) // generamos esta referencia del valor del search

  const getAnimes = useCallback(async ({ search }) => { // al ejecutarse llama a gettedAnimes
    if (search === previousSearch.current) return // evaluamos si es igual que el search actual

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newAnimes = await gettedAnimes({ search }) // obtiene los datos del fetch
      setAnimes(newAnimes) // settea el nuevo estado de "animes" que sera el valor de newAnimes
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])
  return { anime, getAnimes, loading, error }
}
