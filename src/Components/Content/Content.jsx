import s from "./Content.module.css";
import React from 'react';
import { DialogItem } from "./Dialogs/DialogItem/DialogItem";
import { Message } from "./Dialogs/Message/Message";
import { Sidebar } from "./Sidebar/Sidebar";

export const Content = (props) => {
    let store = props.store;
    return (
        <div className={s.container}>
            <div className={s.container__content}>
                <div className={s.content__dialogs}>
                    {store.dialogItems.map(function (item) {
                        return <DialogItem name={item.name} id={item.id} />
                    })}
                </div>
                <div className={s.content__messages}>
                    {store.messages.map(function (item) {
                        return <Message message={item.message}/>
                    })}
                </div>
            </div>
        </div>)
}
