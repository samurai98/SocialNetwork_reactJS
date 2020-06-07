import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
};

Profile.propTypes = {
    state: PropTypes.object
};

export default Profile;