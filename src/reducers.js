import { ADD_POST, ADD_USER, CHANGE_TEXT, FOLLOW, SET_COUNT, SET_LOAD, SET_USERS, UNFOLLOW, UPDATE_USER_TEXT } from "./actions";

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

let initialUsers = {
    items: [],
    "totalCount": 0,
    "error": null
}

let initialLoad = {
    isLoad: false
}

export const loading_reducer = (state = initialLoad, action) => {
    switch(action.type){
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
                items: state.items.map( (item) => {
                    if(item.id === action.id) {
                        return {
                            ...item,
                            followed: true
                        }
                    }
                    return item;
                }  )
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map( (item) => {
                    if(item.id === action.id) {
                        return {
                            ...item,
                            followed: false
                        }
                    }
                    return item;
                }  )
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
        case ADD_POST:
            return {
                ...state,
                friends: [...state.friends, { name: action.data }],
                tempText: ''
            }
        case CHANGE_TEXT:
            return {
                ...state,
                tempText: action.data,
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