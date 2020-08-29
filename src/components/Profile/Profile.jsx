import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PropTypes from 'prop-types';
import MyPostsContainer from './MyPosts/MyPostsContainer';

export const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile}
                     status={props.status}
                     isOwner={props.isOwner}
                     updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer/>
    </div>
};

Profile.propTypes = {
    state: PropTypes.object
};

export default Profile;