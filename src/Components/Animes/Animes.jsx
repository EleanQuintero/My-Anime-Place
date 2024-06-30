import { ListOfAnime } from './ListOfAnime'
import { NoAnimes } from './NoAnimes'

// Este componente anime es el que muestra
// en la aplicacion la lista de animes
// usando cond rendering
// recibe la lista de anime mediante
export function Anime ({ anime }) {
  const hasAnime = anime?.length > 0
  return (
    hasAnime
      ? <ListOfAnime anime={anime} />
      : <NoAnimes />
  )
}
