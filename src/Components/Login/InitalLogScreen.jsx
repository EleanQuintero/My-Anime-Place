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
    <div  >
      <form  autoComplete='off' className={`grid grid-rows-4 items-center p-0 w-4 m-auto ${error? "gap-0 -mt-8 "  : "gap-4"} `} onSubmit={handleSumbitLog} action=''>
        <h1 className=' text-sm ' >Entrar en My anime place!</h1>
        <input className=' p-1 text-center rounded-full bg-slate-900'
          name='username' type='text' placeholder='tu usuario 😊'
        />
        <input className=' p-1 text-center rounded-full bg-slate-900'
          name='password' type='password' placeholder='tu contraseña 🤐'
        />
        {error && <p className=' text-red-500 text-sm  my-1 '>{error}</p>}
        <button className=' mt-1 hover:bg-green-900  hover:animate-pulse border-solid rounded-full' >Iniciar Sesion</button>
      </form>
    </div>
  )
}
