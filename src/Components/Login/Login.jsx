import s from './Login.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = (values) => {
  const errors = {};
  if (!values.email) errors.email = 'Field is required'
  return errors
}

const renderField = ({ input, type, label, meta: { touched, error, warning } }) => {
  return (
    <>
      <input className={s.field} {...input} placeholder={label} type={type} />
      {touched && error && <div className={s.fieldError}>{error}</div>}
    </>
  )
}

function Login(props) {
  //props.onSubmit
  const { handleSubmit, pristine, reset, submitting, error } = props; //3 затем в контейнерной компоненте отрабатывают методы 
  //и если есть props.onSubmit - вызывается
  return (
    <div className={s.login}>
      <div className={s.login__container}>
        <form onSubmit={handleSubmit} className={s.login__form}> {/*2*/}
          <div className={s.nameForm}>
          <h1>LOGIN</h1>
          </div>
          <div>
            <Field name="email" component={renderField} type="email" label='email' />
          </div>
          <div>
            <Field name="password" component={renderField} type="password" label='password' />
          </div>
          <button className={s.button} type="submit" disabled={submitting}>Submit</button> {/*1*/}
          <button className={s.button} type="submit" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          <div className={error ? s.serverError : null}>{error ? error : null}</div>
        </form>
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'login',
  validate,
})(Login)


/*

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(SyncValidationForm) */