const ADD_POST = 'ADD-POST';
const CHANGE_TEXT = 'CHANGE-TEXT';

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