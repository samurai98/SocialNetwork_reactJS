import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return <div className={s.content}>
        <div className={s.picture}>
            <img alt={'ava'} src='https://widewp.ru/images/nature/1904.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large} alt=''/>
            ava + description
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;