import React, { useEffect, useState } from 'react'
import s from './Status.module.css'

export const Status = (props) => {
  const [editMode, setEditMode] = useState(true);
  const [temp, setTemp] = useState('');

  return (
    <div className={s.status}>
      {editMode ?
        <div tabIndex={0} onFocus={() => {
          setTemp(props.status);
          setEditMode(false);
        }}>{props.status}</div>
        : <textarea value={temp}
          onChange={(e) => { setTemp(e.target.value) }}
          onBlur={() => {
            props.setStatusThunk(temp);
            setEditMode(true);
          }}
        ></textarea>}
    </div>
  )

}

