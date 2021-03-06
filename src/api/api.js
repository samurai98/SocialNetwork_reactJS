import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        //'API-KEY': '641371ec-d5ac-4e54-91b7-f9eab8c7c8f0' // my
         'API-KEY': '421593e8-55e9-4a16-9adc-2959bf4b1754' //test
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
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    },
    getFriends() {
        return instance.get(`users?friend=true`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    getAuthUserPhoto(userName) {
        return instance.get(`users?term=${userName}`).then(response => response.data.items[0].photos.small);
    },
    logout() {
        return instance.post(`auth/logout`);
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};

