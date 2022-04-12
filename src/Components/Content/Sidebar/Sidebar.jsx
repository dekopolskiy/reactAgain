import React from 'react'
import { connect } from 'react-redux';
import s from "./Sidebar.module.css"

export const Sidebar = (props) => {
  let friends = props.friends;
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

const mstp = (state) => {
  debugger
  return {
    friends: state.profile.friends
  }
}
const mdtp = null;

export default connect(mstp, mdtp)(Sidebar)