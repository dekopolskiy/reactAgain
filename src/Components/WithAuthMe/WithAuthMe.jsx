import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router'

export const withAuthMe = (Component) => {
    function HandleComponent(props) {
        if (!props.authMe.online) {
            return <Navigate to="/login" />
        }
        return <Component {...props} />
    }


    const mstp = (state) => {
        return {
            authMe: state.authMe,
        }
    }

    const AuthMe = connect(mstp, {})(HandleComponent);

    return AuthMe;
}



