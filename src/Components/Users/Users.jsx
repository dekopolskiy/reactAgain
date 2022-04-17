import axios from 'axios';
import s from "./Users.module.css";

// function Users(props) {
//   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(data => console.log(data.items.items))
//   return (
//     <div className={s.users}>
//       {
//         props.users.map((item) => {
//           return <div className={s.user}>
//             <h4>{item.name}</h4>
//             {item.id}
//             {item.status}
//             <button onClick={item.followed ? () => props.unfollow(item.id) : () => props.follow(item.id)}>
//               {item.followed ? 'unfollow' : 'follow'}
//             </button>
//           </div>
//         })
//       }
//     </div>
//   )
// }

import React, { Component } from 'react'
import { Paginator } from '../Paginator/Paginator';

export class Users extends Component {
  componentDidMount() {// Компонента создана VDOM и вмонтирована в DOM,запускается один раз после render
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((data) => {
        this.props.setCount(data.data.totalCount)
        this.props.setUsers(data.data.items)
      })
  }

  render() {
    return (
      <div className={s.users}>
        <Paginator count={28} setUsers={this.props.setUsers} />

        {
          this.props.users.map((item) => { //this т.к. создaли объект через new User(props);
            return <div className={s.user}>
              <h4>{item.name}</h4>
              <img src={item.photos.small ? item.photos.small : ''} alt='not found' />
              <h3>{item.id}</h3>
              <div>{item.status ? item.status : 'Not Status'}</div>
              <button onClick={item.followed ? () => this.props.unfollow(item.id) : () => this.props.follow(item.id)}>
                {item.followed ? 'unfollow' : 'follow'}
              </button>
            </div>
          })
        }
      </div>
    )
  }
}

export default Users