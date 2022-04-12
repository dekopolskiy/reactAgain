import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <div className={s.addPost}>
                <textarea
                    value={props.profile.tempText} 
                    onChange={ (e) => props.handleChangeText(e.target.value) }>
                </textarea>
                <br></br>
                <button onClick={() => props.handleClick(props.profile.tempText)}>добавить</button>
            </div>
        </div>)
}
