import React, { useState } from 'react'

export const Status = (props) => {
  const [temp, setTemp] = useState('');
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      <h3>status</h3>
      {editMode ?
        <textarea onBlur={setEditMode(false)}>{props.status}</textarea>
        :
        <div onFocus={() => {
          console.log('first')
          setEditMode(true)
        }}>{props.status}</div>
      }
    </>
  )
}

