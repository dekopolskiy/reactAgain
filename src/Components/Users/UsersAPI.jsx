import axios from 'axios';
import React, { useState } from 'react'
import { Users } from './Users';

function UsersAPI(props) {
  const [usersFollowing, setUsersFollowing] = useState([]);

  const followAPI = (id) => {//все кроме get требуют api-key
    setUsersFollowing(usersFollowing)
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { userId: id }, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? props.follow(id) : '')
      .finally(() => {
        setUsersFollowing(usersFollowing.filter(item => item !== id))// [1,2,3] и очищается последний элемент, замыкание
      }
      )
  }
  const unfollowAPI = (id) => {
    setUsersFollowing([...usersFollowing, id])
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? props.unfollow(id) : '')
      .finally(() => {
        console.log(usersFollowing)
        setUsersFollowing(usersFollowing.filter(item => item !== id))
      }
      )
  }

  return (
    <Users {...props} followAPI={followAPI} unfollowAPI={unfollowAPI} usersFollowing={usersFollowing} />
  )
}

export default UsersAPI