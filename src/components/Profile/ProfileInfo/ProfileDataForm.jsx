import React from 'react';
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>save</button>
        </div>

        <div>
            <b>FullName</b>: {createField('Full name', 'fullName', [], Input)}
        </div>

        <div>
            <b>Loking for a job:</b> {createField('', 'lookingForAJob',
            [], Input, {type: 'checkbox'})}
        </div>
        {profile.lookingForAJobDescription &&
        <div>
            <b>My professional skills:</b>
            {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>}

        <div>
            <b>About me</b>: {createField('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Textarea)}</b>
            </div>
        })}
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;