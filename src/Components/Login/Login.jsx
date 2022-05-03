import s from './Login.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

function Login(props) {
  //props.onSubmit
  const { handleSubmit } = props; //3 затем в контейнерной компоненте отрабатывают методы 
  //и если есть props.onSubmit - вызывается

  return (
    <div className={s.login}>
      <div className={s.login__container}>
        <div className={s.login__form}>
          <form onSubmit={handleSubmit}> {/*2*/}
            <div>
              <label htmlFor="email">Email:</label>
              <Field name="email" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button> {/*1*/}
          </form>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'login'
})(Login)