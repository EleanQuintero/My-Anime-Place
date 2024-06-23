import { useContext } from 'react'
import { FavContext } from '../contexts/favorites.jsx'

// ⬇ Creamos el Custom Hook para utilizar el contexto ⬇

export const useFavorites = () => {
  const context = useContext(FavContext)

  if (context === undefined) {
    throw new Error('useFavorites debe ser usado con un FavProvider')
  }

  return context
}
