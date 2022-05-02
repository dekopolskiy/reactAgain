import React from 'react'
import { Users } from './Users';

function UsersAPI(props) {
  const followAPI = (id) => {//все кроме get требуют api-key
    props.followThunk(id);
  }

  const unfollowAPI = (id) => {
    props.unfollowThunk(id);
  }

  return (
    <Users {...props} followAPI={followAPI} unfollowAPI={unfollowAPI} usersFollowing={props.usersFollowing} />
  )
}

export default UsersAPI;