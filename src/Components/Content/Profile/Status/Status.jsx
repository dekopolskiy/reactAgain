import React, { useEffect, useState } from 'react'

export const Status = (props) => {
    const [temp, setTemp] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('');

    useEffect(() => { setTimeout(() => setStatus('hello'), 2000) }, [])
    return (
        <div>
            {editMode ?
                <textarea
                    onChange={(e) => setTemp(e.target.value)}
                    value={temp}
                    onBlur={() => {
                        setTimeout(() => { setStatus(temp)},1000)
                        setEditMode(false);
                    }}
                ></textarea>
                : <div tabindex='0' onFocus={() => {
                    setTemp(status);
                    setEditMode(true)
                }
                }>STATUS:{status}</div>
            }
        </div>
    )
}

