import React from 'react';
import styles from './FollowButton.module.css';

let FollowButton = ({user, followingInProgress, unfollow, follow, isAuth}) => {
    return (
        <div className={styles.follow}>
            {!isAuth
                ? <br/>
                : user.followed
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={followingInProgress
                        .some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}
        </div>
    )
};

export default FollowButton;