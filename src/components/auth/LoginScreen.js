import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues,handleInputChange ] = useForm({
    email: 'andersonventosilla0@gmail.com',
    password: '12345'
  })

  const { email,password } =formValues

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345,'taways'))
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary btn-block'
          type='submit'
        >
          Login
        </button>
        <div className='auth__social-networks'>
          <p>Login with social networks </p>
          <div
            className="google-btn"
          >
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link
          to='/auth/register'
          className='links'
        >
          Create new acount
        </Link>

      </form>
    </>
  )
}
