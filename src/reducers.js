import { SET_STATUS, ADD_USER, FOLLOW, FOLLOW_IN_PROGRESS, REMOVE_IN_PROGRESS, SET_AUTH_ME, SET_COUNT, SET_LOAD, SET_PROFILE, SET_USERS, UNFOLLOW, UPDATE_USER_TEXT } from "./actions";
import StatusContainer from "./Components/Content/Profile/Status/StatusContainer";

let initialAuthMe = {
    id: null,
    email: '',
    login: '',
    online: false,
}

let initialDialog = {
    dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
    { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],
    messages: [{ message: 'hello' }, { message: 'world' },
    { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],
    tempUserText: '',
}

let initialProfile = {
    "status": '',
    "aboutMe": "",
    "contacts": {
        "skype": "",
        "vk": "",
        "facebook": "",
        "icq": "",
        "email": "",
        "googlePlus": "",
        "twitter": "",
        "instagram": "",
        "whatsApp": ""
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": '',
    "fullName": "",
    "userId": null
}

let initialUsers = {
    items: [],
    "totalCount": 0,
    "error": null,
    users_following: [],
}

let initialLoad = {
    isLoad: false
}

export const authMe_reducer = (state = initialAuthMe, action) => {
    switch (action.type) {
        case SET_AUTH_ME:
            return {
                ...action.authProfile,
                online: true
            }
        default:
            break
    }
    return state;
}

export const loading_reducer = (state = initialLoad, action) => {
    switch (action.type) {
        case SET_LOAD:
            return {
                ...state,
                isLoad: action.isLoad
            }
        default:
            break
    }
    return state;
}

export const users_reducer = (state = initialUsers, action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                totalCount: action.count,
            }
        case SET_USERS:
            return {
                ...state,
                items: [...action.items]
            }
        case FOLLOW:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            followed: true
                        }
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            followed: false
                        }
                    }
                    return item;
                })
            }
        case FOLLOW_IN_PROGRESS:
            return {
                ...state,
                users_following: [...state.users_following, action.id]
            }
        case REMOVE_IN_PROGRESS:
            return {
                ...state,
                users_following: [...state.users_following.filter((item) => item !== action.id)]
            }
        default: break
    }
    return state;
}

export const dialogs_reducer = (state = initialDialog, action) => {
    switch (action.type) { //connect вызовет свой рендер только если будет создан новый объект,
        //то есть в mapStatetoProps значение будет обновлено, в противном случае рендера не будет
        case ADD_USER:
            return {
                ...state,
                dialogItems: [...state.dialogItems, { name: action.data }],
                tempUserText: '',
            }
        case UPDATE_USER_TEXT:
            return {
                ...state,
                tempUserText: action.data,
            }
        default:
            break
    }
    return state;
}

export const profile_reducer = (state = initialProfile, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                ...action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            break
    }
    return state;
}





//Для чего initial objects? стартует проект и от react приходят экшены, т.к. совпадений нет, то по коду из switch 
//идет возрат return state; но state = undefined, поэтому неободимо инициализировать
//без них будет ошибка

//без создания новых объектов не будет рендера через connect, т.к. mapStateToProps одни и те же данные

//state в каждом случае будет разный, он добавляется под капотом после каждого dispatch


//PLAN B
//1.создать примерный массив объектов UI
//2.создать initial 
//3.создать reducer 
//3.1 добавить в store
//4.создать actions
//5.connect
//6.ui


//PLAN A
//1.создать примерный массив объектов UI
//2.создать initial 
//3.создать reducer  
//4.создать store redux
//5.закомбайнить reducers
//6.Provider store react-redux
//