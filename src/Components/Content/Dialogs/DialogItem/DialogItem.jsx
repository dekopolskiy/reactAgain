import React from 'react'
import s from './DialogItem.module.css';
import { Link } from 'react-router-dom';

export const DialogItem = (props) => {

  return (
    <div className={s.item}>
      <Link to={'/dialogs/' + props.id}>{props.name}</Link>
    </div>
  )
}
