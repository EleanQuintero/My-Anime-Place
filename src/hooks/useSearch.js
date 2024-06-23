import { useEffect, useRef, useState } from 'react'
export function useSearch () {
  const [search, newSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

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
  return { search, newSearch, error }
}
