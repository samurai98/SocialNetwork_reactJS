import React from 'react';
import s from './Friend.module.css';
import PropTypes from "prop-types";

const Friend = (props) => {

    return <div className={s.content}>
        <div className={s.ava}></div>
        <div className={s.name}>{props.name}</div>
    </div>
}

Friend.propTypes = {
    name: PropTypes.string
};

export default Friend;