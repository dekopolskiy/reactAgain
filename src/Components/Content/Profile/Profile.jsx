import s from "./Profile.module.css";
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { httpReq } from "../../../DAL";
import { Status } from "./Status/Status";

export const Profile = (props) => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const { userId } = useParams();//из браузерной строки userId для профиля;
    useEffect(() => {
        httpReq.getProfile(userId || props.id)
            .then(({ data: profile }) => props.setProfile(profile))
            .catch((e) => setError(e.toJSON().message))
            .finally(() => setLoad(true))
        // return () => { console.log('unmount') } здесь можно что-то задиспатчить, например статус 
        //Онлайн оффлайн в шапку сайта 
    }, [userId]);
    //отрисовывает потом effect
    return load ? (
        <div className={s.profile}>
            <Status />
            <h1>PROFILE INFO</h1>
            {error ? <div className={s.error}>{error}</div> : ''}
            <h2>Posts</h2>
            <h1>{props.profile.fullName}</h1>
            <h3>О себе</h3>
            <div><i>{props.profile.aboutMe}</i></div>
            <h3>Контакты</h3>
            {Object.entries(props.profile.contacts).map(function ([key, value], index) {
                return <div key={index}>{key}:{value}</div>
            })}
        </div>)
        : <div>LOAD</div>
}

