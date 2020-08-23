import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from './../../assets/images/logo.png';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <NavLink to="/profile" activeClassName={s.activeLink}>
                <img alt='logo'
                     src={logo}/>
            </NavLink>
        </div>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login}
                    <button onClick={props.logout}>Log out</button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;