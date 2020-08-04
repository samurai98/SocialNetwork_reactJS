import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;