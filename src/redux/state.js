let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi!', likesCount: 5},
                {id: 2, message: 'How are you!', likesCount: 235},
                {id: 3, message: 'Hi 2!', likesCount: 50},
                {id: 4, message: 'Hi 3!', likesCount: 52}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Ksenka'},
                {id: 3, name: 'Vlad2'},
                {id: 3, name: 'Vlad3'}
            ],
            newMessageText: 'Dobry Vladka'
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Ksuha'}
            ]

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;