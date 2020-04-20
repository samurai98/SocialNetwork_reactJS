import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";

const Profile = (props) => {

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts allPosts={props.state.posts}/>
    </div>
}

Profile.propTypes = {
    state: PropTypes.object
}

export default Profile;