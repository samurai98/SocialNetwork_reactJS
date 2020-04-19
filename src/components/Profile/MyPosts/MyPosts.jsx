import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.allPosts.map(el =>  <Post message={el.message} likesCount={el.likesCount}/>);

    return <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>

        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;