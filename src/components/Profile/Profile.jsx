import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <img src='https://widewp.ru/images/nature/1904.jpg'/>
        <div>
            ava + description
        </div>
        <MyPosts/>

    </div>
}

export default Profile;