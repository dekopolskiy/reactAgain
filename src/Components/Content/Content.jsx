import s from "./Content.module.css";
import React from 'react';
import { DialogItem } from "./Dialogs/DialogItem/DialogItem";
import { Message } from "./Dialogs/Message/Message";


let dataFromServer = [
    {
        dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
        { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }]
    },
    { messages: [{ message: 'hello' }, { message: 'world' }, { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }] }

]

export const Content = () => {
    return (
        <div className={s.container}>
            <div className={s.container__sidebar}>
                sidebar
            </div>
            <div className={s.container__content}>
                <div className={s.content__dialogs}>
                    {dataFromServer[0].dialogItems.map(function (item) {
                        return <DialogItem name={item.name} id={item.id} />
                    })}
                </div>
                <div className={s.content__messages}>
                    {dataFromServer[1].messages.map(function (item) {
                        return <Message message={item.message}/>
                    })}
                </div>
            </div>
        </div>)
}
