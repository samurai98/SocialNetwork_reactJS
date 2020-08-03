import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi!', likesCount: 5},
        {id: 2, message: 'How are you!', likesCount: 235},
        {id: 3, message: 'Hi 2!', likesCount: 50},
        {id: 4, message: 'Hi 3!', likesCount: 52}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be corrected', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});