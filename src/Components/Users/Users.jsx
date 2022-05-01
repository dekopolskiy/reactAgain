import s from "./Users.module.css";
import React, { useEffect } from 'react'
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import PaginatorContainer  from '../Paginator/PaginatorContainer';

export const Users = (props) => {
  useEffect(() => {
    props.getUsersThunk();
  }, []);
  
  return (
    <div className={s.users}>
      <PaginatorContainer />
      {props.isLoad ? <Loading /> :
        props.users.map((item) => {
          return <div className={s.user} key={item.id}>
            <Link to={'/profile/' + item.id}><h4>{item.name}</h4></Link>
            <img src={item.photos.small ? item.photos.small : ''} alt='not found' />
            <h3>{item.id}</h3>
            <div>{item.status ? item.status : 'Not Status'}</div>
            <button
              disabled={props.usersFollowing.some((el)=> el === item.id )}
              // className={s.follow}
              onClick={item.followed ? () => props.unfollowAPI(item.id) : () => props.followAPI(item.id)}>
              {item.followed ? 'unfollow' : 'follow'}
            </button>
          </div>
        })
      }
    </div>
  )
}



