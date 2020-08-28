import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from '../../../assets/images/user.png';
import add from '../../../assets/images/icons/add.svg';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
    };

    return <div className={s.profileInfo}>
        <div className={s.photoBlock}>
            <img src={profile.photos.large || userPhoto} alt='ava' className={s.mainPhoto}/>
            {isOwner
            && <div className={s.newPhoto}>
                <input type='file' id='input'
                       onChange={onMainPhotoSelected}/>
                <label htmlFor='input'>
                    <div className={s.addPhoto}>
                        <img src={add} alt='add file' width='25'/>
                        Add new photo
                    </div>
                </label>
            </div>}
        </div>
        <div className={s.mainInfo}>
                <span className={s.fullName}>
            {profile.fullName}
                </span>
            <ProfileStatus isOwner={isOwner}
                           status={status}
                           updateStatus={updateStatus}/>
            {editMode
                ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileData profile={profile}
                               goToEditMode={() => setEditMode(true)}
                               isOwner={isOwner}/>}
        </div>
    </div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div className={s.profileData}>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        </div>
        {profile.lookingForAJobDescription &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>}

        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            if (profile.contacts[key])
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div>
            <button className={s.editButton} onClick={goToEditMode}>edit</button>
        </div>}
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>:
        <a rel='noopener noreferrer' target='_blank' href={contactValue}>{contactValue}</a>
    </div>
};

export default ProfileInfo;