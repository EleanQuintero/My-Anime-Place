export const favInitialState = JSON.parse(window.localStorage.getItem('favorites')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('favorites', JSON.stringify(state))
}

export const favReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_FAVORITES': {
      const { id } = actionPayload
      const animeInFavoriteIndex = state.findIndex(item => item.id === id)

      if (animeInFavoriteIndex >= 0) {
        const newState = structuredClone(state)
        newState[animeInFavoriteIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // Anime favorito
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_FAVORITES':{
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART' : {
      updateLocalStorage([])
      return []
    }
  }
  return state
}
