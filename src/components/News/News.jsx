import React from 'react';
import s from './News.module.css'
import development from '../../assets/images/dev.png';

const News = () => {
    return (
        <div>
            <img className={s.development} src={development} alt='The page in development'/>
        </div>
    );
};


export default News;