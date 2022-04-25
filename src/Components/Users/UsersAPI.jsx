import axios from 'axios';
import React, { useState } from 'react'
import { Users } from './Users';

function UsersAPI(props) {
  const followAPI = (id) => {//все кроме get требуют api-key
    props.setUserBtnDisable(id);
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { userId: id }, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? props.follow(id) : '')
      .finally(() => {
        props.removeUserBtnDisable(id);
      }) 
  }

  const unfollowAPI = (id) => {
    props.setUserBtnDisable(id)
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? props.unfollow(id) : '')
    .finally(() => {
      props.removeUserBtnDisable(id);
    }) 
  }

  return (
    <Users {...props} followAPI={followAPI} unfollowAPI={unfollowAPI} usersFollowing={props.users_following} />
  )
}

export default UsersAPI