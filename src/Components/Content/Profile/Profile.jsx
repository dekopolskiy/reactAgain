import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { addPost, changeText } from "../../../actions";


export const Profile = (props) => {
    const onChangeText = (e) => {
        props.dispatch(changeText(e.target.value));
    }
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <div className={s.addPost}>
                <textarea
                    value={props.profile.tempText} 
                    onChange={ onChangeText }>
                </textarea>
                <br></br>
                <button onClick={() => props.dispatch(addPost(props.profile.tempText))}>добавить</button>
            </div>
        </div>)
}
