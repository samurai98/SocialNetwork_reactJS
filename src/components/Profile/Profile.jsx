import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts allPosts={props.state.posts}/>
    </div>
}

export default Profile;