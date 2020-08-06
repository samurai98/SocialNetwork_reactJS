import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
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

    return <div className={s.content}>
        <div className={s.picture}>
            <img alt={'ava'} src='https://widewp.ru/images/nature/1904.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt='ava' className={s.mainPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>
        </div>

        {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData profile={profile}
                           goToEditMode={() => setEditMode(true)}
                           isOwner={isOwner}/>}

    </div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}

        <div>
            <b>FullName</b>: {profile.fullName}
        </div>

        <div>
            <b>Loking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
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
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;