import { AddToFavorite, RemoveFromFavorites } from './Icons'
import './Favorites.css'
import { useFavorites } from '../hooks/useFavorites'

export function Favorites () {
  const { favorites, clearFavorites, favoritesCheckId } = useFavorites()

  function FavItem ({ title, trailer, poster, episodies, score }) {
    return (
      <li>
        <h2>Anime name: {title}</h2>
        <div className='img-container'>
          <img
            src={poster}
            alt={title}
          />
        </div>

        <div className='info-container'>
          <p>Puntuacion: {score}</p>
          <p>NºEpisodios: {episodies}</p>
          <a target='_blank' href={trailer} rel='noreferrer'>
            <button>Ver trailer de {title}</button>
          </a>
        </div>
      </li>
    )
  }

  return (
    <>
      <label className='fav-button' htmlFor={favoritesCheckId}>
        <AddToFavorite />
      </label>
      <input className='check-input' id={favoritesCheckId} type='checkbox' hidden />

      <aside className='fav-section'>
        <ul>
          {favorites.map(anime => (
            <FavItem key={anime.id} {...anime} />
          ))}
        </ul>

        <button className='remove-fav-button' onClick={clearFavorites}>
          <RemoveFromFavorites />
        </button>

      </aside>
    </>
  )
}
