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
      <h1 className='loged-text'>Bienvenido de nuevo {initialLoginData.username} </h1>
      <button className='logOut-button' onClick={handleLogOut}>Cerrar Sesion</button>
      <label className='fav-loged-button' htmlFor={favoritesCheckId}>
        <AddToFavorite />
      </label>
      <input className='check-loged-input' id={favoritesCheckId} type='checkbox' hidden />
    </>
  )
}
