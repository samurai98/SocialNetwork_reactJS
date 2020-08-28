import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import FollowButton from "../common/FollowButton/FollowButton";

let User = ({user, followingInProgress, unfollow, follow, isAuth}) => {
    return (
        <div className={styles.user}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null
                        ? user.photos.small : userPhoto} alt='ava'
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userName}>
                    <NavLink to={'/profile/' + user.id}>
                        {user.name}
                    </NavLink>
                </div>
                <div className={styles.status}>
                    {user.status || <span className={styles.noStatus}>no status</span>}
                </div>

                <FollowButton user={user}
                              followingInProgress={followingInProgress}
                              follow={follow}
                              unfollow={unfollow}
                              isAuth={isAuth} />
            </div>
        </div>
    )
};

export default User;