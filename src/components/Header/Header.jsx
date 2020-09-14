import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from './../../assets/images/logo.png';

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <NavLink to='/profile'>
                <img alt='logo'
                     src={logo}/>
            </NavLink>
        </div>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.userInfo}>
                    <span>
                        <NavLink to='/profile'>
                            {props.login}
                        </NavLink>
                    </span>
                    <NavLink to='/profile'>
                        <img src={props.photo} alt='ava'/>
                    </NavLink>
                    <button onClick={props.logout}>
                        Logout
                    </button>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;