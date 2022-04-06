
export const store = {
    _state: {
        dialogItems: [{ name: 'dmitri', id: '1' }, { name: 'volodya', id: '2' },
        { name: 'valera', id: '3' }, { name: 'nikita', id: '4' }],

        messages: [{ message: 'hello' }, { message: 'world' },
        { message: 'qq' }, { message: 'pirates' }, { message: 'fuck you' }],

        friends: [{ name: 'Dmitri' }, { name: 'Pavel' }, { name: 'Viktoria' }],

        posts: [{ text: 'lorem ipsum' }, { text: 'welcome' }, { text: 'happy end' }],

        tempText: '',
    },
    getState() {
        return this._state
    },
    handleSubscribe: null,
    subscribe(observer) {
        this.handleSubscribe = observer;
    },
    dispatch(action) { //{}
        switch (action.type) {
            case 'ADD-POST':
                let obj = { name: action.data };
                this._state.friends.push(obj);
                this.handleSubscribe(store);        
            case 'CHANGE-TEXT':
                this._state.tempText = action.data;
                this.handleSubscribe(store);        
            default:
                break;
        }
    }

}

