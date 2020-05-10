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
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.store = store;
export default store;