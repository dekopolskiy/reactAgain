import s from './Login.module.css'
import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { loginThunk } from '../../actions'
import { Navigate } from 'react-router'

function LoginContainer(props) {
  const { loginThunk, online } = props;
  const submit = (props) => {
    loginThunk(props);
  }
  return online ? <Navigate to="/profile" /> : (
    <Login onSubmit={submit} />
  )
}

const mstp = (state) => ({
  online: state.authMe.online,
})

export default connect(mstp, { loginThunk })(LoginContainer)