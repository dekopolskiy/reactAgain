import { httpReq } from "./DAL";

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
export const SET_AUTH_ME = 'SET-AUTH-ME';
export const FOLLOW_IN_PROGRESS = 'FOLLOW-IN-PROGESS';
export const REMOVE_IN_PROGRESS = 'REMOVE-IN-PROGRESS';
export const SET_STATUS = 'SET-STATUS';

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

export const setLoad = (bool) => {
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

export const setAuthMe = (authProfile) => {
    return {
        type: SET_AUTH_ME,
        authProfile,
    }
}

export const setUserBtnDisable = (id) => {
    return {
        type: FOLLOW_IN_PROGRESS,
        id
    }
}

export const removeUserBtnDisable = (id) => {
    return {
        type: REMOVE_IN_PROGRESS,
        id
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const getUsersThunk = () => {
    return (dispatch) => {
        dispatch(setLoad(true));
        httpReq.getUsers()
            .then((data) => dispatch(setUsers(data.data.items)))
            .finally(() => dispatch(setLoad(false)))
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(setUserBtnDisable(id));
        httpReq.follow(id)
            .then(({ data: { resultCode } }) => resultCode === 0 ? dispatch(follow(id)) : '')
            .finally(() => dispatch(removeUserBtnDisable(id)))
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(setUserBtnDisable(id));
        httpReq.unfollow(id)
            .then(({ data: { resultCode } }) => resultCode === 0 ? dispatch(unfollow(id)) : '')
            .finally(() => dispatch(removeUserBtnDisable(id)))
    }
}


export const getPageThunk = (page) => {
    return (dispatch) => {
        dispatch(setLoad(true));
        httpReq.getPage(10, page)
            .then(data => dispatch(setUsers(data.data.items)))
            .finally(() => dispatch(setLoad(false)))
    }
}

export const authMeThunk = () => {
    return (dispatch) => {
        return new Promise((resolve) => {
            httpReq.authMe()
                .then(({ data }) => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthMe(data.data))
                    } else {
                        throw new Error(data.messages[0])
                    }
                })
                .catch((e) => console.log(e))
                .finally(() => resolve(1));
        })
    }
}

export const getStatusThunk = (id) => {
    return dispatch => {
        httpReq.getStatus(id)
            .then(({ data }) => dispatch(setStatus(data)))
    }
}

export const setStatusThunk = (newStatus) => {
    return dispatch => {
        httpReq.setStatus(newStatus)
            .then(({ data }) => { 
                dispatch(setStatus(newStatus))})
    }
}

export const getProfileThunk = (id) => {
    return dispatch => {
        httpReq.getProfile(id)
            .then(data => dispatch(setProfile(data.data)))
    }
}