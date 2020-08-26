import React from 'react';
import s from './Music.module.css';
import development from './../../assets/images/dev.png';

const Music = () => {
    return (
        <div>
            <img className={s.development} src={development} alt='The page in development'/>
        </div>
    );
}


export default Music;