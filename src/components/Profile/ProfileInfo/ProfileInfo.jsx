import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return <div className={s.content}>
        <div className={s.picture}>
            <img alt={'ava'} src='https://widewp.ru/images/nature/1904.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt='ava' className={s.mainPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} /> }
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>
    </div>
};

export default ProfileInfo;