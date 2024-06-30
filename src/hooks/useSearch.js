import { useContext, useEffect, useRef, useState } from 'react'
import { AnimeContext } from '../contexts/animes'
export function useSearch () {
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const { search } = useContext(AnimeContext)
  // Validamos la busqueda mediante el valor obtenido en el imput
  // ⬇⬇⬇⬇

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('no se puede hacer una busqueda vacia')
      return
    }

    if (search.length < 2) {
      setError('no se puede hacer una busqueda de menos de 2 caracteres ')
      return
    }

    setError(null)
  }, [search])
  return { search, error }
}
