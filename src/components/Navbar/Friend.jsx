import React from 'react';
import s from './Friend.module.css';
import user from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';
import FollowButton from '../common/FollowButton/FollowButton';

const Friend = ({friend, followingInProgress, follow, unfollow, isAuth}) => {
    return <div className={s.content}>

        <div className={s.ava}>
            <NavLink title={friend.name} to={'/profile/' + friend.id}>
                <img src={friend.photos.small || user} alt='ava'/>
            </NavLink>
        </div>
        <div className={s.name}>
            <NavLink title={friend.name} to={'/profile/' + friend.id}>
                {friend.name}
            </NavLink>
        </div>

        <FollowButton user={friend}
                      followingInProgress={followingInProgress}
                      follow={follow}
                      unfollow={unfollow}
                      isAuth={isAuth}/>
    </div>
};

export default Friend;