import s from './Login.module.css'
import React from 'react'

function Login() {
  return (
    <div className={s.login}>
      <div className={s.login__container}>
        <div className={s.login__form}>
          <form>
            <div className={s.name}>
              <label for="text">Name:</label>
              <input type="text" name='loginName' />
            </div>
            <div className={s.password}>
              <label for="password">Password:</label>
              <input type="password" name='password' />
            </div>
            <button>LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login