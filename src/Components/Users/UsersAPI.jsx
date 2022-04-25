import React from 'react'
import { httpReq } from '../../DAL';
import { Users } from './Users';

function UsersAPI(props) {
  const followAPI = (id) => {//все кроме get требуют api-key
    props.setUserBtnDisable(id);
    httpReq.follow(id)
    .then(({ data: { resultCode } }) => resultCode === 0 ? props.follow(id) : '')
      .finally(() => props.removeUserBtnDisable(id)) 
  }

  const unfollowAPI = (id) => {
    props.setUserBtnDisable(id)
    httpReq.unfollow(id)
    .then(({ data: { resultCode } }) => resultCode === 0 ? props.unfollow(id) : '')
    .finally(() => props.removeUserBtnDisable(id)) 
  }

  return (
    <Users {...props} followAPI={followAPI} unfollowAPI={unfollowAPI} usersFollowing={props.usersFollowing} />
  )
}

export default UsersAPI;