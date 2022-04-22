export const ADD_POST = 'ADD-POST';
export const CHANGE_TEXT = 'CHANGE-TEXT';
export const ADD_USER = 'ADD-USER';
export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_USER_TEXT = 'UPDATE-USER-TEXT';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_COUNT = 'SET-COUNT';
export const SET_LOAD = 'SET-LOAD';
export const SET_PROFILE = 'SET-PROFILE';

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

export const follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export const unfollow = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }    
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        items: users 
    }
}

export const setCount = (count) => {
    return {
        type: SET_COUNT,
        count: count
    }
}

export const setLoad = ( bool ) => {
    return {
        type: SET_LOAD,
        isLoad: bool,
    }
}

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile
    }
}