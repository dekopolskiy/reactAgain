import React from 'react';
import { addUser, updateUserText } from "../../actions";
import { Content } from "./Content";
import { connect } from "react-redux";
import { withAuthMe } from "../WithAuthMe/WithAuthMe";
import { compose } from 'redux';

export const SContainerContent = (props) => {
    let handleChange = function (value) {
        props.dispatch(updateUserText(value))
    };

    let handleClick = function (value) {
        props.dispatch(addUser(value))
    };

    return <Content handleChange={handleChange} handleClick={handleClick} dialogs={props.dialogs} />
}
const mstp = (state) => {
    return {
        dialogs: state.dialogs,
    }
}

const mdtp = (dispatch) => {
    return {
        handleChange: function(value) { dispatch(updateUserText(value)) },
        handleClick: function (value) { dispatch(addUser(value)) },
    }
}
const WrappedContent = withAuthMe(Content);
export const ContainerContent = connect(mstp, mdtp)(WrappedContent)
export default compose(withAuthMe, connect(mstp, mdtp))(Content)