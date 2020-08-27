import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return <div className={s.status}>
        {!editMode &&
        <span title={props.isOwner && 'double click!'} onDoubleClick={props.isOwner ? activateEditMode : ''}>{props.status || 'No status'}</span>
        }
        {editMode &&
        <input value={status}
               onChange={onStatusChange}
               autoFocus={true}
               onBlur={deactivateEditMode}/>
        }
    </div>
};

export default ProfileStatus;