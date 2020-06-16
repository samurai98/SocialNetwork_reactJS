import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data);
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
};

