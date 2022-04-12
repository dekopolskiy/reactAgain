import s from "./Content.module.css";
import React from 'react';
import { DialogItem } from "./Dialogs/DialogItem/DialogItem";
import { Message } from "./Dialogs/Message/Message";

export const Content = (props) => {
    let dialogs = props.dialogs;
    return (
        <div className={s.container}>
            <div className={s.container__content}>
                <div className={s.content__dialogs}>
                    {dialogs.dialogItems.map(function (item) {
                        return <DialogItem name={item.name} id={item.id} />
                    })}
                    <textarea value={dialogs.tempUserText}
                        onChange={(e) => { props.handleChange(e.target.value)}}>
                    </textarea>
                    <br></br>
                    <button onClick={() => props.handleClick(dialogs.tempUserText)}>Добавить пользователя</button>
                </div>
                <div className={s.content__messages}>
                    {dialogs.messages.map(function (item) {
                        return <Message message={item.message} />
                    })}
                </div>
            </div>
        </div>)
}
