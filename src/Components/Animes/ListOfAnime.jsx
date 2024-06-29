import { HIDDEN } from "../../constantes/classnames/classnames"
import { useFavorites } from "../../hooks/useFavorites"
import useLogin from "../../hooks/useLogin"
import { AddToFavorite, RemoveFromFavorites } from "../Icons/Icons"

export function ListOfAnime ({ anime }) {
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
                    ? isAnimeInFavorites
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
  