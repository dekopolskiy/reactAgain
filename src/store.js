import { rerenderTree } from "./rerender";

export const store = {
    dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
    { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],

    messages: [{ message: 'hello' }, { message: 'world' },
    { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],

    friends: [{ name: 'Dmitri' }, { name: 'Pavel' }, { name: 'Viktoria' }],

    posts: [{ text: 'lorem ipsum' }, { text: 'welcome' }, { text: 'happy end' }],

    tempText: '',

}

export const changeText = (letter) => {
    store.tempText = letter;
    rerenderTree(store);
}


export const addPost = (text) => {
    let obj = { name: text };
    store.friends.push(obj);
    rerenderTree(store);
}