import s from "./Profile.module.css";
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";
import axios from "axios";

export const Profile = (props) => {
    debugger
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const { userId } = useParams();//из браузерной строки userId для профиля;
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 15356}`)
            .then(({ data: profile }) => { 
                props.setProfile(profile);
            })
            .catch((e) => setError(e.toJSON().message))
            .finally(() => setLoad(true))
        // return () => { console.log('unmount') } здесь можно что-то задиспатчить, например статус 
        //Онлайн оффлайн в шапку сайта 
    }, [userId]);
    //отрисовывает потом effect
    return load? (
        <div className={s.profile}>
            {error? <div className={s.error}>{error}</div> : ''}
            <h2>Posts</h2>
            <h1>{props.profile.fullName}</h1>
            <h3>О себе</h3>
            <div><i>{props.profile.aboutMe}</i></div>
            <h3>Контакты</h3>
            {Object.entries(props.profile.contacts).map(function ([key, value]) {
                return <div>{key}:{value}</div>
            })}
        </div>)
        : <div>LOAD</div>
}

