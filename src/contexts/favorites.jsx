import { createContext, useId, useReducer } from 'react'

import { favReducer, favInitialState } from '../reducer/favorites'
export const FavContext = createContext()

export function useFavReducer () {
  const [state, dispatch] = useReducer(favReducer, favInitialState)

  const addToFavorites = anime => dispatch({
    type: 'ADD_TO_FAVORITES',
    payload: anime
  })

  const removeFromFavorites = anime => dispatch({
    type: 'REMOVE_FROM_FAVORITES',
    payload: anime
  })

  const clearFavorites = () => dispatch({ type: 'CLEAR_CART' })

  return { state, addToFavorites, removeFromFavorites, clearFavorites }
}

export function FavProvider ({ children }) {
  const favoritesCheckId = useId()
  const { state, addToFavorites, removeFromFavorites, clearFavorites } = useFavReducer()

  return (
    <FavContext.Provider value={{
      favorites: state,
      addToFavorites,
      removeFromFavorites,
      clearFavorites,
      favoritesCheckId
    }}
    >
      {children}
    </FavContext.Provider>
  )
}
