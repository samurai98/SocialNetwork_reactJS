import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}/>
    </div>
}

Profile.propTypes = {
    state: PropTypes.object
}

export default Profile;