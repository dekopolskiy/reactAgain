import React from 'react'
import s from "./Sidebar.module.css"

export const Sidebar = (props) => {
  let friends = props.state.friends;
  return (
    <div className={s.container__sidebar}>
      {friends.map(function (item) {
        return (<div>
          <img src='' alt='ava' />
          {item.name}
        </div>)
      })}
    </div>
  )
}
