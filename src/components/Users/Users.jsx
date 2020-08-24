import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = ({currentPage, totalUsersCount, onPageChanged, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   portionSize={15}/>
        <div className={styles.users}>
            {users.map(u => <User key={u.id}
                                  user={u}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unfollow={props.unfollow}/>)
            }
        </div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   portionSize={15}/>
    </div>
};

export default Users;