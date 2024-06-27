import { AddToFavorite, RemoveFromFavorites } from '../Icons/Icons'
import '../FavoritesSection/Favorites.css'
import { useFavorites } from '../../hooks/useFavorites'
import { FavItem } from './FavItem'

export function Favorites () {
  const { favorites, clearFavorites, favoritesCheckId } = useFavorites()

  return (
    <>
      <label className='fav-button' htmlFor={favoritesCheckId}>
        <AddToFavorite />
      </label>
      <input className='check-input' id={favoritesCheckId} type='checkbox' hidden />

      <aside className='fav-section'>
        <ul>
        <h1 className='text-lg mb-5'>My favorite list: </h1>
          {favorites.map(anime => (
            <FavItem key={anime.id} {...anime} />
          ))}
        </ul>

        <button className='remove-fav-button mt-6' onClick={clearFavorites}>
          <RemoveFromFavorites />
        </button>

      </aside>
    </>
  )
}
