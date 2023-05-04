import { useState } from 'react'
import './SignInPage.css'
import { signIn } from '../../services/users.js'
import { useNavigate,Link } from 'react-router-dom'

const SignIn = (props) => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign In</button>
    }
  }

  const { email, password } = form

  return (
    <div className='form-container' id="form">
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        <label>Email</label><br/>
        <input
          required
          type='text'
          name='email'
          value={email}
          placeholder='Enter Email'
          onChange={handleChange}
        /><br/><br/>
        <label>Password</label><br/>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        /><br/><br/>
        {renderError()}
      </form>
      <p>Don't have an account? Make one <Link to="/sign-up">here!</Link></p>
    </div>
  )
}

export default SignIn