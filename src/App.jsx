import './App.css'
import { FavProvider } from './contexts/favorites'
import { Login } from './Components/Login/Login'
import { Header } from './Components/UI/Header'
import { ShowFavSection } from './Components/UI/ShowFavSection'
import { AnimeInput } from './Components/UI/AnimeInput'
import { MainSection } from './Components/UI/MainSection'

function App () {
  return (
    <div className=' flex flex-col justify-center items-center w-full max-w-3xl h-full  m-auto text-gray-200 gap-3 '>
      <FavProvider>
        <Header />
        <ShowFavSection />
        <Login />
        <AnimeInput />
        <MainSection />
      </FavProvider>
    </div>
  )
}

export default App
