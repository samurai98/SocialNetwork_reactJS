import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 0,
                    photoUrl: 'https://clck.ru/NrYdY',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'my status there',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 1,
                    photoUrl: 'https://clck.ru/NrYdY',
                    followed: true,
                    fullName: 'Vlad',
                    status: 'my stat 2',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://clck.ru/NrYdY',
                    followed: true,
                    fullName: 'Ksenka',
                    status: 'my stat 3',
                    location: {city: 'Tumen', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://clck.ru/NrYdY',
                    followed: false,
                    fullName: 'Timon',
                    status: 'my stat 4',
                    location: {city: 'Moscow', country: 'Russia'}
                }
            ]
        );
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="ava" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;