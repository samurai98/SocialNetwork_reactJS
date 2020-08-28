const ADD_MESSAGE = 'samurai-network/dialogs/ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Ksenka'},
        {id: 3, name: 'Vlad2'},
        {id: 4, name: 'Vlad3'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };

        default:
            return state
    }
};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;