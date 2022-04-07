import { ADD_MESSAGE, ADD_POST, ADD_USER, CHANGE_TEXT, UPDATE_USER_TEXT } from "./actions";

let initialDialog = {
        dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
        { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],
        messages: [{ message: 'hello' }, { message: 'world' },
        { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],
        tempUserText: '',
}

let initialProfile = {
        friends: [{ name: 'Dmitri' }, { name: 'Pavel' }, { name: 'Viktoria' }],

        posts: [{ text: 'lorem ipsum' }, { text: 'welcome' }, { text: 'happy end' }],
        tempText: '',
}

export const dialogs_reducer = (state = initialDialog, action) => {
    switch (action.type) {
        case ADD_USER:
            state.dialogItems.push({ name: action.data });
            break;
        case UPDATE_USER_TEXT:
            state.tempUserText = action.data;
            break;
    }
    return state;
}

export const profile_reducer = (state = initialProfile, action) => {
    switch (action.type) {
        case ADD_POST:
            state.friends.push({ name: action.data });
            break;
        case CHANGE_TEXT:
            state.tempText = action.data;
            break;
    }
    return state;
}