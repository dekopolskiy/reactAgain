import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";



export const Profile = (props) => {
    let linkToTextarea = React.createRef();

    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <div className={s.addPost}>
                <textarea ref={linkToTextarea}></textarea>
                <br></br>
                <button onClick={() => props.addPost(linkToTextarea.current.value)}>добавить</button>
            </div>
        </div>)
}
