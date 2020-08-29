import React, {useEffect} from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friend from './Friend';
import home from './../../assets/images/icons/home.svg';
import users from './../../assets/images/icons/users.svg';
import dialogs from './../../assets/images/icons/dialogs.svg';
import news from './../../assets/images/icons/news.svg';
import music from './../../assets/images/icons/music.svg';
import set from './../../assets/images/icons/settings.svg';
import {useDispatch, useSelector} from 'react-redux';
import {follow, unfollow} from '../../redux/users-reducer';


const Navbar = React.memo((props) => {

    const isAuth = useSelector((state) => state.auth.isAuth);
    const followingInProgress = useSelector((state) => state.usersPage.followingInProgress);
    const dispatch = useDispatch();

    useEffect(() => {
        props.getFriends();
    }, [props.state.friends.length]);

    const allFriends = props.state.friends.length
        ? props.state.friends.map(el => <Friend key={el.id}
                                                friend={el}
                                                isAuth={isAuth}
                                                follow={(userId) => dispatch(follow(userId))}
                                                unfollow={(userId) => dispatch(unfollow(userId))}
                                                followingInProgress={followingInProgress}/>)
        : <div className={s.noFriends}>No friends</div>;

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}><img src={home} alt='home'/>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}><img src={users} alt='users'/>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}><img src={dialogs} alt='dialogs'/>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.activeLink}><img src={news} alt='news'/>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}><img src={music} alt='music'/>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.activeLink}><img src={set} alt='set'/>Settings</NavLink>
        </div>
        {isAuth ?
            <div className={s.friends}>
                <span>Friends</span> {allFriends}
            </div>
            : ''}
    </nav>
});

export default Navbar;