import { authMe_reducer, dialogs_reducer, loading_reducer, profile_reducer, users_reducer } from "./reducers";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

// // export const store = {
// //     _state: {
//         dialogs: {
//             dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
//             { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],
//             messages: [{ message: 'hello' }, { message: 'world' },
//             { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],
//             tempUserText: '',
//         },
//         profile: {
//             friends: [{ name: 'Dmitri' }, { name: 'Pavel' }, { name: 'Viktoria' }],

//             posts: [{ text: 'lorem ipsum' }, { text: 'welcome' }, { text: 'happy end' }],
//             tempText: '',
//         }

//     },
//     getState() {
//         return this._state
//     },
//     handleSubscribe: null,
//     subscribe(observer) {
//         this.handleSubscribe = observer;
//     },
//     dispatch(action) {
//         this._state.dialogs = dialogs_reducer(this._state.dialogs, action);
//         this._state.profile = profile_reducer(this._state.profile, action);
//         this.handleSubscribe(store);
//     }

// }

let reducers = combineReducers({//формируется state... 
    dialogs: dialogs_reducer,
    profile: profile_reducer,
    users: users_reducer,
    load: loading_reducer,
    authMe: authMe_reducer,
}, applyMiddleware);

export let reduxStore = createStore(reducers, compose(applyMiddleware(thunk)));


