import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJytpZ2Vv11DPNUcNlgkoBeT3auVKnT2K1ZDFg=s900-c-k-c0xffffffff-no-rj-mo' />
                {props.message}
                <div>
                    <span>Like - {props.likesCount}</span>
                </div>

            </div>
        )
}

export default Post;