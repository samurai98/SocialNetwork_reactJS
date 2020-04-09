import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
            <div className={s.item}>
                <img src='https://yt3.ggpht.com/a/AATXAJytpZ2Vv11DPNUcNlgkoBeT3auVKnT2K1ZDFg=s900-c-k-c0xffffffff-no-rj-mo' />
                Post1
                <div>
                    <span>Like</span>
                </div>

            </div>
        )
}

export default Post;