import { useEffect, useRef, useContext } from 'react'
import autorizedUsers from '../mocks/users.json'
import { LoginContext } from '../contexts/login'

export default function useLogin () {
  const { isloged, setIsLogded, initialLoginData, setError, avatar, setAvatar } = useContext(LoginContext)
  const isFirstInput = useRef(true)

  const checkedUsers = autorizedUsers.users

  const userData = checkedUsers.map(data => ({
    username: data.username,
    password: data.password,
    avatar: data.avatar
  }))

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = initialLoginData.user === '' && initialLoginData.password === ''
      return
    }

    for (let index = 0; index < checkedUsers.length; index++) {
      if (initialLoginData.username === userData[index].username && initialLoginData.password === userData[index].password) {
        const userAvatar = userData.at(index).avatar
        setIsLogded(true)
        setAvatar(userAvatar)
      } 
      
      if (initialLoginData.username !== userData.at(index).username || initialLoginData.password !== userData.at(index).password) {
        setError('Datos incorrectos, intente de nuevo por favor')
      }
    }
  }, [initialLoginData])

  return { avatar, isloged }
}
