import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <Post />
            <div className={s.addPost}>
                <textarea></textarea>
                <br></br>
                <button>добавить</button>
            </div>
        </div>)
}
