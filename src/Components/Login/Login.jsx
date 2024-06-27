import { LoginIcon } from '../Icons/Icons'
import '../Login/Login.css'
import '../FavoritesSection/Favorites.css'
import { useId } from 'react'

// Components
import LogedScreen from './LogedScreen'
import InitialLogScreen from './InitalLogScreen'
import useLogin from '../../hooks/useLogin'

export function Login () {
  const { isloged } = useLogin()
  const loginCheckId = useId()

  return (
    <>
      <label className='login-button' htmlFor={loginCheckId}>
        <LoginIcon />
      </label>
      <input className='check-input' id={loginCheckId} type='checkbox' hidden />

      <aside className= {` w-80  ${isloged ? "loged-section" : "login-section"}`}>
        <>
          {
        isloged
          ? <LogedScreen />
          : <InitialLogScreen />
        }

        </>

      </aside>
    </>
  )
}
