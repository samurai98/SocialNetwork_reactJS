import {createSelector} from 'reselect';

const getUsers = (state) => {
    return state.usersPage.users;
};

export const getUsersSelector = createSelector(getUsers,
    (users) => {
        return users.filter(() => true);
    });

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getPortionNumber = (state) => {
    return state.usersPage.portionNumber;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};