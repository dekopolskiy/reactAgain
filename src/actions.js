export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';
export const ADD_USER = 'ADD-USER';
export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_USER_TEXT = 'UPDATE-USER-TEXT';

export const addPost = (data) => {
    return {
        type: ADD_POST,
        data: data,
    }
}

export const changeText = (data) => {
    return {
        type: CHANGE_TEXT,
        data: data,
    }
}

export const updateUserText = (data) => {
    return {
        type: UPDATE_USER_TEXT,
        data: data,
    }
}

export const addUser = (data) => {
    return {
        type: ADD_USER,
        data: data,
    }
}

export const addMessage = (data) => {
    return {
        type: ADD_POST,
        data: data
    }
}