let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi!', likesCount: 5},
            {id: 2, message: 'How are you!', likesCount: 235},
            {id: 3, message: 'Hi 2!', likesCount: 50},
            {id: 4, message: 'Hi 3!', likesCount: 52}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Ksuha'}
        ]

    }
}

export default state;