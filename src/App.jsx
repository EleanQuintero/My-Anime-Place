import { useSearch } from './hooks/useSearch'
import './App.css'
import { Anime } from './Components/Animes'
import { useAnimes } from './hooks/useAnimes'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import { Favorites } from './Components/Favorites'
import { FavProvider } from './contexts/favorites'
import { Login } from './Components/Login/Login'
import useLogin from './hooks/useLogin'

function App () {
  // se busca el anime por el input
  // y enviamos el search a useAnimes
  // ⬇⬇⬇⬇⬇

  const { search, newSearch, error } = useSearch('')

  // separamos toda la logica del mapeo y fetching de datos en un custom hook
  // generando useAnimes traemos el valor anime
  // ⬇⬇⬇⬇⬇

  const { anime, getAnimes, loading } = useAnimes({ search })

  const { isloged } = useLogin()

  const debouncedGetAnimes = useCallback(
    debounce(search => {
      getAnimes({ search })
    }, 300),
    []
  )

  const handleSumbit = (event) => {
    event.preventDefault()
    getAnimes({ search })
  }

  const handleChange = (event) => {
    const updateSearch = event.target.value
    newSearch(updateSearch)
    debouncedGetAnimes(updateSearch)
  }

  return (
    <FavProvider>

      <div className='page'>
        <header>
          <h1>My anime place! </h1>
          <form className='form' onSubmit={handleSumbit}>
            <input
              className={error ? 'setedError' : 'noError'}
              value={search}
              onChange={handleChange}
              placeholder='Naruto, kimetsu no yaiba, dragon ball'
              type='text'
            />
            <button type='sumbit'>Buscar</button>
          </form>
          {error && <p className='error-message'>{error}</p>}
        </header>
        <section>
          {
            isloged
              ? <Favorites />
              : <h1>Debes estar logueado para ver favoritos</h1>
          }
        </section>
        <Login />
        <main className={search ? 'main' : 'NoAnimes'}>
          {loading
            ? <p>Cargando...</p>
            : <Anime anime={anime} />}
        </main>
      </div>

    </FavProvider>
  )
}

export default App
