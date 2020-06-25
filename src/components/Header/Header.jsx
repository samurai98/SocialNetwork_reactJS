import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img alt='logo'
             src='https://edmjobs.com/wp-content/uploads/job-manager-uploads/company_logo/2016/03/without-background.png?w=640'/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;