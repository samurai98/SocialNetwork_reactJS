import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Firend";
import PropTypes from "prop-types";
import home from './../../assets/images/icons/home.svg';
import users from './../../assets/images/icons/users.svg';
import dialogs from './../../assets/images/icons/dialogs.svg';
import news from './../../assets/images/icons/news.svg';
import music from './../../assets/images/icons/music.svg';
import set from './../../assets/images/icons/settings.svg';


const Navbar = (props) => {
    let allFriends = props.state.friends.map(el => <Friend name={el.name}/>);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}><img src={home} alt="home"/>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/users" activeClassName={s.activeLink}><img src={users} alt="users"/>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}><img src={dialogs} alt="dialogs"/>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}><img src={news} alt="news"/>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}><img src={music} alt="music"/>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}><img src={set} alt="set"/>Settings</NavLink>
        </div>
        <div className={s.friends}>
            Friends
            {allFriends}
        </div>
    </nav>
}

Navbar.propTypes = {
    state: PropTypes.object
}

export default Navbar;