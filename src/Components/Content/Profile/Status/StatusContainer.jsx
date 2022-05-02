import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Status } from './Status'
import { getStatusThunk, setStatusThunk } from './../../../../actions'

const StatusContainer = (props) => {
  useEffect(() => {
    props.getStatusThunk(props.id)
  }, [props.status])
  return (
    <Status {...props} />
  )
}

const mstp = (state) => {
  return {
    status: state.profile.status,
  }
}
export default connect(mstp, { getStatusThunk, setStatusThunk })(StatusContainer)
