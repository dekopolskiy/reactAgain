import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { changeText } from "../../../store";

const onChangeText = (e) => {
    changeText(e.target.value);
}

export const Profile = (props) => {
    let linkToTextarea = React.createRef();
    console.log(props.store.tempText)
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <div className={s.addPost}>
                <textarea ref={linkToTextarea} value={props.store.tempText} onChange={(e) => {
                    onChangeText(e);
                }}></textarea>
                <br></br>
                <button onClick={() => props.addPost(linkToTextarea.current.value)}>добавить</button>
            </div>
        </div>)
}
