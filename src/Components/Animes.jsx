import './Noanimes.css'
import { NoAnimes } from './NoAnimes'
import { AddToFavorite, RemoveFromFavorites } from './Icons/Icons'
import { useFavorites } from '../hooks/useFavorites'
import useLogin from '../hooks/useLogin'
import { ADD_FAVORITE, HIDDEN, REMOVE_FAVORITE } from '../constantes/classnames/classnames'

function ListOfAnime ({ anime }) {
  const { isloged } = useLogin()
  const { addToFavorites, favorites, removeFromFavorites } = useFavorites()

  // Chequemos que el item en favoritos sea igual que el del array anime
  // Obteniendo true/false y seteando el resultado en isAnimeInFavorites
  // luego segun el valor renderizamos el estilo del boton
  // ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇

  const checkAnimeFavorite = anime => {
    return favorites.some(item => item.id === anime.id)
  }

  return (
    <ul className="grid grid-cols-16 md  m-0 p-0  w-full list-none  gap-9">
      {
      (
       anime.map(anime => {
         const isAnimeInFavorites = checkAnimeFavorite(anime)

         return (
           <li className="mt-5 " key={anime.id}>
             <h4>{anime.title}</h4>
             <p className="" >Nº de Episodios: {anime.episodies}</p>
             <p>Valoracion: {anime.score}</p>
             <a href={anime.url} target='_blank' rel='noreferrer'>
               <img  className="mt-3" src={anime.poster} alt={anime.title} />
             </a>
             <button
               onClick={() => {
                 isAnimeInFavorites
                   ? removeFromFavorites(anime)
                   : addToFavorites(anime)
               }}
               className={` mt-2 ${
                isloged
                  ? isAnimeInFavorites ? REMOVE_FAVORITE : ADD_FAVORITE
                  : HIDDEN
               }`}
             >
               {
                  isAnimeInFavorites
                    ? <RemoveFromFavorites />
                    : <AddToFavorite />
                 }
             </button>
           </li>
         )
       })
      )
    }
    </ul>
  )
}

export function NoRenderAnime () {
  return (
    <>
      <h1>Busca tu anime favorito!</h1>
      <img src='https://imgs.search.brave.com/HoKj6wDgjOIkMKbUbZFfsYABD12U9GUezWBvbf7_jPw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pa2lt/YXNoby5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMDIv/Y3JvcHBlZC1pa2kz/LmpwZw' alt='' />
    </>

  )
}

// Este componente anime es el que muestra
// en la aplicacion la lista de animes
// usando cond rendering
// recibe la lista de anime mediante
export function Anime ({ anime }) {
  const hasAnime = anime?.length > 0
  return (
    hasAnime
      ? <ListOfAnime anime={anime} />
      : <NoAnimes className='noAnimes' />
  )
}
