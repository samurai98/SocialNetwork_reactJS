import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My post
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>

        <div className={s.posts}>
            <Post message='Hi!' likesCount={5}/>
            <Post message='How are you!' likesCount={235}/>
            <Post message='Hi 2!' likesCount={50}/>
            <Post message='Hi 3!' likesCount={52}/>

        </div>
    </div>
}

export default MyPosts;