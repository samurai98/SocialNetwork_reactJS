import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.content}>
        <div className={s.picture}>
            <img src='https://widewp.ru/images/nature/1904.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;