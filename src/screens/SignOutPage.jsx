import { useEffect } from 'react'
import { signOut } from '../../services/users'
import { useNavigate } from 'react-router-dom'

const SignOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      navigate('/')
    }
    signOutUser()
  }, [navigate, setUser])

  return ''
}

export default SignOut