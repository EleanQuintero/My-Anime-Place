import { useSearch } from './hooks/useSearch'
import './App.css'
import { Anime } from './Components/Animes'
import { useAnimes } from './hooks/useAnimes'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'
import { FavProvider } from './contexts/favorites'
import { Login } from './Components/Login/Login'
import { FormButton } from './Components/UI/FormButton'
import { Header } from './Components/UI/Header'
import { ShowFavSection } from './Components/UI/ShowFavSection'

function App () {
  // se busca el anime por el input
  // y enviamos el search a useAnimes
  // ⬇⬇⬇⬇⬇

  const { search, newSearch, error } = useSearch('')

  // separamos toda la logica del mapeo y fetching de datos en un custom hook
  // generando useAnimes traemos el valor anime
  // ⬇⬇⬇⬇⬇

  const { anime, getAnimes, loading } = useAnimes({ search })



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
      <div className=" flex flex-col justify-center items-center w-full max-w-3xl h-full  m-auto text-gray-200 gap-3 " >
        <Header />
          <form className=" text-black space-x-5 " onSubmit={handleSumbit}>
            <input
              className={`p-2 border-4 rounded-3xl focus:outline-none font-medium ${error ? "border-red-700" : "border-sky-700"}`}
              value={search}
              onChange={handleChange}
              placeholder='Naruto, kimetsu no yaiba, dragon ball'
              type='text'
            />
             <FormButton />
          </form>
          {error && <p className='error-message'>{error}</p>}
          <ShowFavSection />
        <Login />
        <main className={` flex flex-col justify-center items-center  ${search ? "main" : "NoAnimes"}`}>
          {loading
            ? <p>Cargando...</p>
            : <Anime anime={anime} />}
        </main>
      </div>
    </FavProvider>
  )
}

export default App
