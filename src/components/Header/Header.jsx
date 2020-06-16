import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
      -  <img alt='logo' src='https://www.stickpng.com/assets/images/5a4fbafbda2b4f099b95da05.png'/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;