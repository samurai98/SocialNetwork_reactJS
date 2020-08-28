import {usersAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';

const initialState = {
    friends: []
};


const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {...state, friends: action.friends}
        }
        default:
            return state;
    }
};

export const setFriends = (friends) => ({type: SET_FRIENDS, friends});

export const getFriends = () => {
    return async (dispatch) => {
        const friends = await usersAPI.getFriends();
        dispatch(setFriends(friends.items));
    }
};

export default sidebarReducer;