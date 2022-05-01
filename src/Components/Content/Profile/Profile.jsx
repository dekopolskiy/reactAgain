import s from "./Profile.module.css";
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from "react-router";
import { httpReq } from "../../../DAL";
import StatusContainer from "./Status/StatusContainer";

export const Profile = (props) => {
    const [load, setLoad] = useState(false);
    const { userId } = useParams();//из браузерной строки userId для профиля;

    useEffect(() => {
        httpReq.getProfile(userId || props.authMe.id)
            .then((data) => props.setProfile(data.data))
            .catch((e) => console.log(e))
            .finally(() => setLoad(true))
            console.log('effect')
    }
        , [userId]);
    console.log('render')
    return load ? (
        <div className={s.profile}>
            {!userId && !props.authMe.id && <Navigate replace to="/login" />}
            <h2>Posts</h2>
            <h1>{props.profile.fullName}</h1>
            <StatusContainer id={userId || props.authMe.id}/>
            <h3>О себе</h3>
            <div><i>{props.profile.aboutMe}</i></div>
            <h3>Контакты</h3>
            {Object.entries(props.profile.contacts).map(function ([key, value], index) {
                return <div key={index}>{key}:{value}</div>
            })}
        </div>)
        : <div>LOAD</div>
}

