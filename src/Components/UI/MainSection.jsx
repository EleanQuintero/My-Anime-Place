import { useContext } from 'react'
import { AnimeContext } from '../../contexts/animes'
import { Anime } from '../Animes/Animes'

export function MainSection () {
  const { anime, loading, search } = useContext(AnimeContext)

  return (
    <main className={` flex flex-col justify-center items-center  ${search ? 'main' : 'NoAnimes'}`}>
      {loading
        ? <p>Cargando...</p>
        : <Anime anime={anime} />}
    </main>
  )
}
