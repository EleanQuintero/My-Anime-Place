import { useContext } from 'react'
import { AddToFavorite } from '../Icons'
import { LoginContext } from '../../contexts/login'
import useLogin from '../../hooks/useLogin'
import { useFavorites } from '../../hooks/useFavorites'

export default function LogedScreen () {
  const { favoritesCheckId } = useFavorites()
  const { setIsLogded, isloged, setError, initialLoginData, setInitialLoginData, initalState } = useContext(LoginContext)
  const { avatar } = useLogin()

  const handleLogOut = () => {
    setIsLogded(!isloged)
    setError(null)
    setInitialLoginData(initalState)
  }
  return (
    <>
      <img className='icon' src={avatar} alt='' />
      <h1 className=' text-lg m-0'>Bienvenido de nuevo {initialLoginData.username} </h1>
      <button className=' text-xs m-0 px-8  mt-1  border-solid rounded-full  hover:animate-pulse hover:bg-red-800 hover:text-black hover:font-bold logOut-button' onClick={handleLogOut}>Cerrar Sesion</button>
      <label className='fav-loged-button' htmlFor={favoritesCheckId}>
        <AddToFavorite />
      </label>
      <input className='check-loged-input' id={favoritesCheckId} type='checkbox' hidden />
    </>
  )
}
