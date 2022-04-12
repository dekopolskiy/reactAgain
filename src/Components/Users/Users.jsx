import React from 'react';
import s from "./Users.module.css";

function Users(props) {
  return (
    <div className={s.users}>
      {
        props.users.map((item) => {
          return <div className={s.user}>
            <h4>{item.name}</h4>
            {item.id}
            {item.status}
            <button onClick={item.followed ? () => props.unfollow(item.id) : () => props.follow(item.id)}>
              {item.followed ? 'unfollow' : 'follow'}
            </button>
          </div>
        })
      }
    </div>
  )
}

export default Users