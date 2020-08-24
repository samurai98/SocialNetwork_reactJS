import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                           <img src={user.photos.small !== null
                               ? user.photos.small : userPhoto} alt="ava"
                                className={styles.userPhoto}/>
                        </NavLink>
                        </div>
                </span>
            <span>
                <span>
                    <NavLink to={'/profile/' + user.id}>
                        <div>{user.name}</div>
                    </NavLink>
                    <div className={styles.status}>{user.status || <span className={styles.noStatus}>no status</span>}</div>
                    <div>
                        {user.followed
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
                 </span>
            </span>
        </div>
    )
};

export default User;