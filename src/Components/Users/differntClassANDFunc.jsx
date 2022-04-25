import axios from 'axios';
import React, { useState } from 'react'
import { Users } from './Users';

// function UsersAPI(props) {
//   const followAPI = (id) => {//все кроме get требуют api-key
//     // props.setUserBtnDisable(id);
//     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { userId: id }, {
//       withCredentials: true,
//       headers: {
//         "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
//       }
//     }).then(({ data: { resultCode } }) => resultCode === 0 ? props.follow(id) : '')
//       .finally(() => {
//         // props.removeUserBtnDisable(id);
//       }) 
//   }

//   const unfollowAPI = (id) => {
//     // props.setUserBtnDisable(id)
//     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
//       withCredentials: true,
//       headers: {
//         "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
//       }
//     }).then(({ data: { resultCode } }) => resultCode === 0 ? props.unfollow(id) : '')
//     .finally(() => {
//       // props.removeUserBtnDisable(id);
//     }) 
//   }

//   return (
//     <Users {...props} followAPI={followAPI} unfollowAPI={unfollowAPI} usersFollowing={[]} />
//   )
// }

export class UsersAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersFollowing: []
    }
  }

  followAPI(id){//все кроме get требуют api-key
    this.setState({
      usersFollowing: [...this.state.usersFollowing, id]
    })
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, { userId: id }, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? this.props.follow(id) : '')
      .finally(() => {
        this.setState({
          usersFollowing: [ this.state.usersFollowing.filter((item) => item !== id)]
        })
      })
  }

    unfollowAPI(id){
      this.setState({
        usersFollowing: [...this.state.usersFollowing, id]
      })  
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "c8d2414e-08fc-4a3c-a2b5-5ba07a434ed8",
      }
    }).then(({ data: { resultCode } }) => resultCode === 0 ? this.props.unfollow(id) : '')
    .finally(() => {
      this.setState({
        usersFollowing: [ this.state.usersFollowing.filter((item) => item !== id)]
      })
    }) 
  }


  render() {
    return (
      <Users {...this.props} followAPI={this.followAPI.bind(this)} unfollowAPI={this.unfollowAPI.bind(this)} usersFollowing={this.state.usersFollowing} />
    )
  }
}


