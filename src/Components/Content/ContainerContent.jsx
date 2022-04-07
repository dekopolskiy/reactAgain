import s from "./Content.module.css";
import React from 'react';
import { addUser, updateUserText } from "../../actions";
import { Content } from "./Content";

export const ContainerContent = (props) => {
    let handleChange = function (value) {
        props.dispatch(updateUserText(value))
    };

    let handleClick = function (value) {
        props.dispatch(addUser(value))
    };

    return <Content handleChange={handleChange} handleClick={handleClick} dialogs={props.dialogs}/>
}
