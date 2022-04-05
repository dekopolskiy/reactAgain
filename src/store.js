
export const store = {
    dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
    { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],

    messages: [{ message: 'hello' }, { message: 'world' },
    { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],

    friends: [{ name: 'Dmitri' }, { name: 'Pavel' }, { name: 'Viktoria' }],

    posts: [{ text: 'lorem ipsum' }, { text: 'welcome' }, { text: 'happy end' }],

}


export const addPost = (text) => {
    console.log(text)
    let obj = { message: 'how are you?' };
    store.friends.push(obj);
}