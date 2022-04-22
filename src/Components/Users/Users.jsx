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
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

export class Users extends Component {
  componentDidMount() {// Компонента создана VDOM и вмонтирована в DOM,запускается один раз после render
    this.props.setLoad(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then((data) => {
        this.props.setUsers(data.data.items)
      }).finally(() => {
        this.props.setLoad(false);
      })
  }

  followAPI(){
    console.log('follow')
  }
  unfollowAPI(){
    console.log('unfollow')
  }

  render() {
    return (
      <div className={s.users}>
        <Paginator count={28} setUsers={this.props.setUsers} setLoad={this.props.setLoad} />
        {this.props.isLoad ? <Loading /> :
          this.props.users.map((item) => { //this т.к. создaли объект через new User(props);
            return <div className={s.user} key={item.id}>
              <Link to={'/profile/' + item.id}><h4>{item.name}</h4></Link>
              <img src={item.photos.small ? item.photos.small : ''} alt='not found' />
              <h3>{item.id}</h3>
              <div>{item.status ? item.status : 'Not Status'}</div>
              <button className={s.follow} onClick={item.followed ? () => this.unfollowAPI(item.id) : () => this.followAPI(item.id)}>
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

