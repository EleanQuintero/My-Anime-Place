import { useContext } from 'react'
import { LoginContext } from '../../contexts/login'

export default function InitialLogScreen () {
  const { setInitialLoginData, error } = useContext(LoginContext)

  function handleSumbitLog (event) {
    event.preventDefault()
    const LogData = Object.fromEntries(new window.FormData(event.target))
    setInitialLoginData(structuredClone(LogData))
  }

  return (
    <div>
      <form className='log-screen' onSubmit={handleSumbitLog} action=''>
        <input
          name='username' type='text' placeholder='username'
        />
        <input
          name='password' type='text' placeholder='password'
        />
        {error && <p className='error-Log-message'>{error}</p>}
        <button>Iniciar Sesion</button>
      </form>
    </div>
  )
}
