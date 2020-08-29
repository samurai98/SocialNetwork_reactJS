import React from 'react';
import s from './Settings.module.css'
import development from '../../assets/images/dev.png';

const Settings = () => {
    return (
        <div>
            <img className={s.development} src={development} alt='The page in development'/>
        </div>
    );
};


export default Settings;