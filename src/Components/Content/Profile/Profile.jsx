import s from "./Profile.module.css";
import React from 'react';
import { Post } from "./Post/Post";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { addPost, changeText } from "../../../actions";


export const Profile = (props) => {
    let linkToTextarea = React.createRef();

    const onChangeText = (e) => {
        props.dispatch(changeText(e.target.value));
    }
    return (
        <div className={s.profile}>
            <ProfileInfo />
            <h2>Posts</h2>
            <Post />
            <div className={s.addPost}>
                <textarea ref={linkToTextarea} value={props.state.tempText} onChange={(e) => {
                    onChangeText(e);
                }}></textarea>
                <br></br>
                <button onClick={() => props.dispatch(addPost(linkToTextarea.current.value))}>добавить</button>
            </div>
        </div>)
}
