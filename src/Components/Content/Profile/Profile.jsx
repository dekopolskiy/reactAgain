import s from "./Profile.module.css";
import React, { useEffect } from 'react';
import StatusContainer from "./Status/StatusContainer";

export const Profile = (props) => {
    useEffect(() => {
        props.getProfileThunk(props.authMe.id)
    }, [props.authMe.id])
    return <div>
        <h3>{props.profile.fullName}</h3>
        <div> About Me: {props.profile.aboutMe}</div>
        <StatusContainer id={props.authMe.id}/>
        {/* <img src={props.profile.photos.large} alt='k'/> */}
        {Object.entries(props.profile.contacts).map(([item, key], index) => {
            return (<div className={s.contact} key={index}>{item}:{key}</div>)
        })}
    </div>
}



