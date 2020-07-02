import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.content}>
        <div className={s.picture}>
            <img src='https://widewp.ru/images/nature/1904.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            ava + description
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}/>
        </div>
    </div>
}

export default ProfileInfo;